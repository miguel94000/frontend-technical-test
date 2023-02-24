import {
    Box,
    Card,
    ListItem,
    ListItemButton,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';
import { Message, Error } from 'src/app/entities';
import { formatDateDynamicFR } from 'src/utils/date/format-date';
import { SelectIcon } from 'src/utils/icon/select-icon';
import { useAppDispatch } from 'src/redux/store';
import { updateMessageReadById } from 'src/app/message/core/use-cases/update-message-read-by-id';
import { message_card_container } from 'src/theme';
import {
    FormatPhoneMessage,
    IsPhoneMessage,
    MaxlengthText,
} from 'src/utils/text/text-format';
import { colors } from 'src/theme/colors';
import { retrieveRealtors } from 'src/app/realtor/core/use-cases/retrieve-realtors';
import { Notificator  } from 'src/utils/notification/notificator';
import { commonLabels } from 'src/ressources/language/common/common-labels';

interface MessageCardProps {
    message: Message;
    handleSetMessageId: (newMessageId: number) => void;
    setOpenDetailMessage: (setOpenDetailMessage: boolean) => void;
}
export function MessageCard(props: MessageCardProps) {
    // State
    const opacity = {
        filter: 'opacity(0.5)',
    };
    const classes = message_card_container;
    const dispatch = useAppDispatch();
    const { message, handleSetMessageId, setOpenDetailMessage } = props;

    // Comportement
    const onClickSetNewMessageId = () => {
        handleSetMessageId(message.id);
        if (!message.read) {
            dispatch(updateMessageReadById({ message }))
            .then(()=>{
                return dispatch(retrieveRealtors())
            })
            .catch((error: Error) =>{
                if(Number(error.status) >= 400 && Number(error.status) <= 499){
                    Notificator.Error((commonLabels.errors.apiClientError).replace('{0}', commonLabels.title.message))

                } else {
                    Notificator.Error(commonLabels.errors.apiServerError)

                }
            })
        }
        setOpenDetailMessage(true);

    };

    // Rendu
    return (
        <ListItem
            sx={message.read ? opacity : {}}
            onClick={onClickSetNewMessageId}
            disablePadding
        >
            <ListItemButton sx={classes.list_item_button}>
                <Card sx={classes.card}>
                    <Box
                        sx={classes.icon_informations_time_container}
                    >
                        <Box sx={classes.icon_informations_container}>
                            {SelectIcon(message)}
                            <Stack spacing={0.5}>
                                {FormatPhoneMessage(message)}
                                <Typography>{message.subject}</Typography>
                                <Typography>
                                    {IsPhoneMessage(message.type)
                                        ? message.subject
                                        : MaxlengthText(message.body)}
                                </Typography>
                            </Stack>
                        </Box>
                        <Typography color={colors.purple}>
                            {formatDateDynamicFR(message.date)}
                        </Typography>
                    </Box>
                </Card>
            </ListItemButton>
        </ListItem>
    );
}

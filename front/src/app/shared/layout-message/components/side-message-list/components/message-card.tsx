import {
    Box,
    Card,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Switch,
    Typography,
} from '@mui/material';
import React from 'react';
import { Message } from 'src/app/entities';
import { formatDateDynamicFR } from 'src/utils/date/format-date';
import { SelectIcon } from 'src/utils/icon/select-icon';
import { useDispatch } from 'react-redux';
import { updateMessageReadById } from 'src/app/message/core/use-cases/update-message-read-by-id';
import { custom_stack, message_card_container } from 'src/theme';
import { FormatPhoneMessage, IsPhoneMessage, MaxlengthText } from 'src/utils/text/text-format';
import { width } from '@mui/system';
import { colors } from 'src/theme/colors';

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
    const classes = message_card_container();
    const dispatch = useDispatch();
    const { message, handleSetMessageId, setOpenDetailMessage } = props;

    // Comportement
    const onClickSetNewMessageId = () => {
        handleSetMessageId(message.id);
        if (!message.read) {
            dispatch(updateMessageReadById({ message }));
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
            <ListItemButton className={classes.root}>
                <Card >
                    <Box sx={{ p: 3, display: 'flex'}}>
                        {SelectIcon(message)}
                        <Stack spacing={0.5} style={custom_stack}>
                            {FormatPhoneMessage(message)}
                            
                            <Typography variant="body2" color="#000000">
                                {message.subject}
                            </Typography>
                            <Typography paragraph>
                                {IsPhoneMessage(message.type) ? message.subject : MaxlengthText(message.body)}
                            </Typography>
                        </Stack>
                        <Typography  color={colors.purple}>
                            {formatDateDynamicFR(message.date)}
                        </Typography>
                    </Box>
                </Card>
            </ListItemButton>
        </ListItem>
    );
}

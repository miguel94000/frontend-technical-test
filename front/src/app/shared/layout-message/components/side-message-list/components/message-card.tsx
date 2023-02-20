import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React from 'react';
import { Message } from 'src/app/entities';
import { formatDateDynamicFR } from 'src/utils/date/format-date';
import { SelectIcon } from 'src/utils/icon/select-icon';
import { useDispatch } from 'react-redux';
import { updateMessageReadById } from 'src/app/message/core/use-cases/update-message-read-by-id';
import { message_card_container } from 'src/theme';

interface MessageCardProps {
    message: Message;
    handleSetMessageId: (newMessageId: number) => void;
    setOpenDetailMessage: (setOpenDetailMessage: boolean) => void
}
export function MessageCard(props: MessageCardProps) {
    // State
    const opacity = {
        filter: 'opacity(0.5)'
      };
    const classes = message_card_container()
    const dispatch = useDispatch();
    const { message, handleSetMessageId, setOpenDetailMessage } = props;

    // Comportement
    const onClickSetNewMessageId = () => {
        handleSetMessageId(message.id);
        if (!message.read) {
            dispatch(updateMessageReadById({ message }));
        }
        setOpenDetailMessage(true)
    }


    // Rendu
    return (
        <ListItem sx={message.read ? opacity : {}} onClick={onClickSetNewMessageId} disablePadding>
            <ListItemButton className={classes.root}>
                <ListItemIcon>{SelectIcon(message)}</ListItemIcon>
                <ListItemText>
                    <p>{message.contact.firstname}</p>
                    <p>{message.contact.lastname}</p>
                    <p>{message.subject}</p>
                    {/* taille maximum du body 50 caractère */}
                    <p>{message.body}</p>I
                    <p>{formatDateDynamicFR(message.date)}</p>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

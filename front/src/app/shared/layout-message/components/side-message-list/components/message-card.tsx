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

interface MessageCardProps {
    message: Message;
    handleSetMessageId: (newMessageId: number) => void;
}
export function MessageCard(props: MessageCardProps) {
    // State
    const dispatch = useDispatch();
    const { message, handleSetMessageId } = props;

    // Comportement
    const onClickSetNewMessageId = () => {
        handleSetMessageId(message.id);
        if (!message.read) {
            dispatch(updateMessageReadById({ message }));
        }
    }

    // const filters = message.read ? {
    //      filter: 'grayscale(80%)'
    // } : {}

    const filters = {filter: 'grayscale(80%)' }
    // Rendu
    if (!message.id) {
        return (
                <ListItem>
                    <ListItemText>Aucun Message</ListItemText>
                </ListItem>
        )                   
    }
    return (
        <ListItem style={filters} onClick={onClickSetNewMessageId} disablePadding>
            <ListItemButton>
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

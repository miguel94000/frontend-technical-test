import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React from 'react';
import { Message } from 'src/app/entities';
import MailIcon from '@mui/icons-material/Mail';

interface MessageCardProps {
    message: Message;
}
export function MessageCard(props: MessageCardProps) {
    // State
    const { message } = props;

    // Comportement
    // Rendu
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText>
                    <p>{message.contact.firstname}</p>
                    <p>{message.contact.lastname}</p>
                    <p>{message.subject}</p>
                    {/* taille maximum du body 50 caractère */}
                    <p>{message.body}</p>I
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

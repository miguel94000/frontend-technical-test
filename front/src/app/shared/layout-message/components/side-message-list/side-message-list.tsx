import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';
import { updateMessageListByRealtorId } from 'src/app/message/core/use-cases/update-message-list-by-realtor-id';
import { MessageCard } from './components/message-card';

interface SideMessageListProps {
    handleSetMessageId: (newMessageId: number) => void;
    messages: Message[]
}
export function SideMessageList(props: SideMessageListProps) {
    // State
    const { handleSetMessageId, messages } = props;

    // Comportement

    // Inifite Scroll



    // Render
    return (
        <List>
            {messages.map((message, key) => (
                <MessageCard
                    key={key}
                    message={message}
                    handleSetMessageId={handleSetMessageId}
                />
            ))}
        </List>
    );
}

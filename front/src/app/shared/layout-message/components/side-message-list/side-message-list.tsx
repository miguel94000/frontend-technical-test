import { List } from '@mui/material';
import React from 'react';
import { Message } from 'src/app/entities';
import { MessageCard } from './components/message-card';

interface SideMessageListProps {
    handleSetMessageId: (newMessageId: number) => void;
    messages: Message[];
}
export function SideMessageList(props: SideMessageListProps) {
    // State
    const { handleSetMessageId, messages } = props;

    // Comportement

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

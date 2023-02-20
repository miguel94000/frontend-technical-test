import { List } from '@mui/material';
import React from 'react';
import { Message } from 'src/app/entities';
import { MessageCard } from './components/message-card';

interface SideMessageListProps {
    handleSetMessageId: (newMessageId: number) => void;
    setOpenDetailMessage: (setOpenDetailMessage: boolean)=> void
    messages: Message[];
}
export function SideMessageList(props: SideMessageListProps) {
    // State
    const { handleSetMessageId, messages, setOpenDetailMessage } = props;

    // Comportement

    // Render
    return (
        <List>
            {messages.map((message, key) => (
                <MessageCard
                    key={key}
                    message={message}
                    handleSetMessageId={handleSetMessageId}
                    setOpenDetailMessage={setOpenDetailMessage}
                />
            ))}
        </List>
    );
}

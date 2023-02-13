import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';

export function SideMessageList() {
    // State
    const messages: Message[] = useSelector(
        selectors.selectMessageListViewModel()
    );
    // Comportement
    // Render
    return (
        <>
            <Stack direction="row" spacing={1}>
                {messages.map((message, index) => (
                    <Chip key={index} label={message.subject} />
                ))}
            </Stack>
        </>
    );
}

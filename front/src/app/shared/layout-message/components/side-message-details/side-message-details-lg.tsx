import React from 'react';
import { useSelector } from 'react-redux';
import { Message, MessageType } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';

import { Box, Stack, Typography } from '@mui/material';
import { commonLabels } from 'src/ressources/language/common/common-labels';
import { formatDateUS } from 'src/utils/date/format-date';
import { purple } from '@mui/material/colors';
import { SelectIcon } from 'src/utils/icon/select-icon';

interface SideMessageDetailsProps {
    messageId: number;
}

export function SideMessageDetailsLg(props: SideMessageDetailsProps) {
    // State
    const { messageId } = props;
    const message: Message = useSelector(
        selectors.selectMessageById(messageId)
    );

    // Comportement

    
    // Rendu
    if (!message.id) {
        return <p>{commonLabels.messages.notFound}</p>;
    }

    return (
        <>
            <div>
                {SelectIcon(message)}
                <Stack spacing={0.5}>
                    <Typography variant="h4">
                        {message.contact.firstname} {message.contact.lastname}
                    </Typography>
                    <Typography variant="h5">
                        {commonLabels.contact.email}
                    </Typography>
                    <Typography variant="h5" color={purple}>
                        {message.contact.email}
                    </Typography>
                    <Typography variant="h5">
                        {commonLabels.contact.phone}
                    </Typography>
                    <Typography variant="h5">
                        {message.contact.phone}
                    </Typography>
                </Stack>
            </div>
            <Stack spacing={0.5}>
                <Typography variant="h5">
                    {message.contact.firstname} {message.contact.lastname}
                </Typography>
                <Typography variant="h5">
                    {formatDateUS(message.date)}
                </Typography>
            </Stack>
            <Typography paragraph>{message.body}</Typography>
        </>
    );
}

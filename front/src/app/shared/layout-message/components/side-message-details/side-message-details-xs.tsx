import React from 'react';
import { useSelector } from 'react-redux';
import { Message, MessageType } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';

import { Box, Stack, SvgIcon, Toolbar, Typography } from '@mui/material';
import { commonLabels } from 'src/ressources/language/common/common-labels';
import { formatDateUS } from 'src/utils/date/format-date';
import { purple } from '@mui/material/colors';
import { SelectIcon } from 'src/utils/icon/select-icon';
import { custom_typography, theme } from 'src/theme';
import { FormatPhoneNumber } from 'src/utils/text/text-format';

interface SideMessageDetailsProps {
    messageId: number;
}

export function SideMessageDetailsXs(props: SideMessageDetailsProps) {
    // State
    const classes = {
        custom_typography: custom_typography,
    };
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
        <Box sx={custom_typography.detail.main}>
            <Box
                sx={custom_typography.detail.header}
            >
                <SvgIcon sx={custom_typography.detail.svg_icon}>
                    {SelectIcon(message)}
                </SvgIcon>
                <Stack spacing={1}>
                    <Typography sx={classes.custom_typography.detail.bold}>
                        {message.contact.firstname} {message.contact.lastname}
                    </Typography>
                    <Typography
                        sx={{...classes.custom_typography.detail.normal, textTransform: 'capitalize' }}
                    >
                        {commonLabels.contact.email}
                    </Typography>
                    <Typography
                        sx={{...classes.custom_typography.detail.normal, textTransform: 'capitalize' }}
                    >
                        {commonLabels.contact.phone}
                    </Typography>
                </Stack>
                <Stack direction="column-reverse" spacing={1}>
                    <Typography sx={classes.custom_typography.detail.normal_color}>
                        {FormatPhoneNumber(message.contact.phone)}
                    </Typography>
                    <Typography sx={classes.custom_typography.detail.normal_color}>
                        {message.contact.email}
                    </Typography>
                </Stack>
            </Box>
            <Toolbar />
            <Box sx={classes.custom_typography.detail.body}>
                <Stack spacing={1}>
                    <Typography sx={classes.custom_typography.detail.bold2}>
                        {message.contact.firstname} {message.contact.lastname}
                    </Typography>
                    <Typography sx={classes.custom_typography.detail.normal_color2}>
                        {formatDateUS(message.date)}
                    </Typography>
                </Stack>
                <Typography sx={{...classes.custom_typography.detail.paragraphe, overflowY: 'scroll'}}>{message.body}</Typography>
            </Box>
        </Box>
    );
}

import { Box } from '@mui/material';
import React from 'react';
import { LayoutMessage } from './shared/layout-message/layout-message';
import { TopMenu } from './shared/top-menu/top-menu'

export function Index() {
    // State

    // Comportement

    // Rendu
    return <Box sx={{ display: 'flex' }}>
        <TopMenu />
        <LayoutMessage />
    </Box>;
}

import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    SwipeableDrawer,
    Toolbar,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';
import { SideMessageDetails } from './components/side-message-details/side-message-details';
import { SideMessageList } from './components/side-message-list/side-message-list';

export function LayoutMessage() {
    // State
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = useState<boolean>(true);
    const [messageId, setMessageId] = useState<string>('');

    // Comportement
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleSetMessageId = (newMessageId: string) => {
        setMessageId(newMessageId);
    };

    // Render
    return (
<>
            <Drawer
                variant="permanent"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        marginTop:9,
                        width: 650,
                        '&::-webkit-scrollbar': {display: 'none'}

                    },
                }}
            >
                <SideMessageList handleSetMessageId={handleSetMessageId} />
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <SideMessageDetails messageId={messageId} />
            </Box>
            </>
    );
}

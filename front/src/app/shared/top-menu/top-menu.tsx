import { Box, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { UnreadMessageCounter } from './components/unread-message-counter';
import { SwitcherRealtor } from './components/switcher-realtor';

export function TopMenu() {
    // State
    const [realtorIdSelected, setRealtorIdSelected] = useState<string>('');

    // Comportement
    const handleChangeSetRealtorIdSelected = (newId: string) => {
        setRealtorIdSelected(newId);
    };

    // Rendu
    return (
        <AppBar
        position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <UnreadMessageCounter realtorIdSelected={realtorIdSelected} />
                <SwitcherRealtor
                    handleChangeSetRealtorIdSelected={
                        handleChangeSetRealtorIdSelected
                    }
                    realtorIdSelected={realtorIdSelected}
                />
            </Toolbar>
        </AppBar>
    );
}

import { Toolbar } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { UnreadMessageCounter } from './components/unread-message-counter';
import { SwitcherRealtor } from './components/switcher-realtor';
import { ReactComponent as Logo } from 'src/ressources/assets/logo-aviv.svg';
import { tool_bar } from 'src/theme';

export function TopMenu() {
    // State
    const [realtorIdSelected, setRealtorIdSelected] = useState<string>('');
    const classes = {
        tool_bar: tool_bar,
    };
    // Comportement
    const handleChangeSetRealtorIdSelected = (newId: string) => {
        setRealtorIdSelected(newId);
    };

    // Rendu
    return (
        <AppBar sx={classes.tool_bar}>
            <Logo />
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

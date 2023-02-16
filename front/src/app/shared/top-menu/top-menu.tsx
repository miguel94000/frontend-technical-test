import { SvgIcon, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { UnreadMessageCounter } from './components/unread-message-counter';
import { SwitcherRealtor } from './components/switcher-realtor';
import { ReactComponent as Logo } from 'src/ressources/assets/logo-aviv.svg';

export function TopMenu() {
    // State
    const [realtorIdSelected, setRealtorIdSelected] = useState<string>('');

    // Comportement
    const handleChangeSetRealtorIdSelected = (newId: string) => {
        setRealtorIdSelected(newId);
    };

    // Rendu
    return (
        <AppBar>
            <SvgIcon>
                <Logo />
            </SvgIcon>
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

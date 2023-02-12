import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Toolbar,
} from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Realtor } from 'src/app/entities';
import { useState } from 'react';
import { commonLabels } from 'src/ressources/language/common/common-labels';
import { useSelector } from 'react-redux';
import { selectors } from 'src/app/realtor/adapters/ui/selectors';


export function ProfilMenu() {
    // State
    const realtors: Realtor[] = useSelector(
        selectors.selectRealtorListViewModel()
    );
    const [realtorId, setRealtorId] = useState<string>("")
    
    // Rendu
    return (
        <AppBar position="fixed" color="transparent">
            <Toolbar variant="applicationToolbar" disableGutters={true}>
                <Box className="application-left-header">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">
                            {commonLabels.realtorSwitchBtn.title}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={realtorId}
                            onChange={(value)=>setRealtorId(value.toString())}
                        >
                            {realtors.map((realtor, index) => (
                                <MenuItem key={index} value={realtor.id}>{realtor.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Realtor } from 'src/app/entities';
import { selectors } from 'src/app/realtor/adapters/ui/selectors';
import { commonLabels } from 'src/ressources/language/common/common-labels';

interface SwitcherRealtorProps {
    handleChangeSetRealtorIdSelected: (realtorId: string)=>void;
    realtorIdSelected: string;
}
export function SwitcherRealtor(props: SwitcherRealtorProps) {
    // State
    const {handleChangeSetRealtorIdSelected, realtorIdSelected} = props
    const realtors: Realtor[] = useSelector(
        selectors.selectRealtorListViewModel()
    );
    const handleChange = (event: SelectChangeEvent) => {
        handleChangeSetRealtorIdSelected(event.target.value as string);
    };
    // Comportement
    // Rendu
    return (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
                {commonLabels.realtorSwitchBtn.title}
            </InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={realtorIdSelected}
                onChange={handleChange}
            >
                {realtors.map((realtor, index) => (
                    <MenuItem key={index} value={realtor.id}>
                        {realtor.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

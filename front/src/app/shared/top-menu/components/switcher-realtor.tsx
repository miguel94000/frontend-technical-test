import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Realtor } from 'src/app/entities';
import { retrieveMessagesByRealtorId } from 'src/app/message/core/use-cases/retrieve-messages';
import { selectors } from 'src/app/realtor/adapters/ui/selectors';
import { commonLabels } from 'src/ressources/language/common/common-labels';

interface SwitcherRealtorProps {
    handleChangeSetRealtorIdSelected: (realtorId: string)=>void;
    realtorIdSelected: string;
}
export function SwitcherRealtor(props: SwitcherRealtorProps) {
    // State
    const dispatch = useDispatch()
    const {handleChangeSetRealtorIdSelected, realtorIdSelected} = props
    const realtors: Realtor[] = useSelector(
        selectors.selectRealtorListViewModel()
    );

    // Comportement
    const handleChange = (event: SelectChangeEvent) => {
        const idSelected = event.target.value as string
        handleChangeSetRealtorIdSelected(idSelected);

        dispatch(retrieveMessagesByRealtorId({
            realtor_id: idSelected,
            pageNumber: 1,
            pageSize: 20
        }))
    };
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

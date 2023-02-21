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
import { unread_message_container, select_realtors} from 'src/theme';

interface SwitcherRealtorProps {
    handleChangeSetRealtorIdSelected: (realtorId: string) => void;
    realtorIdSelected: string;
}
export function SwitcherRealtor(props: SwitcherRealtorProps) {
    // State
    const classes = {
        unread_message_container: unread_message_container(),
        select_realtors: select_realtors()
    }
    const dispatch = useDispatch();
    const { handleChangeSetRealtorIdSelected, realtorIdSelected } = props;
    const realtors: Realtor[] = useSelector(
        selectors.selectRealtorListViewModel()
    );

    // Comportement
    const handleChange = (event: SelectChangeEvent) => {
        const idSelected = event.target.value as string;
        handleChangeSetRealtorIdSelected(idSelected);
        // TODO: Au chargement il faut remettre à zéro la liste de messages donc RAZ le scroll
        dispatch(
            retrieveMessagesByRealtorId({
                realtor_id: idSelected,
                pageNumber: 1,
                pageSize: 10,
            })
        );
    };
    // Rendu
    return (
        <FormControl variant="outlined" >
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={realtorIdSelected}
                onChange={handleChange}
                className={classes.select_realtors.root}
            >   
                {realtors.map((realtor, index) => (
                    <MenuItem key={index} value={realtor.id}>
                        {commonLabels.realtorSwitchBtn.title} {index+1}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

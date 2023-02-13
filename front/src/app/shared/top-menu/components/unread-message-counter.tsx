import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useSelector } from 'react-redux';
import { Realtor } from 'src/app/entities';
import { selectors } from 'src/app/realtor/adapters/ui/selectors';

interface UnreadMessageCounterProps {
    realtorIdSelected: string;
}
export function UnreadMessageCounter(props: UnreadMessageCounterProps) {
    //state
    const { realtorIdSelected } = props;
    const realtor: Realtor = useSelector(
        selectors.selectRealtorByIdViewModel(realtorIdSelected)
    );
    // comportement
    // rendu
    return (
        <>
            <MailOutlineIcon sx={{ fontSize: 40 }} />
            {realtor.unread_messages || 0}
        </>
    );
}

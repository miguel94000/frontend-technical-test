import React from 'react';
import { useSelector } from 'react-redux';
import { Realtor } from 'src/app/entities';
import { selectors } from 'src/app/realtor/adapters/ui/selectors';
import { ReactComponent as Logo } from 'src/ressources/assets/icon-counter.svg';
import { unread_message_container } from 'src/theme';

interface UnreadMessageCounterProps {
    realtorIdSelected: string;
}
export function UnreadMessageCounter(props: UnreadMessageCounterProps) {
    // State
    const classes = unread_message_container();
    const { realtorIdSelected } = props;
    const realtor: Realtor = useSelector(
        selectors.selectRealtorByIdViewModel(realtorIdSelected)
        ); 

    // Comportement
    const ifMessageExisted = ()=>{
        return realtor.unread_messages > 0 ? classes.withMessage : classes.withoutMessage
    }
    // Rendu
    return (
        <div className={ifMessageExisted()}>
            <Logo className={classes.unReadLogo}/>
            <span className={classes.unreadMessageNumber}>
            {realtor.unread_messages || 0}
                </span>
        </div>
    );
}

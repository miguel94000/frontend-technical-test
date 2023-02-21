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
        // TODO: La liste du nombre de message non lu ne se met pas à jour
        ); 

    // Comportement
    const ifMessageExisted = ()=>{
        if(realtor.unread_messages > 0 ){
            return classes.withMessage
        }
        return classes.withoutMessage
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

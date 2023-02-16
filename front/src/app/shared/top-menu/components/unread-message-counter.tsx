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
    //state
    const classes = unread_message_container();
    const { realtorIdSelected } = props;
    const realtor: Realtor = useSelector(
        selectors.selectRealtorByIdViewModel(realtorIdSelected)
    );

    // comportement

    // rendu
    return (
        <div className={classes.root}>
            <Logo/>
            <span className={classes.unreadMessageNumber}>
            {realtor.unread_messages || ""}
                </span>
        </div>
    );
}

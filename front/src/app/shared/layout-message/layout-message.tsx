import { ClassNames } from '@emotion/react';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    Modal,
    SwipeableDrawer,
    Toolbar,
    useMediaQuery,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';
import { updateMessageListByRealtorId } from 'src/app/message/core/use-cases/update-message-list-by-realtor-id';
import { drawerMessageList, side_message_details, theme } from 'src/theme';
import { SideMessageDetailsLg } from './components/side-message-details/side-message-details-lg';
import { SideMessageDetailsXs } from './components/side-message-details/side-message-details-xs';
import { SideMessageList } from './components/side-message-list/side-message-list';

export function LayoutMessage() {
    // State
    const classes = {
        drawerMessageList: drawerMessageList(),
        side_message_details: side_message_details(),
    };
    const messages: Message[] = useSelector(
        selectors.selectMessageListViewModel()
    );
    const dispatch = useDispatch();
    const [openDetailMessage, setOpenDetailMessage] = useState<boolean>(false);
    const [messageId, setMessageId] = useState<number>(0);
    const [lastMaxMessageList, setLastMaxMessageList] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(2);
    const [loading, setLoading] = useState(false);
    const pageSize = 10;
    const mobileScreen = useMediaQuery(theme.breakpoints.down('lg'));

    // Comportement
    const handleSetMessageId = (newMessageId: number) => {
        setMessageId(newMessageId);
    };

    const isMultiple = (
        numberToCheck: number,
        multipleNumber: number
    ): boolean => {
        return numberToCheck % multipleNumber === 0;
    };
    const loadMoreMessages = (event: any) => {
        // TODO: Il faut provoquer une remise a zéro complete de la page quand on change d'agence
        if (
            event.target.scrollHeight - event.target.scrollTop <=
            event.target.clientHeight + 10 // ajout d'une marge d'erreur car la taille du composant est dynamique
        ) {
            console.log(
                'test',
                event.target.scrollHeight - event.target.scrollTop
            );
            console.log('re', event.target.clientHeight + 11);

            if (
                lastMaxMessageList !== messages.length &&
                isMultiple(messages.length, pageSize)
            ) {
                dispatch(
                    updateMessageListByRealtorId({
                        realtor_id: messages[0].realtorId,
                        pageNumber,
                        pageSize,
                    })
                );
                setPageNumber((pageNumber) => pageNumber + 1);
                setLoading(true);
            }
        }
    };
    const handleClose = () => {
        setOpenDetailMessage(false);
    };
    useEffect(() => {
        if (loading) {
            setLastMaxMessageList(messages.length);
            setLoading(false);
        }
    }, [dispatch, lastMaxMessageList, loading, messages.length]);

    // Render
    return (
        <>
            <Drawer
                variant="permanent"
                onScrollCapture={loadMoreMessages}
                className={classes.drawerMessageList.root}
            >
                <Toolbar />
                <SideMessageList
                    messages={messages}
                    handleSetMessageId={handleSetMessageId}
                    setOpenDetailMessage={setOpenDetailMessage}
                />
            </Drawer>
            {mobileScreen ? (
                <Modal
                    open={openDetailMessage}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.side_message_details.rootXs}>
                        <SideMessageDetailsXs messageId={messageId} />
                    </Box>
                </Modal>
            ) : (
                <Box className={classes.side_message_details.rootLg}>
                    <Toolbar />
                    <SideMessageDetailsLg messageId={messageId} />
                </Box>
            )}
        </>
    );
}

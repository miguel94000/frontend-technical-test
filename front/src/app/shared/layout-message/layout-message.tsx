import {
    Box,
    Drawer,
    Modal,
    Toolbar,
    useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/redux/store';
import { Message, Error } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';
import { updateMessageListByRealtorId } from 'src/app/message/core/use-cases/update-message-list-by-realtor-id';
import { drawerMessageList, side_message_details, theme } from 'src/theme';
import { SideMessageDetailsLg } from './components/side-message-details/side-message-details-lg';
import { SideMessageDetailsXs } from './components/side-message-details/side-message-details-xs';
import { SideMessageList } from './components/side-message-list/side-message-list';
import { Notificator } from 'src/utils/notification/notificator';
import { commonLabels } from 'src/ressources/language/common/common-labels';

export function LayoutMessage() {
    // State
    const classes = {
        drawerMessageList: drawerMessageList(),
        side_message_details: side_message_details(),
    };
    const messages: Message[] = useSelector(
        selectors.selectMessageListViewModel()
    );
    const dispatch = useAppDispatch();
    const [openDetailMessage, setOpenDetailMessage] = useState<boolean>(false);
    const [messageId, setMessageId] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(2);
    const [loadMessage, setLoadMessage] = useState<boolean>(false);
    const [lastRealtorId, setLastRealtorId] = useState<string>('');
    const pageSize = 10;
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Comportement
    const handleSetMessageId = (newMessageId: number) => {
        setMessageId(newMessageId);
    };

    const loadMoreMessages = (event: any) => {
        if (
            event.target.scrollHeight - event.target.scrollTop <=
            event.target.clientHeight + 10 // ajout d'une marge d'erreur car la taille du composant est dynamique
        ) {
            setLoadMessage(true)
            if(messages && messages.length > 0 && messages[0].realtorId != lastRealtorId ){
                console.log("changé");
                setPageNumber(2)
                setLastRealtorId(messages[0].realtorId)
                window.scrollTo(0,0);
            }
        }
    };
    const handleClose = () => {
        setOpenDetailMessage(false);
    };

    // RAZ list si changement de realtor
    useEffect(() => {
        if (loadMessage) {
            dispatch(
                updateMessageListByRealtorId({
                    realtor_id: messages[0].realtorId,
                    pageNumber,
                    pageSize,
                })
            )
                .then(() => {
                    setPageNumber((pageNumber) => pageNumber+1);
                    setLoadMessage(false)
                })
                .catch((error: Error) => {
                    if (
                        Number(error.status) >= 400 &&
                        Number(error.status) <= 499
                    ) {
                        Notificator.Error(
                            commonLabels.errors.apiClientError.replace(
                                '{0}',
                                commonLabels.title.realtor
                            )
                        );
                    } else {
                        Notificator.Error(
                            commonLabels.errors.apiServerError
                        );
                    }
                });
        }
    }, [loadMessage]);
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
            {isMobileScreen ? (
                <Modal
                    open={openDetailMessage}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className={classes.drawerMessageList.modal}
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

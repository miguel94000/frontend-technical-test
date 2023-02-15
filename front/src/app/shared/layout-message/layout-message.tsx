import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    SwipeableDrawer,
    Toolbar,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';
import { updateMessageListByRealtorId } from 'src/app/message/core/use-cases/update-message-list-by-realtor-id';
import { SideMessageDetails } from './components/side-message-details/side-message-details';
import { SideMessageList } from './components/side-message-list/side-message-list';

export function LayoutMessage() {
    // State
    const messages: Message[] = useSelector(
        selectors.selectMessageListViewModel()
    );
    const dispatch = useDispatch();
    const drawerWidth = 500;
    const [messageId, setMessageId] = useState<number>(0);
    const [lastMaxMessageList, setLastMaxMessageList] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(2);
    const [loading, setLoading] = useState(false);
    const pageSize = 10;

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
        if (event.target.scrollHeight - event.target.scrollTop ===
            event.target.clientHeight) {
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
                setPageNumber((pageNumber)=>pageNumber+1)
                setLoading(true)
            }
        }
    };

    useEffect(() => {
        if(loading){
            setLastMaxMessageList(messages.length);
            setLoading(false)
        }
    }, [dispatch, lastMaxMessageList, loading, messages.length]);

    // Render
    return (
        <>
            <Drawer
                variant="permanent"
                onScrollCapture={loadMoreMessages}

                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        // '&::-webkit-scrollbar': { display: 'none' },
                    },
                }}
            >
                <SideMessageList messages={messages} handleSetMessageId={handleSetMessageId} />
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <SideMessageDetails messageId={messageId} />
            </Box>
        </>
    );
}

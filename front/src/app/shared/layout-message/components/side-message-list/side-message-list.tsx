import { Box, Divider, Drawer, List, ListItem, Toolbar } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Message } from 'src/app/entities';
import { selectors } from 'src/app/message/adapters/ui/selectors';
import { MessageCard } from './components/message-card';

interface SideMessageListProps {
    handleSetMessageId: (newMessageId: string) => void;
}
export function SideMessageList(props: SideMessageListProps) {
    // State
    const drawerWidth = 240;
    const { handleSetMessageId } = props;
    const messages: Message[] = useSelector(
        selectors.selectMessageListViewModel()
    );
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Comportement
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Render
    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {messages.map((message, index) => (
                    <MessageCard key={index} message={message} />
                ))}
            </List>
        </>
    );
}

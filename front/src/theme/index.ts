import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DefaultTheme, makeStyles } from '@mui/styles';
import { colors } from './colors';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export {
    theme,
    unread_message_container,
    select_realtors,
    message_details_container,
    drawerMessageList,
    side_message_details,
    message_card_container
};

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                style: {
                    backgroundColor: colors.white,
                    zIndex: 1300,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0px 15px',
                },
            },
        },
        MuiToolbar: {
            defaultProps: {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '280px',
                    padding: '0px',
                },
            },
        },
    },
});

// Top Menu
const unread_message_container = makeStyles({
    withMessage: {
        backgroundColor: colors.purple,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100px',
        height: '40px',
        borderRadius: '10px',
    },
    withoutMessage: {
        backgroundColor: colors.darkGrey,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100px',
        height: '40px',
        borderRadius: '10px',
    },
    unreadMessageNumber: {
        fontWeight: 'bold',

        color: colors.white,
        fontSize: '1.3em',
    },
    unreadMessageForm: {
        m: 1,
        minWidth: 120,
    },
    unReadLogo: {
        transform: 'scale(1.5)',
        color: colors.white,
    },
});
const select_realtors = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '120px',
        height: '20px',
        marginLeft: '10px'
    },
});

// Side Message List
const drawerMessageList = makeStyles({
    root: {
        width: 500,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: 500,
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': { display: 'none' },
        },
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            [`& .MuiDrawer-paper`]: {
                width: '100%',
            },
        },
        [theme.breakpoints.up('lg')]: {
            width: 500,
            [`& .MuiDrawer-paper`]: {
                width: 500,
            },
        },
    },
});
const message_card_container = makeStyles({
    root:{
        display:'flex',
        backgroundColor:'red'
    }
})

// Si Message Detail
const side_message_details = makeStyles({
    rootLg:{
        flexGrow: 1,
        p: 3,
        padding: '10px',
        [theme.breakpoints.up('xs')]: {
            display:'none'
        },
        [theme.breakpoints.up('lg')]: {
            display:'block'
        },
    },
    rootXs: {
        margin: "30px 0px",
        position: 'absolute',
        padding: "20px",
        border: '2px solid',
        borderColor: colors.black,
        backgroundColor: colors.white
    }
})
const message_details_container = makeStyles({
    root: {
        [theme.breakpoints.up('xs')]: {
            display: 'none',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },
    },
});



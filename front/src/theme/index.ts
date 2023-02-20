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
    drawerTest
};

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
    },
    components: {
        // MuiDrawer: {
        //     defaultProps: {
        //         sx: {
        //             width: 500,
        //             flexShrink: 0,
        //             [`& .MuiDrawer-paper`]: {
        //                 width: 500,
        //                 boxSizing: 'border-box',
        //                 '&::-webkit-scrollbar': { display: 'none' },
        //             },
        //             [theme.breakpoints.up('xs')]: {
        //                 display: 'none',
        //             },
        //             [theme.breakpoints.up('lg')]: {
        //                 display: 'flex',
        //             },
        //         },
        //     },
        // },
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

const drawerTest = makeStyles({
    root: {
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
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
        width: '160px',
        height: '20px',
    },
});

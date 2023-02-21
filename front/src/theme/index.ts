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
    message_card_container,
    custom_typography,
    custom_stack,
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
                    padding: '0px 20px',
                },
            },
        },
        MuiToolbar: {
            defaultProps: {
                style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '0px',
                    marginRight: '30px',
                },
            },
        },
        MuiSvgIcon: {
            defaultProps: {
                style: {
                    color: colors.purple,
                    marginRight: '15px',
                },
            },
        },
    },
});
// General
const custom_typography = {
    bold: {
        fontWeight: 700,
    },
    list: {
        bold: {
            fontWeight: 700,
            fontSize: 'x-large',
        },
    },
    detail: {
        main:{
            [theme.breakpoints.up('xs')]: {
                padding: '12px',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '60px',
            },
        },
        svg_icon:{
            [theme.breakpoints.up('xs')]: {
                fontSize: '20px',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '40px',
            },
        },
        header:{
            display: 'flex',
            backgroundColor: colors.white,
            [theme.breakpoints.up('xs')]: {
                gap: '10px',
            },
            [theme.breakpoints.up('lg')]: {
                gap: '50px',
            },
        },
        body:{
            backgroundColor: colors.white,
            display:'flex',
            flexDirection:'column',
            gap:5
        },
        bold: {
            fontWeight: 700,
            [theme.breakpoints.up('xs')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'xx-large',
            },
        },
        bold2: {
            fontWeight: 700,
            [theme.breakpoints.up('xs')]: {
                fontSize: 'x-large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'xx-large',
            },
        },
        normal: {
            [theme.breakpoints.up('xs')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'x-large',
            },
        },
        normal_color: {
            color: colors.purple,
            [theme.breakpoints.up('xs')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'x-large',
            },
        },
        normal_color2: {
            color: colors.veryLightGray,
            letterSpacing: '0.01em',
            [theme.breakpoints.up('xs')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'x-large',
            },
        },
        paragraphe:{
            [theme.breakpoints.up('xs')]: {
            fontSize: '1em',
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '1.4em',

            },
        }
    },
};
const custom_stack = {
    width: '360px',
};

// Top Menu
const base_unread_message_container = {
    backgroundColor: colors.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '40px',
    borderRadius: '10px',
    paddingLeft: '5px',
    [theme.breakpoints.up('xs')]: {
        width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
        width: '80px',
    },
};
const unread_message_container = makeStyles({
    withMessage: {
        ...base_unread_message_container,
        backgroundColor: colors.purple,
    },
    withoutMessage: {
        ...base_unread_message_container,
        backgroundColor: colors.darkGrey,
    },
    unreadMessageNumber: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: '1.3em',
    },
    unReadLogo: {
        transform: 'scale(1.3)',
        color: colors.white,
    },
});
const select_realtors = makeStyles({
    root: {
        display: 'flex',
        height: '24px',
        [theme.breakpoints.up('xs')]: {
            marginLeft: '10px',
            width: '120px',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '20px',
            width: '110%',
        },
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
    root: {
        display: 'flex',
        padding: '0px',
    },
});

// Side Message Detail
const side_message_details = makeStyles({
    rootLg: {
        flexGrow: 1,
        backgroundColor: colors.veryLightWhite,
        p: 3,
        padding: '10px',
        [theme.breakpoints.up('xs')]: {
            display: 'none',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    rootXs: {
        margin: '30px 0px',
        position: 'absolute',
        padding: '20px',
        border: '2px solid',
        borderColor: colors.black,
        backgroundColor: colors.white,
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

import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
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
    tool_bar,
};

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 1100,
          lg: 1101,
          xl: 1536,
        },
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
    no_bold:{
        fontWeight: 400,
    },
    list: {
        bold: {
            fontWeight: 700,
            fontSize: 'x-large',
        },
    },
    detail: {
        main:{
            [theme.breakpoints.up('md')]: {
                padding: '12px',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '60px',
            },
        },
        svg_icon:{
            [theme.breakpoints.up('md')]: {
                fontSize: '20px',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '40px',
            },
        },
        header:{
            display: 'flex',
            backgroundColor: colors.white,
            [theme.breakpoints.up('md')]: {
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
            [theme.breakpoints.up('md')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'xx-large',
            },
        },
        bold2: {
            fontWeight: 700,
            [theme.breakpoints.up('md')]: {
                fontSize: 'x-large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'xx-large',
            },
        },
        normal: {
            [theme.breakpoints.up('md')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'x-large',
            },
        },
        normal_color: {
            color: colors.purple,
            [theme.breakpoints.up('md')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'x-large',
            },
        },
        normal_color2: {
            color: colors.veryLightGray,
            letterSpacing: '0.01em',
            [theme.breakpoints.up('md')]: {
                fontSize: 'large',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: 'x-large',
            },
        },
        paragraphe:{
            [theme.breakpoints.up('md')]: {
            fontSize: '1em',
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '1.4em',

            },
        }
    },
};

// Top Menu
const tool_bar = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px',
}
const base_unread_message_container = {
    backgroundColor: colors.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '40px',
    borderRadius: '10px',
    paddingLeft: '5px',
    width: '80px',
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
        width: '120px',
        marginLeft: '20px',
    },
});

// Side Message List
const drawerMessageList = makeStyles({
    root: {
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': { display: 'none' },
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            [`& .MuiDrawer-paper`]: {
                width: '100%',
            },
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 500,
            [`& .MuiDrawer-paper`]: {
                width: 500,
            },
        },
    },
    modal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
const message_card_container = {
    list_item_button:{
        display: 'flex',
        padding: '0px',
        height: '180px'
    },
    card:{
        width:'100%'

    },
    icon_informations_time_container:{
        p: 3,
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon_informations_container:{
        display: 'flex'
    },
    box:{
        p: 3,
        display: 'flex'
    },
    overview_typography:{
        colors: colors.lightDarkGrey
    },
    time_typography:{
        colors: colors.purple
    }

}

// Side Message Detail
const side_message_details = makeStyles({
    rootLg: {
        flexGrow: 1,
        backgroundColor: colors.veryLightWhite,
        p: 3,
        padding: '10px',
        [theme.breakpoints.up('md')]: {
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
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },
    },
});

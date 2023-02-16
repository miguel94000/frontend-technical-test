import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DefaultTheme, makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import { colors } from './colors';

export { getCurrentTheme, unread_message_container };

const unread_message_container = makeStyles({
    root: {
        backgroundColor: colors.purple,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80px',
        height: '50px',
        borderRadius: '10px',
    },
    unreadMessageNumber:{
        fontWeight:"bold",
        color: colors.white,
        fontSize: "1.6em"
    },
    unreadMessageForm:{
        m: 1, 
        minWidth: 120,
    }
});

const getCurrentTheme = createTheme({
        palette: {
            primary: {
                main: colors.darkGrey,
            },
            background: {
                paper: colors.darkGrey,
                default: colors.darkGrey,
            },
        },
        components: {
            MuiDrawer: {
                variants: [
                    {
                        props: { variant: 'permanent' },
                        style: {
                            width: 20,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: {
                                width: 500,
                                boxSizing: 'border-box',
                                '&::-webkit-scrollbar': { display: 'none' },
                            },
                        },
                    },
                ],
            },
            MuiAppBar: {
                defaultProps: {
                    style: {
                        backgroundColor: colors.white,
                        zIndex: 1300,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    },
                },
            },
        },
    }) as ThemeOptions;
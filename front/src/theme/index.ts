import { createTheme } from '@mui/material/styles';
import { DefaultTheme } from '@mui/styles';
import { colors } from './colors';

export { getCurrentTheme };

const getCurrentTheme = (): DefaultTheme => {
    return createTheme({
        palette: {
            primary: {
                main: colors.darkGrey,
            },
            background: {
                paper: colors.white,
                default: colors.white,
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
                    }
                ],
            },
            MuiListItemButton: {
                variants: [
                    {
                        props: { alignItems: 'center' },
                        style: {
                            height: '60px',
                        },
                    },
                ],
            },
            MuiTypography: {
                defaultProps: {
                    style: {
                        color: colors.purple,
                        fontWeight: 'bold',
                    },
                },
                variants: [
                    {
                        props: { variant: 'h4' },
                        style: {
                            height: '60px',
                        },
                    },
                ],
            },
        },
    });
};

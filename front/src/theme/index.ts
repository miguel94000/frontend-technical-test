import { createTheme } from '@mui/material/styles';
import { DefaultTheme, makeStyles } from '@mui/styles';
import { colors } from './colors';

export { datagridStyle, getCurrentTheme };

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        buttonValider: true;
        buttonAnnuler: true;
        buttonSupprimer: true;
        buttonAjouter: true;
        buttonAddRma: true;
        buttonTransfereCompte: true;
        buttonConnexion: true;
        buttonWiioNet: true;
        buttonAddTicket: true;
        buttonViolet: true;
    }
}

declare module '@mui/material/Toolbar' {
    interface ToolbarPropsVariantOverrides {
        orangeVariant: true;
        applicationToolbar: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        createRMA: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        wiioSubtitle: true;
        changestatus: true;
        grandTitreh1: true;
        sousTitreh2: true;
        contractStatut: true;
    }
}

declare module '@mui/material/Divider' {
    interface DividerPropsVariantOverrides {
        updateRMA: true;
    }
}

const datagridStyle = makeStyles({
    root: {
        '& .MuiDataGrid-columnHeadersInner': {
            background: colors.orange,
            color: colors.blanc,
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none',
        },
    },
});

const getCurrentTheme = (): DefaultTheme => {
    return createTheme({
        palette: {
            primary: {
                main: colors.orange,
            },
            background: {
                paper: colors.veryLightGray,
                default: colors.veryLightGray,
            },
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'buttonConnexion' },
                        style: {
                            color: 'white',
                            fontSize: '1.5em',
                            backgroundColor: colors.orange,
                            height: '60px',
                            ':hover': {
                                color: colors.orange,
                                border: 'solid ' + colors.orange,
                            },
                        },
                    },
                    {
                        props: { variant: 'buttonTransfereCompte' },
                        style: {
                            color: 'white',
                            border: 'solid white',
                            fontSize: '1.5em',
                            paddingTop: '0px',
                            paddingBottom: '0px',
                        },
                    },
                    {
                        props: { variant: 'buttonAjouter' },
                        style: {
                            background: colors.orange,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.orange,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.orange,
                                border: 'solid 1px ' + colors.orange,
                            },
                        },
                    },
                    {
                        props: { variant: 'buttonValider' },
                        style: {
                            background: colors.vert,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.vert,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.vert,
                                border: 'solid 1px ' + colors.vert,
                            },
                        },
                    },
                    {
                        props: { variant: 'buttonAnnuler' },
                        style: {
                            background: colors.orange,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.orange,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.orange,
                                border: 'solid 1px ' + colors.orange,
                            },
                        },
                    },
                    {
                        props: { variant: 'buttonSupprimer' },
                        style: {
                            background: colors.rouge,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.rouge,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.rouge,
                                border: 'solid 1px ' + colors.rouge,
                            },
                        },
                    },
                    {
                        props: { variant: 'buttonWiioNet' },
                        style: {
                            background: colors.orange,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.orange,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.orange,
                                border: 'solid 1px ' + colors.orange,
                            },
                        },
                    },
                    {
                        props: { variant: 'buttonViolet' },
                        style: {
                            background: colors.violet,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.violet,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.violet,
                                border: 'solid 1px ' + colors.violet,
                            },
                            height: '80px',
                        },
                    },
                    {
                        props: { variant: 'buttonAddTicket' },
                        style: {
                            background: colors.bleu,
                            color: colors.veryLightGray,
                            boxShadow: '2px',
                            borderRadius: '4px',
                            margin: '4px',
                            border: 'solid 1px ' + colors.bleu,
                            '&:hover': {
                                background: colors.veryLightGray,
                                color: colors.bleu,
                                border: 'solid 1px ' + colors.bleu,
                            },
                        },
                    },
                ],
            },
            MuiDrawer: {
                variants: [
                    {
                        props: { variant: 'temporary' },
                        style: ({ theme }) => ({
                            width: '240px',
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: '240px',
                                paddingTop: 64,
                                boxSizing: 'border-box',
                                background: colors.darkGrey,
                            },
                        }),
                    },
                ],
            },
            MuiAppBar: {
                variants: [
                    {
                        props: { position: 'fixed' },
                        style: ({ theme }) => ({
                            width: `100%`,
                            background: colors.veryLightGray,
                            zIndex: theme.zIndex.drawer + 1,
                        }),
                    },
                ],
            },
            MuiToolbar: {
                variants: [
                    {
                        props: { variant: 'orangeVariant' },
                        style: {
                            background: colors.orange,
                            color: colors.veryLightGray,
                            height: '64px',
                            fontFamily: 'Roboto',

                            fontSize: '25px',

                            letterSpacing: '-1px',
                            textTransform: 'uppercase',

                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingLeft: '0px',
                        },
                    },
                    {
                        props: { variant: 'applicationToolbar' },
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingLeft: '0px',
                        },
                    },
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
            MuiChip: {
                variants: [
                    {
                        props: { variant: 'createRMA' },
                        style: {
                            margin: '2px',
                            color: colors.orange,
                            textDecoration: 'underline',
                            border: '1.5px solid ' + colors.orange,
                            outline: 'none',
                            backgroundColor: 'transparent',
                        },
                    },
                ],
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        color: colors.veryLightGray,
                        backgroundColor: colors.orange,
                        textAlign: 'center',
                        height: '50px',
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    textColorInherit: {
                        backgroundColor: colors.orange,
                    },
                },
            },
            MuiTypography: {
                variants: [
                    {
                        props: { variant: 'wiioSubtitle' },
                        style: {
                            color: colors.orange,
                            fontWeight: 'bold',
                        },
                    },
                    {
                        props: { variant: 'changestatus' },
                        style: {
                            color: colors.veryLightGray,
                            marginTop: '5px',
                            display: 'flex',
                            fontSize: '12px',
                        },
                    },
                    {
                        props: { variant: 'grandTitreh1' },
                        style: {
                            color: colors.veryLightGray,
                            marginTop: '5px',
                            display: 'flex',
                            fontSize: '12px',
                        },
                    },
                    {
                        props: { variant: 'sousTitreh2' },
                        style: {
                            color: colors.veryLightGray,
                            marginTop: '5px',
                            display: 'flex',
                            fontSize: '12px',
                        },
                    },
                    {
                        props: { variant: 'contractStatut' },
                        style: {
                            color: colors.rouge,
                            display: 'flex',
                            fontSize: '20px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                    },
                ],
            },
            MuiDivider: {
                variants: [
                    {
                        props: { variant: 'updateRMA' },
                        style: {
                            backgroundColor: colors.orange,
                            borderWidth: '1px',
                        },
                    },
                ],
            },
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        color: 'black',
                        backgroundColor: colors.veryLightGray,
                    },
                },
            },
        },
    });
};

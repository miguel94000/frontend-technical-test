import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { theme } from 'src/theme';
import { Notificator, NotificatorComponent } from 'src/utils/notification/notificator';
import { storage } from 'src/utils/storage/local-storage';
import { Index } from '.';
import { retrieveRealtors } from './realtor/core/use-cases/retrieve-realtors';
import { Error } from 'src/app/entities';
import { commonLabels } from 'src/ressources/language/common/common-labels';


storage.setBasePath('http://localhost:8080'); // ULR par défaut

export function App() {
    // state
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(true);
    
    // comportements
    useEffect(() => {
        if (loading) {
            dispatch(retrieveRealtors())
            .then(() => setLoading(false))
            .catch((error: Error) =>{
                if(Number(error.status) >= 400 && Number(error.status) <= 499){
                    Notificator.Error((commonLabels.errors.apiClientError).replace('{0}', commonLabels.title.realtor))

                } else {
                    Notificator.Error(commonLabels.errors.apiServerError)

                }
            })
        }
    }, [dispatch, loading]);

    // Rendu
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider maxSnack={3}>
            <NotificatorComponent />
                <Index/>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

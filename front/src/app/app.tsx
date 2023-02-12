import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/styles/ThemeProvider';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { getCurrentTheme } from 'src/theme';
import { storage } from 'src/utils/storage/local-storage';
import { Index } from '.';
import { retrieveRealtors } from './realtor/core/use-cases/retrieve-realtors';

const theme = getCurrentTheme();

storage.setBasePath('http://localhost:8080')

export function App() {
    // state
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(true)

    // comportements
    useEffect(() => {
      if(loading){
        dispatch(retrieveRealtors())
        .then(()=> setLoading(false));
      }
    }, [dispatch, loading]);

    // Rendu
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Index />
        </ThemeProvider>
    );
}
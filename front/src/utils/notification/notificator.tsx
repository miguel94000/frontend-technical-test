import React from 'react'
import { IconButton } from "@mui/material";
import { OptionsObject, SnackbarKey, SnackbarMessage, useSnackbar } from 'notistack';
import { CloseIcon } from 'src/ressources/assets/icons';

export{Notificator, NotificatorComponent}

enum AlertSeverity{
    success = 'success',
    error = 'error',
    info = 'info',
    warning = 'warning'
}
enum VerticalPosition{
    top = 'top',
    bottom = 'bottom',
}
enum HorizontalPosition{
    left = 'left',
    center = 'center',
    right = 'right',
}

class NotificatorManager {

    enqueueSnackbarFunction: ((message: SnackbarMessage, options?: OptionsObject) => SnackbarKey) | undefined;
    closeSnackbarFunction: ((key?: SnackbarKey) => void) | undefined;

    Error(errorMessage: string): SnackbarKey | undefined{
        return this.ShowNotification(errorMessage, AlertSeverity.error, undefined, undefined, true)
    }

    Success(message: string): SnackbarKey | undefined{
        return this.ShowNotification(message, AlertSeverity.success)
    }
    
    private closeAction = (snackbarId?: any)=> (
            <IconButton onClick={() => (this.closeSnackbarFunction && snackbarId) ? this.closeSnackbarFunction(snackbarId) : null}>
                <CloseIcon />
            </IconButton>
      );

    private ShowNotification(message: string, severity: AlertSeverity, verticalPosition?: VerticalPosition, horizontalPosition?: HorizontalPosition, persist?: boolean): SnackbarKey | undefined{
        if (this.enqueueSnackbarFunction){
            return this.enqueueSnackbarFunction(message, {
                variant: severity,
                preventDuplicate: true,
                persist: persist,
                anchorOrigin: {
                    vertical: verticalPosition ?? 'bottom',
                    horizontal: horizontalPosition ?? 'center',
                },
                action: persist ? this.closeAction : undefined
            });
        } else {
            return;
        }
    }   
}

const Notificator: NotificatorManager = new NotificatorManager();

const NotificatorComponent: React.FC = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    Notificator.enqueueSnackbarFunction = enqueueSnackbar;
    Notificator.closeSnackbarFunction = closeSnackbar;
    

    return <></>;
};
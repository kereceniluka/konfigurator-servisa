import React, { useContext } from 'react';
import {
    DialogBody,
    DialogTitle,
    DialogSubTitle,
    DialogText,
    DialogActions,
} from './SuccessDialogStyle';

// material-ui
import { Dialog, Button } from '@material-ui/core'; 

// utils
import { Context } from '../../utils/context/Context';

const SuccessDialog = () => {

    const [state, setState] = useContext(Context);

    const handleClose = () => {
        setState({ ...state, openSuccessDialog: false });
    }

    return (
        <Dialog
            open={state.openSuccessDialog}
            onClose={handleClose}
        >
            <DialogBody>
                <DialogTitle>Konfigurator servisa</DialogTitle>
                <DialogSubTitle>Vaša prijava je uspješno poslana</DialogSubTitle>
                <DialogText>
                    Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku. Hvala vam.
                </DialogText>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained" size="medium">Zatvori</Button>
                </DialogActions>
            </DialogBody>
        </Dialog>
    );
}

export default SuccessDialog;
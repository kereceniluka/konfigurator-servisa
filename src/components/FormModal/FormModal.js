import React, { useContext, useEffect } from 'react';
import { ModalBody, ModalHeader, ModalTitle, CloseIcon, ModalStepTitle, ModalContent, ModalNavigation } from './FormModalStyle';

// material-ui
import { Modal, Button, makeStyles } from '@material-ui/core';

// data
import { steps } from '../../data/data.json';

// utils
import { Context } from '../../utils/context/Context';
import useKey from '../../utils/hooks/useKey';

const useStyle = makeStyles({
    button: {
        margin: '0 5px',
    }
});

const FormModal = ({ children }) => {

    const classes = useStyle();

    const [state, setState] = useContext(Context);

    const arrowLeft = useKey('ArrowLeft');
    const arrowRight = useKey('ArrowRight');

    const handleKeyboardNav = () => {
        if(state.currStep === 1 && arrowRight && state.manufacturer) {
            setState({ ...state, currStep: state.currStep + 1 });
        }
        else if(state.currStep === 2) {
            if(arrowRight && state.services.length !== 0) {
                setState({ ...state, currStep: state.currStep + 1 });
            }
            else if(arrowLeft) {
                setState({ ...state, currStep: state.currStep - 1 });
            }
        }
        else if(state.currStep === 3) {
            if(arrowRight && state.personalInfo.name && state.personalInfo.email && state.personalInfo.telNumber) {
                setState({ ...state, currStep: state.currStep + 1 });
            }
            else if(arrowLeft) {
                setState({ ...state, currStep: state.currStep - 1 });
            }
        }
        else if(state.currStep === 3) {
            if(arrowRight && state.personalInfo.name && state.personalInfo.email && state.personalInfo.telNumber) {
                setState({ ...state, currStep: state.currStep + 1 });
            }
            else if(arrowLeft) {
                setState({ ...state, currStep: state.currStep - 1 });
            }
        }
        else if(state.currStep === 4) {
            if(arrowLeft) {
                setState({ ...state, currStep: state.currStep - 1 });
            }
        }
    }

    useEffect(() => {
        handleKeyboardNav();
    }, [arrowLeft, arrowRight]);

    const handleCloseModal = () => {
        setState({ ...state, openModal: false });
    };

    const handleNextStep = () => {
        setState({ ...state, currStep: state.currStep + 1 });
    }

    const handlePrevStep = () => {
        setState({ ...state, currStep: state.currStep - 1 });
    }

    const handleOpenSuccessDialog = () => {
        setState({ ...state, openModal: false, openSuccessDialog: true });
    }

    const handleNavButtons = ({ currStep, manufacturer, services, personalInfo }) => {
        switch(currStep) {
            case 1:
                return <Button className={classes.button} disabled={!manufacturer} variant="contained" size="small" color="primary" onClick={handleNextStep}>Dalje</Button>;
            case 2:
                return (
                    <>
                        <Button className={classes.button} variant="contained" size="small" color="primary" onClick={handlePrevStep}>Nazad</Button>
                        <Button className={classes.button} disabled={services.length === 0} variant="contained" size="small" color="primary" onClick={handleNextStep}>Dalje</Button>
                    </>
                );
            case 3:
                return (
                    <>
                        <Button className={classes.button} variant="contained" size="small" color="primary" onClick={handlePrevStep}>Nazad</Button>
                        <Button className={classes.button} disabled={!personalInfo.name || !personalInfo.email || !personalInfo.telNumber} variant="contained" size="small" color="primary" onClick={handleNextStep}>Dalje</Button>
                    </>
                );
            default:
                return (
                    <>
                        <Button className={classes.button} variant="contained" size="small" color="primary" onClick={handlePrevStep}>Nazad</Button>
                        <Button className={classes.button} variant="contained" size="small" color="primary" onClick={handleOpenSuccessDialog}>Pošalji</Button>
                    </>
                );
        }
    }

    return (
        <Modal
        open={state.openModal}
        onClose={handleCloseModal}
        >
            <ModalBody>
                <ModalHeader>
                    <ModalTitle>Konfigurator servisa</ModalTitle>
                    <CloseIcon onClick={handleCloseModal} />
                </ModalHeader>
                {steps.map(({ stepNum, title }) => stepNum === state.currStep && <ModalStepTitle key={stepNum}>{`Korak ${stepNum}. ${title}`}</ModalStepTitle>)}
                <ModalContent>
                    {children}
                </ModalContent>
                <ModalNavigation>
                    {handleNavButtons(state)}
                </ModalNavigation>
            </ModalBody>
        </Modal>
    );
}

export default FormModal;
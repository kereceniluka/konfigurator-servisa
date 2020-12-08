import React, { useContext, useEffect } from 'react';
import {
    ModalBody, 
    ModalHeader, 
    ModalTitle, 
    CloseIcon, 
    ModalStepTitle, 
    ModalContent, 
    ModalNavigation,
    NavButton,
} from './FormModalStyle';

// material-ui
import { Modal } from '@material-ui/core';

// data
import { steps } from '../../data/data.json';

// utils
import { Context } from '../../utils/context/Context';
import useKey from '../../utils/hooks/useKey';

const FormModal = ({ children }) => {

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
                return <NavButton disabled={!manufacturer} variant="contained" size="medium" color="primary" onClick={handleNextStep}>Dalje</NavButton>;
            case 2:
                return (
                    <>
                        <NavButton variant="contained" size="medium" color="primary" onClick={handlePrevStep}>Nazad</NavButton>
                        <NavButton disabled={services.length === 0} variant="contained" size="medium" color="primary" onClick={handleNextStep}>Dalje</NavButton>
                    </>
                );
            case 3:
                return (
                    <>
                        <NavButton variant="contained" size="medium" color="primary" onClick={handlePrevStep}>Nazad</NavButton>
                        <NavButton disabled={!personalInfo.name || !personalInfo.email || !personalInfo.telNumber} variant="contained" size="medium" color="primary" onClick={handleNextStep}>Dalje</NavButton>
                    </>
                );
            default:
                return (
                    <>
                        <NavButton variant="contained" size="medium" color="primary" onClick={handlePrevStep}>Nazad</NavButton>
                        <NavButton variant="contained" size="medium" color="primary" onClick={handleOpenSuccessDialog}>Pošalji</NavButton>
                    </>
                );
        }
    }

    return (
        <Modal
            open={state.openModal}
            onClose={handleCloseModal}
            disableEnforceFocus={true}
            disableBackdropClick={true}
        >
            <ModalBody currStep={state.currStep}>
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
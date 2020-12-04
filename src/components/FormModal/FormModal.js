import React, { useContext } from 'react';
import { ModalBody, ModalHeader, ModalTitle, CloseIcon, ModalContent } from './FormModalStyle';

// material-ui
import { Modal } from '@material-ui/core';

// components
import FormStepper from '../FormStepper/FormStepper';
import Manufacturers from '../Forms/Manufacturers/Manufacturers';

// utils
import { Context } from '../../utils/context/Context';

const FormModal = () => {

    const [state, setState] = useContext(Context);

    const handleCloseModal = () => {
        setState({ ...state, openModal: false });
    };

    return (
        <div>
            <Modal
            open={state.openModal}
            onClose={handleCloseModal}
            >
            <ModalBody>
                <ModalHeader>
                    <ModalTitle>Konfigurator servisa</ModalTitle>
                    <CloseIcon onClick={handleCloseModal} />
                </ModalHeader>
                <ModalContent>
                    <FormStepper />
                    <Manufacturers />
                </ModalContent>
            </ModalBody>
            </Modal>
        </div>
    );
}

export default FormModal;
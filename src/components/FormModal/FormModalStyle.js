import styled from 'styled-components/macro';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export const ModalBody = styled.div `
    position: absolute;
    width: 90%;
    height: 70vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 1px solid #000;
    padding: 10px 15px; 
`;

export const ModalHeader = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
`;

export const ModalTitle = styled.h1 `
    font-size: 1em;
    font-weight: bold;
    color: #000000;
`;

export const CloseIcon = styled(CloseRoundedIcon) `
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    font-size: 40;
    color: #000000;
    cursor: pointer;
`;

export const ModalContent = styled.div `
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
`;
import styled from 'styled-components/macro';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export const ModalBody = styled.div `
    position: absolute;
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
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

export const ModalStepTitle = styled.h2 `
    width: 90%;
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;
    margin: 20px auto 30px auto; 
`;

export const ModalContent = styled.div `
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #f2f2f2;
    overflow-y: scroll;
`;

export const ModalNavigation = styled.div `
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 8px 0;
`;
import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

// material-ui
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Button } from '@material-ui/core';

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
    
    ${sizes.tablet} {
        height: 60vh;
        padding: 15px 25px;
    }

    ${sizes.desktop} {
        width: 65%;
        height: ${({ currStep }) => currStep === 4 ? '80vh' : '60vh'};
        padding: 15px 42px;
    }
`;

export const ModalHeader = styled.div `
    position: relative;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${sizes.tablet} {
        height: 55px;
    }
`;

export const ModalTitle = styled.h1 `
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;

    ${sizes.tablet} {
        font-size: 1.3em;
    }
`;

export const CloseIcon = styled(CloseRoundedIcon) `
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    color: #000000;
    cursor: pointer;
`;

export const ModalStepTitle = styled.h2 `
    width: 100%;
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;
    margin: 20px auto;
    
    ${sizes.tablet} {
        font-size: 1.3em;
    }
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

    ${sizes.desktop} {
        overflow: hidden; 
    }
`;

export const ModalNavigation = styled.div `
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 8px 0;

    ${sizes.tablet} {
        height: 50px;
        margin: 10px 0;
    }
`;

export const NavButton = styled(Button) `
    margin: 0 5px !important;
`;
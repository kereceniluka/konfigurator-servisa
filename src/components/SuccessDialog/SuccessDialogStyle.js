import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const DialogBody = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 24px;

    ${sizes.tablet} {
        padding: 24px 32px;
    }
`;

export const DialogTitle = styled.h1 `
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;
`;

export const DialogSubTitle = styled.h2 `
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;
    padding: 40px 0 16px 0;
`;

export const DialogText = styled.p `
    font-size: .9em;
    text-align: left;
    line-height: 1.5;
    color: #000000;
    padding: 4px 0 40px 0;

    ${sizes.tablet} {
        text-align: center;
    }
`;

export const DialogActions = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
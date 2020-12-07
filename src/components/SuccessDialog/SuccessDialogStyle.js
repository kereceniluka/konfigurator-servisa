import styled from 'styled-components/macro';

export const DialogBody = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 24px;
`;

export const DialogTitle = styled.h1 `
    font-size: 1.25em;
    font-weight: bold;
    color: #000000;
`;

export const DialogSubTitle = styled.h2 `
    font-size: .97em;
    font-weight: bold;
    color: #000000;
    padding: 40px 0 16px 0;
`;

export const DialogText = styled.p `
    font-size: .85em;
    text-align: justify;
    line-height: 1.5;
    color: #000000;
    padding: 4px 0 40px 0;
`;

export const DialogActions = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
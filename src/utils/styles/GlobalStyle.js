import styled, { createGlobalStyle } from 'styled-components/macro';
import sizes from '../responsive'; 

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }

    html,
    body {
        font-family: sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const HomeTitle = styled.h1 `
    font-size: .9em;
    font-weight: bold;
    color: #000000;
    margin: 35px 0;

    ${sizes.tablet} {
        font-size: 1.2em;
        margin: 40px 0;
    }

    ${sizes.desktop} {
        font-size: 1.4em;
        margin: 55px 0;
    }
`;

export const PageContainer = styled.div `
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${sizes.tablet} {
        height: calc(100vh - 100px);
    }
`;
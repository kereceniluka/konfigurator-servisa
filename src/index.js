import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

// utils
import { GlobalStyle } from './utils/styles/GlobalStyle';

render(
    <>
        <GlobalStyle />
        <App />
    </>, document.getElementById('root')
);
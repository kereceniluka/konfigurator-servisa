import styled from 'styled-components/macro';
import sizes from '../../../utils/responsive';

// material-ui
import { FormControl, FormGroup } from '@material-ui/core';

export const Form = styled(FormControl) `
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    justify-self: flex-start !important; 
`;

export const CheckboxGroup = styled(FormGroup) `
    display: grid !important;
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 5px !important;

    ${sizes.tablet} {
        grid-template-columns: repeat(2, 1fr) !important;
    }

    ${sizes.desktop} {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 5px 0 !important; 
    }
`;

export const TotalContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 5px;
    margin: 20px 0; 
`;

export const OpenCoupon = styled.span `
    font-size: .9em;
    color: #3f51b5;
    text-decoration: underline;
    cursor: pointer;

    ${sizes.tablet} {
        font-size: 1.1em;
    }
`;

export const SuccessMessage = styled.span `
    font-size: .9em;
    color: green;
    margin: 10px 0;

    ${sizes.tablet} {
        font-size: 1em;
    }
`;

export const PriceLabel = styled.span `
    font-size: ${({ size }) => size === 'big' ? '1.4em' : '.9em'};
    font-weight: normal;
    margin: 4px 0;

    ${sizes.desktop} {
        margin: 6px 0;
    }
`;

export const PriceValue = styled.span `
    font-size: 1em;
    font-weight: bold;
    color: #000000;
`;
import styled from 'styled-components/macro';

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
    color: lightblue;
    text-decoration: underline;
`;

export const SuccessMessage = styled.span `
    font-size: .9em;
    color: green;
    margin: 10px 0;
`;

export const PriceLabel = styled.span `
    font-weight: normal;
`;

export const PriceValue = styled.span `
    font-size: ${({ size }) => size === 'big' ? `1.3em` : `0.9em`};
    font-weight: bold;
    color: #000000;
    margin: 4px 0; 
`;
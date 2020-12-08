import styled from 'styled-components/macro';
import sizes from '../../../utils/responsive';

export const Container = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10px;
    
    ${sizes.desktop} {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 20px;
    }
`;
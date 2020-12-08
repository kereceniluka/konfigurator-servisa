import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

export const Container = styled.header `
    width: 100%;
    height: 80px;
    background-color: #eee;

    ${sizes.tablet} {
        height: 100px;
    }
`;

export const Inner = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 12px;

    ${sizes.tablet} {
        padding: 0 24px;
    }

    ${sizes.desktop} {
        justify-content: flex-start;
        padding: 0 64px;
    }
`;

export const Logo = styled.img `
    height: 50px;
    object-fit: contain;

    ${sizes.tablet} {
        height: 70px;
    }
`;

export const Title = styled.ul `
    display: none;
    list-style-type: none;

    ${sizes.desktop} {
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 35px;
    }
`; 

export const TitleItem = styled.li `
    font-size: ${({ variant }) => variant === 'heading' ? '1.6em' : '1em'};
    font-weight: bold;
`;
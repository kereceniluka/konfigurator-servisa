import styled from 'styled-components/macro';
import sizes from '../../utils/responsive';

// material-ui
import { Button } from '@material-ui/core';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const OverviewMessage = styled.span `
    width: 100%;
    font-size: 1em;
    text-align: left;
    color: #000000;
`;

export const SectionFlex = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #eee;
    padding: 20px 0;

    &:last-of-type {
        border: none;
    }

    ${sizes.desktop} {
        flex-direction: row;
        justify-content: flex-start;
        padding: 30px 0;
    }
`;

export const SectionGrid = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    border-bottom: 2px solid #eee;
    padding: 20px 0;

    &:last-of-type {
        border: none;
    }

    ${sizes.desktop} {
        grid-template-columns: repeat(2, 1fr);
        padding: 30px 0;
    }
`;

export const Header = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;

    ${sizes.tablet} {
        justify-content: flex-start;
    }

    ${sizes.desktop} {
        margin: 25px 0;
    }
`;

export const Title = styled.span `
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;

    ${sizes.desktop} {
        font-size: 1.3em;
    }
`;

export const EditButton = styled(Button) `
    ${sizes.tablet} {
        margin: 0 15px !important;
    }
`;

export const Label = styled.span `
    font-size: 1em;
    font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
    color: #000000;
`;

export const ManufacturerCard = styled.div `
    width: 100%;
    display: flex;
`;

export const ServicesCard = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ServicesList = styled.ul `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ServicesListItem = styled.li `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ end }) => end ? 'flex-end' : 'space-between'};
    margin-top: ${({ end }) => end ? '8px' : '2px'};
`;

export const SectionFlexWrapper = styled.div `
    width: 100%;
`;

export const PersonalInfoList = styled.ul `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    ${sizes.tablet} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const PersonalInfoListItem = styled.li `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 4px 0;

    ${sizes.tablet} {
        margin: 8px 0;
    }
`;
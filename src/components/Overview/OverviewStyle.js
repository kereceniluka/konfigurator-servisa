import styled from 'styled-components/macro';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const OverviewMessage = styled.span `
    width: 100%;
    font-size: .8em;
    font-weight: bold;
    text-align: justify;
    color: #000000;
`;

export const Section = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid #eee;
    padding: 20px 0;
`;

export const Header = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
`;

export const Title = styled.span `
    font-size: 1.1em;
    font-weight: bold;
    color: #000000;
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

export const PersonalInfoList = styled.ul `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

export const PersonalInfoListItem = styled.li `
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: space-between; */
    margin: 8px 0;
`;
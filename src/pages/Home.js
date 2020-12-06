import React, { useContext } from 'react';
import { PageContainer, HomeTitle } from '../utils/styles/GlobalStyle';

// material-ui
import { Button } from '@material-ui/core';

// components
import Header from '../components/Header/Header';
import FormModal from '../components/FormModal/FormModal';
import Manufacturers from '../components/Forms/Manufacturers/Manufacturers';
import Services from '../components/Forms/Services/Services';
import PersonalContact from '../components/Forms/PersonalContact/PersonalContact';

// utils
import { Context } from '../utils/context/Context';

const Home = () => {

    const [state, setState] = useContext(Context);

    const handleOpenModal = () => {
        setState({ ...state, openModal: true });
    }

    const handleSwitchForms = ({ currStep }) => {
        switch(currStep) {
            case 1:
                return <Manufacturers />;
            case 2:
                return <Services />;
            case 3:
                return <PersonalContact />;
            default:
                return null; 
        }
    }

    return (
        <>
            <Header />
            <PageContainer>
                <HomeTitle>Pritisnite gumb niže kako biste pokrenuli</HomeTitle>
                <Button variant="contained" size="large" color="primary" onClick={handleOpenModal}>Pokreni konfigurator</Button>
                <FormModal>
                    {handleSwitchForms(state)}
                </FormModal>
            </PageContainer>
        </>
    );
}

export default Home;
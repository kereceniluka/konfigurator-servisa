import React, { useContext } from 'react';
import { PageContainer, HomeTitle } from '../utils/styles/GlobalStyle';

// material-ui
import { Button } from '@material-ui/core';

// components
import Header from '../components/Header/Header';
import SimpleModal from '../components/FormModal/FormModal';

// utils
import { Context } from '../utils/context/Context';

const Home = () => {

    const [state, setState] = useContext(Context);

    const handleOpenModal = () => {
        setState({ ...state, openModal: true });
    }

    return (
        <>
            <Header />
            <PageContainer>
                <HomeTitle>Pritisnite gumb niže kako biste pokrenuli</HomeTitle>
                <Button variant="contained" size="large" color="primary" onClick={handleOpenModal}>Pokreni konfigurator</Button>
                <SimpleModal />
            </PageContainer>
        </>
    );
}

export default Home;
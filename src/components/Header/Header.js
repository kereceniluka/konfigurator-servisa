import React from 'react';
import { Container, Inner, Logo, Title, TitleItem } from './HeaderStyle';

// assets
import tokicLogo from '../../assets/tokic-logo.png';

const Header = () => {
    return (
        <Container>
            <Inner>
                <Logo src={tokicLogo} alt="Tokic Logo" />
                <Title>
                    <TitleItem variant="heading">Konfigurator servisa</TitleItem>
                    <TitleItem>Izračunajte trošak servisa</TitleItem>
                </Title>
            </Inner>
        </Container>
    );
}

export default Header;
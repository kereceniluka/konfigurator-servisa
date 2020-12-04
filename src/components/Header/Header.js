import React from 'react';
import { Container, Inner, Logo, Title, Heading, SubHeading } from './HeaderStyle';

// assets
import tokicLogo from '../../assets/tokic-logo.png';

const Header = () => {
    return (
        <Container>
            <Inner>
                <Logo src={tokicLogo} alt="Tokic Logo" />
                <Title>
                    <Heading>Konfigurator servisa</Heading>
                    <SubHeading>Izračunajte trošak servisa</SubHeading>
                </Title>
            </Inner>
        </Container>
    );
}

export default Header;
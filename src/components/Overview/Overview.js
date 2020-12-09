import React, { useContext } from 'react';
import {
    Container,
    OverviewMessage,
    SectionFlex,
    SectionGrid,
    Header,
    Title,
    EditButton,
    Label,
    ManufacturerCard,
    ServicesCard,
    ServicesList,
    ServicesListItem,
    SectionFlexWrapper,
    PersonalInfoList,
    PersonalInfoListItem,
} from './OverviewStyle';

// utils
import { Context } from '../../utils/context/Context';

const Overview = () => {

    const [state, setState] = useContext(Context);

    return (
        <Container>
            <OverviewMessage>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od 
                podataka, možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili ispravnost 
                svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.
            </OverviewMessage>
            <SectionGrid>
                <div>
                    <Header>
                        <Title>MODEL VOZILA</Title>
                        <EditButton variant="contained" size="small" color="primary" onClick={() => setState({ ...state, currStep: 1 })}>Uredi</EditButton>
                    </Header>
                    <ManufacturerCard>
                        <Label>{state.manufacturer}</Label>
                    </ManufacturerCard>
                </div>
                <div>
                    <Header>
                        <Title>ODABRANE USLUGE</Title>
                        <EditButton variant="contained" size="small" color="primary" onClick={() => setState({ ...state, currStep: 2 })}>Uredi</EditButton>
                    </Header>
                    <ServicesCard>
                        <ServicesList>
                            {state.services.map(({ id, label, price }) => (
                                <ServicesListItem key={id}>
                                    <Label>{label}</Label>
                                    <Label>{price} KN</Label>
                                </ServicesListItem>
                            ))}
                            <ServicesListItem end="true"><Label>Popust (30%): -{state.coupon.isValid ? state.discountPrice : '0.00'} KN</Label></ServicesListItem>
                            <ServicesListItem end="true"><Label>UKUPNO: <Label bold>{state.coupon.isValid ? state.totalPrice : state.totalServicePrice} KN</Label></Label></ServicesListItem>
                        </ServicesList>
                    </ServicesCard>
                </div>
            </SectionGrid>
            <SectionFlex>
                <SectionFlexWrapper>
                    <Header>
                        <Title>KONTAKT PODACI</Title>
                        <EditButton variant="contained" size="small" color="primary" onClick={() => setState({ ...state, currStep: 3 })}>Uredi</EditButton>
                    </Header>
                    <PersonalInfoList>
                        <PersonalInfoListItem>
                            <Label>Ime i prezime:</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label bold="true">{state.personalInfo.name}</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label>Email adresa:</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label bold="true">{state.personalInfo.email}</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label>Broj telefona:</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label bold="true">{state.personalInfo.telNumber}</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label>Napomena:</Label>
                        </PersonalInfoListItem>
                        <PersonalInfoListItem>
                            <Label bold="true">{state.personalInfo.remark}</Label>
                        </PersonalInfoListItem>
                    </PersonalInfoList>
                </SectionFlexWrapper>
            </SectionFlex>
        </Container>
    );
}

export default Overview;
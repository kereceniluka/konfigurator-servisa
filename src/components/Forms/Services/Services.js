import React, { useContext, useEffect } from 'react';
import { TotalContainer, OpenCoupon, SuccessMessage, PriceLabel, PriceValue } from './ServicesStyle';

// material-ui
import { FormControl, FormGroup, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';

// data
import { services } from '../../../data/data.json';

// components
import Coupons from '../Coupons/Coupons';

// utils
import { Context } from '../../../utils/context/Context';

const useStyles = makeStyles({
    formControl: {
        width: '100%',
        display: 'flex',
        justifySelf: 'flex-start',
    },
    formGroup: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: 5,
    },
    formControlLabel: {
        margin: 0,
    }
});

const Services = () => {

    const classes = useStyles();

    const [state, setState] = useContext(Context);

    const discount = (state.totalServicePrice * 0.3).toFixed(2);
    const totalPrice = state.totalServicePrice - discount;  

    const handleChangeService = service => {

        const existService = state.services.find(item => item.id === service.id);

        if(!existService || state.services === []) {
            setState({ ...state, services: [ ...state.services, {...service} ] });
        }
        else {
            const updatedServices = state.services.filter(item => item.id !== service.id);
            setState({ ...state, services: [ ...updatedServices ] });
        }
    }

    const handleCouponInput = () => {
        setState({ ...state, coupon: { ...state.coupon, isOpen: true } });
    }

    const renderComponents = state => {
        if (!state.coupon.isOpen && !state.coupon.isValid) {
            return <OpenCoupon onClick={handleCouponInput}>Imam kupon</OpenCoupon>;
        }
        else if(state.coupon.isOpen && !state.coupon.isValid) {
            return <Coupons />;
        }
        else if(state.coupon.isValid) {
            return (
                <>
                    <SuccessMessage>Hvala vam, unijeli ste ispravan kod kupona</SuccessMessage>
                    <PriceValue><PriceLabel>OSNOVICA: </PriceLabel>{state.totalServicePrice} KN</PriceValue>
                    <PriceValue><PriceLabel>Popust (30%): </PriceLabel>- {discount} KN</PriceValue>
                </>
            );
        }
        else {
            return null;
        }
    }
    
    useEffect(() => {
        const totalServicePrice = state.services.reduce((acc, service) => acc + service.price, 0).toFixed(2);
        setState({ ...state, totalServicePrice: totalServicePrice });
    }, [state.services]);

    return (
        <>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup className={classes.formGroup}>
                    {services.map(service => <FormControlLabel key={service.id} control={<Checkbox checked={state.services.some(item => item.id === service.id)} name={service.label} />} label={`${service.label} (${service.price}kn)`} onChange={() => handleChangeService(service)} className={classes.formControlLabel} />)}
                </FormGroup>
            </FormControl>
            <TotalContainer>
                {renderComponents(state)}
                <PriceValue size="big"><PriceLabel size="big">UKUPNO: </PriceLabel>{state.coupon.isValid ? totalPrice : state.totalServicePrice} KN</PriceValue>
            </TotalContainer>
        </>
    );
} 

export default Services;
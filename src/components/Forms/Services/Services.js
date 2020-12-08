import React, { useContext, useEffect } from 'react';
import {
    Form, 
    CheckboxGroup, 
    TotalContainer, 
    OpenCoupon, 
    SuccessMessage, 
    PriceValue
} from './ServicesStyle';

// material-ui
import { FormControlLabel, Checkbox } from '@material-ui/core';

// data
import { services } from '../../../data/data.json';

// components
import Coupons from '../Coupons/Coupons';

// utils
import { Context } from '../../../utils/context/Context';

const Services = () => {

    const [state, setState] = useContext(Context);  

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
                    <PriceValue bold><PriceValue>OSNOVICA: </PriceValue>{state.totalServicePrice} KN</PriceValue>
                    <PriceValue bold><PriceValue>Popust (30%): </PriceValue>- {state.discountPrice} KN</PriceValue>
                </>
            );
        }
        else {
            return null;
        }
    }
    
    useEffect(() => {
        const totalServicePrice = state.services.reduce((acc, service) => acc + service.price, 0).toFixed(2);
        const discount = (totalServicePrice * 0.3).toFixed(2);
        const totalPrice = (totalServicePrice - discount).toFixed(2);

        setState({ ...state, totalServicePrice: totalServicePrice, discountPrice: discount, totalPrice: totalPrice });

    }, [state.services]);

    return (
        <>
            <Form component="fieldset">
                <CheckboxGroup>
                    {services.map(service => <FormControlLabel key={service.id} control={<Checkbox checked={state.services.some(item => item.id === service.id)} name={service.label} />} label={`${service.label} (${service.price}kn)`} onChange={() => handleChangeService(service)} />)}
                </CheckboxGroup>
            </Form>
            <TotalContainer>
                {renderComponents(state)}
                <PriceValue size="big" bold><PriceValue size="big">UKUPNO: </PriceValue>{state.coupon.isValid ? state.totalPrice : state.totalServicePrice} KN</PriceValue>
            </TotalContainer>
        </>
    );
} 

export default Services;
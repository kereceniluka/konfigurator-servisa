import React, { useContext, useState } from 'react';
import { Form } from './CouponsStyle';

// material-ui
import { TextField, Button } from '@material-ui/core';

// utils
import { Context } from '../../../utils/context/Context';

const Coupons = () => {

    const [couponInput, setCouponInput] = useState('');
    const [error, setError] = useState(false);
    const [state, setState] = useContext(Context);

    const handleSubmitCoupon = () => {
        const isValidCoupon = state.coupon.validCoupons.find(coupon => coupon.value === couponInput);

        if(isValidCoupon) {
            setState({ ...state, coupon: { ...state.coupon, isOpen: false, isValid: true } });
        }
        else {
            setError(true);
        }
    }

    return (
        <Form>
            <TextField
                error={error}
                id="outlined-error-helper-text"
                label={error ? "Kupon nije valjan" : "Unesite kod kupona"}
                variant="outlined"
                size="small"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
            />
            <Button variant="contained" size="medium" color="primary" onClick={handleSubmitCoupon}>Primjeni</Button>
        </Form>
    );
}

export default Coupons;
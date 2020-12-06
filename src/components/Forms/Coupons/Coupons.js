import React, { useContext, useState } from 'react';
import { Container } from './CouponsStyle';

// material-ui
import { FormControl, TextField, Button, makeStyles } from '@material-ui/core';

// utils
import { Context } from '../../../utils/context/Context';

const useStyles = makeStyles({
    formControl: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '20px 0',
    },
});

const Coupons = () => {

    const classes = useStyles();

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
        <FormControl className={classes.formControl}>
            <TextField
                error={error}
                id="outlined-error-helper-text"
                label={error ? "Kupon nije valjan" : "Unesite kod kupona ovdje"}
                variant="outlined"
                size="small"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
            />
            <Button variant="contained" size="medium" color="primary" onClick={handleSubmitCoupon}>Primjeni</Button>
        </FormControl>
    );
}

export default Coupons;
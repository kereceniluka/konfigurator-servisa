import React, { useContext } from 'react';
import { RadioForm } from './ManufacturersStyle';

// material-ui
import { FormControl, Radio, FormControlLabel, makeStyles } from '@material-ui/core';

// data
import { manufacturers } from '../../../data/data.json';

// utils
import { Context } from '../../../utils/context/Context';

const useStyles = makeStyles({
    formControl: {
        width: '100%',
    },
});

const Manufacturers = () => {

    const classes = useStyles();
    const [state, setState] = useContext(Context);

    const handleChange = e => {
        setState({ ...state, manufacturer: e.target.value });
    }

    return (
        <FormControl className={classes.formControl} component="fieldset">
            <RadioForm aria-label="manufacturer" name="manufacturer" value={state.manufacturer} onChange={handleChange}>
                {manufacturers.map(({ id, name }) => <FormControlLabel key={id} value={name} control={<Radio />} label={name} />)}
            </RadioForm>
        </FormControl>
    );
}

export default Manufacturers;
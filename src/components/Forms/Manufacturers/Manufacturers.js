import React, { useContext } from 'react';

// material-ui
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, makeStyles } from '@material-ui/core';

// data
import { manufacturers } from '../../../data/data.json';

// utils
import { Context } from '../../../utils/context/Context';

const useStyles = makeStyles({
    formControl: {
        width: '100%',
    },
    radioGroup: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 5,
    },
    formControlLabel: {
        margin: 0,
    }
});

const Manufacturers = () => {

    const classes = useStyles();
    const [state, setState] = useContext(Context);

    const handleChange = e => {
        setState({ ...state, manufacturer: e.target.value });
    }

    return (
        <FormControl className={classes.formControl} component="fieldset">
            {/* <FormLabel component="legend">Proizvođači</FormLabel> */}
            <RadioGroup className={classes.radioGroup} aria-label="manufacturer" name="manufacturer" value={state.manufacturer} onChange={handleChange}>
                {manufacturers.map(({ id, name }) => <FormControlLabel key={id} className={classes.formControlLabel} value={name} control={<Radio />} label={name} />)}
            </RadioGroup>
        </FormControl>
    );
}

export default Manufacturers;
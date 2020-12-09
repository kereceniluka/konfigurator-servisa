import React, { useContext } from 'react';
import { Container } from './PersonalContactStyle';

// material-ui
import { FormControl, TextField, makeStyles } from '@material-ui/core';

// utils
import { Context } from '../../../utils/context/Context';

const useStyle = makeStyles({
    formControl: {
        width: '100%',
        padding: '5px 0',
    }
});

const PersonalContact = () => {

    const classes = useStyle();

    const [state, setState] = useContext(Context);

    return (
        <Container>
            <FormControl className={classes.formControl}>
                <TextField
                    id="firstname-lastname"
                    type="text"
                    label="Ime i prezime"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.name}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, name: e.target.value } })}
                    inputProps={{ maxLength: 25 }}
                    required
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="email"
                    type="email"
                    label="Email adresa"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.email}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, email: e.target.value } })}
                    inputProps={{ maxLength: 45 }}
                    required
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="telnumber"
                    type="number"
                    label="Broj telefona"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.telNumber}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, telNumber: e.target.value } })}
                    inputProps={{ maxLength: 11 }}
                    required
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="remark"
                    type="text"
                    label="Napomena (opcionalno)"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.remark}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, remark: e.target.value } })}
                    inputProps={{ maxLength: 100 }}
                    multiline
                    rows="6"
                />
            </FormControl>
        </Container>
    );
}

export default PersonalContact;
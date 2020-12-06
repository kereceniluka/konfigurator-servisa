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
                    label="Ime i prezime"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.name}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, name: e.target.value } })}
                    required
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="email"
                    label="Email adresa"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.email}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, email: e.target.value } })}
                    required
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="telnumber"
                    label="Broj telefona"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.telNumber}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, telNumber: e.target.value } })}
                    required
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    id="remark"
                    label="Napomena (opcionalno)"
                    variant="outlined"
                    size="small"
                    value={state.personalInfo.remark}
                    onChange={(e) => setState({ ...state, personalInfo: { ...state.personalInfo, remark: e.target.value } })}
                    multiline
                    rows="2"
                />
            </FormControl>
        </Container>
    );
}

export default PersonalContact;
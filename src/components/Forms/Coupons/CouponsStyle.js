import styled from 'styled-components/macro';
import sizes from '../../../utils/responsive';

// material-ui
import { FormControl } from '@material-ui/core';

export const Form = styled(FormControl) `
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-end !important;
    margin: 20px 0 !important;
`;
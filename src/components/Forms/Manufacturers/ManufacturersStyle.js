import styled from 'styled-components/macro';
import sizes from '../../../utils/responsive';

// material-ui
import { RadioGroup } from '@material-ui/core';

export const RadioForm = styled(RadioGroup) `
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 5px !important;

    ${sizes.tablet} {
        grid-template-columns: repeat(4, 1fr) !important;
    }

    ${sizes.desktop} {
        grid-template-columns: repeat(8, 1fr) !important;
    }
`;
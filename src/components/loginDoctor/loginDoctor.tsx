import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './loginDoctor.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { api } from '../../utils/api/api';
import axios from 'axios';

type Props = {
}

const onClick = () => {
    console.log('Clicked !')
}

export const LoginDoctor = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
        <Box className={classes.box}>
            <CustomButton onClick={onClick} text={'Login/Register'} style={button} />
        </Box>
    );
}
import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './loginPatient.style';
import { Header } from '../header/header';

type Props = {
}

const onClick = () => {
    console.log('Clicked !')
}

export const LoginPatient = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
        <Box>
            <Header/>
            <img src={'welcome.jpeg'} alt="Logo" />
        </Box>
    );
}
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
        <Box >
            <Header />
            <Box className={classes.box}>
                <img className={classes.image} src={'logo.png'} alt="Logo" />
            </Box>
        </Box>
    );
}
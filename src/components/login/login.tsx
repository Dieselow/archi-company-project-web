import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './login.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { api } from '../../utils/api/api';
import axios from 'axios';

type Props = {
}

const onClick = () => {
    console.log('Clicked !')
}

export const Login = (props: Props) => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const styleProps = {
    }
    const classes = useStyles(styleProps);


    const onClick = () => {
        axios.post(api.login, {
            username: username,
            password: password,
        }).then((response: any) => {
            console.log(response);
        }).catch((reason: any) => {
            alert(reason);
        });
    }
    const onChangeUsername = (username: string) => {
        console.log(username);
        setUsername(username);
    }

    const onChangePassword = (password: string) => {
        console.log(password);
        setPassword(password);
    }

    return (
        <Box className={classes.box}>
            <Typography className={classes.typography}>
                Connection
            </Typography>

            <Typography className={classes.typography}>
                Username
            </Typography>

            <TextField
                onChange={(event) => onChangeUsername(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Password
            </Typography>

            <TextField
                onChange={(event) => onChangePassword(event.target.value)}
                label=''
                variant='outlined' />

            <CustomButton text='Login' onClick={onClick} style={button} />
        </Box>
    );
}
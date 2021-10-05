import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './userLogin.style';
import { CustomButton } from '../customButton/customButton';

type Props = {
}

const onClick = () => {
    console.log('Clicked !')
}

export const UserLogin = (props: Props) => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const styleProps = {
    }
    const classes = useStyles(styleProps);


    const onClick = () => {
        console.log(username + ' ' + password);
    }
    const onChangeUsername = (username: string) => {
        console.log(username);
        setUsername(username);
    }

    const onChangePassword = (password : string) => {
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
            onChange = {(event) => onChangeUsername(event.target.value)}
            label='' 
            variant='outlined' />

            <Typography className={classes.typography}>
                Password
            </Typography>

            <TextField
            onChange = {(event) => onChangePassword(event.target.value)}
            label='' 
            variant='outlined'/>

            <CustomButton text='Login' onClick={onClick} />

            <Button className={classes.button}>forgot password or username ?</Button>
        </Box>
    );
}
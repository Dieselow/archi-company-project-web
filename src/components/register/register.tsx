import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './register.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { api } from '../../utils/api/api';
import axios from 'axios';

type Props = {
}

const onClick = () => {
    console.log('Clicked !')
}

export const Register = (props: Props) => {
    const [username, setUsername] = React.useState<string>('');
    const [firstname, setFirstname] = React.useState<string>('');
    const [lastname, setLastname] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [birth, setBirth] = React.useState<string>('');
    const [address, setAdress] = React.useState<string>('');
    const [phoneNumber, setPhoneNumber] = React.useState<string>('');

    const styleProps = {
    }
    const classes = useStyles(styleProps);


    const onClick = () => {
        axios.post(api.register, {
            username: username,
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email,
            dateOfBirth : birth,
            address: address,
            phoneNumber: phoneNumber,
        }).then((response: any) => {
            console.log(response);
        }).catch((reason: any) => {
            alert(reason.response.data);
        });
    }

    const onChangeUsername = (username: string) => {
        console.log(username);
        setUsername(username);
    }

    const onChangeFirstname = (firstname: string) => {
        console.log(firstname);
        setFirstname(firstname);
    }

    const onChangeLastname = (lastname: string) => {
        console.log(lastname);
        setLastname(lastname);
    }

    const onChangePassword = (password: string) => {
        console.log(password);
        setPassword(password);
    }

    const onChangeEmail = (email: string) => {
        console.log(email);
        setEmail(email);
    }

    const onChangeBirth = (birth: string) => {
        console.log(birth);
        setBirth(birth);
    }

    const onChangeAddress = (address: string) => {
        console.log(address);
        setAdress(address);
    }

    const onChangePhoneNumber = (phone: string) => {
        console.log(phone);
        setPhoneNumber(phone);
    }

    return (
        <Box className={classes.box}>
            <Typography className={classes.typographyTitle}>
                New account
            </Typography>

            <Typography className={classes.typography}>
                Username
            </Typography>

            <TextField
                onChange={(event) => onChangeUsername(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Firstname
            </Typography>

            <TextField
                onChange={(event) => onChangeFirstname(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Lastname
            </Typography>

            <TextField
                onChange={(event) => onChangeLastname(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Password
            </Typography>

            <TextField
                onChange={(event) => onChangePassword(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Email
            </Typography>

            <TextField
                onChange={(event) => onChangeEmail(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Date of birth
            </Typography>

            <TextField
                onChange={(event) => onChangeBirth(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Address
            </Typography>

            <TextField
                onChange={(event) => onChangeAddress(event.target.value)}
                label=''
                variant='outlined' />

            <Typography className={classes.typography}>
                Phone number
            </Typography>

            <TextField
                onChange={(event) => onChangePhoneNumber(event.target.value)}
                label=''
                variant='outlined' />

            <CustomButton text='Register' onClick={onClick} style={button}/>
        </Box>
    );
}
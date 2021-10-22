import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './login.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { api } from '../../utils/api/api';
import axios from 'axios';
import { CustomForm } from '../customForm/customForm';
import { form } from '../../utils/customForm/customFormHelper';
import { UserType } from '../userLogin/userLogin';
import { useHistory } from 'react-router-dom';

type Props = {
    type: UserType;
    onChange: () => void;
}

export var bearerToken = '';

export const Login = (props: Props) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const history = useHistory();
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const onClick = () => {
        axios.post(api.login, {
            email: email,
            password: password,
        }).then((response: any) => {
            console.log(response);
            props.onChange();
            bearerToken = response.data.token;
            console.log(bearerToken);
            switch (props.type) {
                case 'patient':
                    history.push('/crud/patient');
                    break;
            }
        }).catch((reason: any) => {
            alert(reason);
        }).then(() => {
            console.log({
                headers: { Authorization: `Bearer ${bearerToken}` }
            });
            console.log(bearerToken);
            axios.get(api.details,
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    console.log(response);
                }).catch((reason: any) => {
                    console.log(reason);
                })
        });
    }
    const onChangeEmail = (username: string) => {
        console.log(username);
        setEmail(username);
    }

    const onChangePassword = (password: string) => {
        console.log(password);
        setPassword(password);
    }

    return (
        <Box className={classes.box}>
            <Typography className={classes.typography}>
                Login {props.type}
            </Typography>

            <CustomForm text={'Email'} style={form} onChange={onChangeEmail} formType={'textfield'} />

            <CustomForm text={'Password'} style={form} onChange={onChangePassword} formType={'textfield'} />

            <CustomButton text='Login' onClick={onClick} style={button} />
        </Box>
    );
}
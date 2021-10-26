import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './login.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { api, getDetails} from '../../utils/api/api';
import axios from 'axios';
import { CustomForm } from '../customForm/customForm';
import { form } from '../../utils/customForm/customFormHelper';
import { UserType } from '../userLogin/userLogin';
import { useHistory } from 'react-router-dom';

type Props = {
    type: UserType;
    onChange: () => void;
}
export type Role = {
    name: string;
    autority: string;
    id: number;
}
export type Details = {
    address: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    healthFile: any;
    id: number;
    lastName: string;
    password: string;
    phoneNumber: string;
    roles: Role[];
    username: string;
    primaryDoctor?: string;
    employmentdate?: string;
    patients : any[];
}

export var bearerToken = '';
export var patients: Details[] = [];
export var details : Details = {
    address: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    healthFile: '',
    id : 0,
    lastName: '',
    password: '',
    phoneNumber: '',
    roles : [],
    username: '',
    primaryDoctor: '',
    employmentdate: '',
    patients: [],
}

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
        }).catch((reason: any) => {
            alert(reason);
        }).then(() => {
            console.log({
                headers: { Authorization: `Bearer ${bearerToken}` }
            });
            console.log(bearerToken);
            axios.get(getDetails(props.type),
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    details = response.data;
                    details.password = password;
                    console.log(details);
                    history.push('/crud');
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
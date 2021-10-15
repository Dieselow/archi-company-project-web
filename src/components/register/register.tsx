import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './register.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { api, getRegister } from '../../utils/api/api';
import { CustomForm } from '../customForm/customForm';
import { form } from '../../utils/customForm/customFormHelper';
import axios from 'axios';
import { UserType } from '../userLogin/userLogin';
import { useHistory } from "react-router-dom";

type Props = {
    type: UserType;
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
    const [salary, setSalary] = React.useState<string>('');
    const [schedule, setSchedule] = React.useState<string>('');
    const [employmentDate, setEmploymentDate] = React.useState<string>('');
    const [licence, setLicence] = React.useState<string>('');
    const history = useHistory();

    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const getRegisterBody = () => {
        switch (props.type) {
            case 'caregiver':
                return {
                    username: username,
                    firstName: firstname,
                    lastName: lastname,
                    password: password,
                    email: email,
                    dateOfBirth: birth,
                    address: address,
                    phoneNumber: phoneNumber,
                    salary: salary,
                    workSchedule: schedule,
                    employmentDate: employmentDate,
                    licenceNumber: licence,
                }
                break;

            case 'patient':
                return {
                    username: username,
                    firstName: firstname,
                    lastName: lastname,
                    password: password,
                    email: email,
                    dateOfBirth: birth,
                    address: address,
                    phoneNumber: phoneNumber,
                }
                break;

            case 'secretary':
                return {
                    username: username,
                    firstName: firstname,
                    lastName: lastname,
                    password: password,
                    email: email,
                    dateOfBirth: birth,
                    address: address,
                    phoneNumber: phoneNumber,
                    salary: salary,
                    workSchedule: schedule,
                    employmentDate: employmentDate,
                }
                break;
        }
    }

    const onClick = () => {
        axios.post(getRegister(props.type), getRegisterBody())
        .then((response: any) => {
            console.log(response);
            history.push("/crud/patient");
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

    const onChangeSalary = (salary: string) => {
        console.log(salary);
        setSalary(salary);
    }

    const onChangeSchedule = (schedule: string) => {
        console.log(schedule);
        setSchedule(schedule);
    }

    const onChangeEmplomentDate = (emplomentDate: string) => {
        console.log(emplomentDate);
        setEmploymentDate(emplomentDate);
    }

    const onChangeLicence = (licence: string) => {
        console.log(licence);
        setLicence(licence);
    }

    return (
        <Box className={classes.box}>
            <Typography className={classes.typographyTitle}>
                Register {props.type}
            </Typography>

            <CustomForm text={'Username'} style={form} onChange={onChangeUsername} formType={'textfield'} />

            <CustomForm text={'Firstname'} style={form} onChange={onChangeFirstname} formType={'textfield'} />

            <CustomForm text={'Lastname'} style={form} onChange={onChangeLastname} formType={'textfield'} />

            <CustomForm text={'Password'} style={form} onChange={onChangePassword} formType={'textfield'} />

            <CustomForm text={'Email'} style={form} onChange={onChangeEmail} formType={'textfield'} />

            <CustomForm text={'Birth date'} style={form} onChange={onChangeBirth} formType={'textfield'} />

            <CustomForm text={'Address'} style={form} onChange={onChangeAddress} formType={'textfield'} />

            <CustomForm text={'Phone number'} style={form} onChange={onChangePhoneNumber} formType={'textfield'} />

            {props.type === 'caregiver' || props.type === 'secretary' ? <Box>

                <CustomForm text={'Salary'} style={form} onChange={onChangeSalary} formType={'textfield'} />

                <CustomForm text={'Work schedule'} style={form} onChange={onChangeSchedule} formType={'textfield'} />

                <CustomForm text={'Emploment date'} style={form} onChange={onChangeEmplomentDate} formType={'textfield'} /></Box> : ''
            }
            {props.type === 'caregiver' ?
                <CustomForm text={'Licence number'} style={form} onChange={onChangeLicence} formType={'textfield'} /> : ''
            }
            <CustomButton text='Register' onClick={onClick} style={button} />
        </Box>
    );
}
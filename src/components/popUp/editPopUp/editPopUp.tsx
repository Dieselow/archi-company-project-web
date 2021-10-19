import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './editPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { CustomForm } from '../../customForm/customForm';
import { formPopUp } from '../../../utils/customForm/customFormHelper';

type Props = {
    onClick: (value: any) => void;
    onClickClose: () => void;
}

export type Appointment = {
    date: string;
    name: string;
    doctor: string;
    room: string;
}

export type ListForm = {
    value: string;
}

export const EditPopUp = (props: Props) => {
    const [address, setAddres] = React.useState<string>('');
    const [employment, setEmployment] = React.useState<string>('');
    const [birth, setBirth] = React.useState<string>('');
    const [iban, setIban] = React.useState<string>('');
    const [salary, setSalary] = React.useState<string>('');
    const styleProps = {
    }

    const classes = useStyles(styleProps);

    const onChangeAddress = (date: string) => {
        console.log(date);
        setAddres(date);
    }

    const onChangeEmployment = (name: string) => {
        console.log(name);
        setEmployment(name);
    }

    const onChangeBirth = (doctor: string) => {
        console.log(doctor);
        setBirth(doctor);
    }

    const onChangeIban = (room: string) => {
        console.log(room);
        setIban(room);
    }

    const onChangeSalary = (salary: string) => {
        console.log(salary);
        setSalary(salary);
    }
    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            My info
        </Typography>

        <CustomForm text={'Address'} style={formPopUp} onChange={onChangeAddress} formType={'textfield'} />

        <CustomForm text={'Employment date'} style={formPopUp} onChange={onChangeEmployment} formType={'date'} />

        <CustomForm text={'Birth date'} style={formPopUp} onChange={onChangeBirth} formType={'date'} />

        <CustomForm text={'IBAN'} style={formPopUp} onChange={onChangeIban} formType={'textfield'}/>

        <CustomForm text={'Salary'} style={formPopUp} onChange={onChangeSalary} formType={'textfield'}/>

        <CustomButton text='Edit' onClick={() => props.onClick({
            address:address,
            employment:employment,
            birth:birth,
            iban:iban,
            salary:salary,
        })} style={button} />

        <CustomButton text='Close' onClick={props.onClickClose} style={button} />

    </Box>
    );
}
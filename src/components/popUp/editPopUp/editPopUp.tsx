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
    const [phone, setPhone] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const styleProps = {
    }

    const classes = useStyles(styleProps);

    const onChangeAddress = (date: string) => {
        console.log(date);
        setAddres(date);
    }

    const onChangePhone = (phone: string) => {
        console.log(phone);
        setPhone(phone);
    }

    const onChangeEmail = (email: string) => {
        console.log(email);
        setEmail(email);
    }
    
    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            My info
        </Typography>

        <CustomForm text={'Address'} style={formPopUp} onChange={onChangeAddress} formType={'textfield'} />

        <CustomForm text={'Phone number'} style={formPopUp} onChange={onChangePhone} formType={'textfield'} />

        <CustomButton text='Edit' onClick={() => props.onClick({
            address:address,
            phone:phone,
        })} style={button} />

        <CustomButton text='Close' onClick={props.onClickClose} style={button} />

    </Box>
    );
}

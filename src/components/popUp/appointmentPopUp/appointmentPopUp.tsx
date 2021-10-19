import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './appointmentPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Login } from '../../login/login';
import { CustomForm } from '../../customForm/customForm';
import { subButton } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { UserType } from '../../userLogin/userLogin';

type Props = {
    onClick: (value: any) => void;
    onClickClose: () => void;
}

export type Room = {
    name: string;
}

const getCaregivers = () => {

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

export const AppointmentPopUp = (props: Props) => {
    const [date, setDate] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [doctor, setDoctor] = React.useState<string>('');
    const [room, setRoom] = React.useState<string>('');
    const styleProps = {
    }

    const rooms: ListForm[] = [
        {
            value: 'room 1'
        },
        {
            value: 'room 2'
        },
        {
            value: 'room 3'
        },
    ]

    const classes = useStyles(styleProps);

    const onChangeDate = (date: string) => {
        console.log(date);
        setDate(date);
    }

    const onChangeName = (name: string) => {
        console.log(name);
        setName(name);
    }

    const onChangeDoctor = (doctor: string) => {
        console.log(doctor);
        setDoctor(doctor);
    }

    const onChangeRoom = (room: string) => {
        console.log(room);
        setRoom(room);
    }
    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            Create an appointment
        </Typography>

        <CustomForm text={'Select a date and a time'} style={formPopUp} onChange={onChangeDate} formType={'date'} />

        <CustomForm text={'Patient name'} style={formPopUp} onChange={onChangeName} formType={'textfield'} />

        <CustomForm text={'Doctor'} style={formPopUp} onChange={onChangeDoctor} formType={'list'} />

        <CustomForm text={'Room'} style={formPopUp} onChange={onChangeRoom} formType={'list'} list={rooms} />

        <CustomButton text='Create' onClick={() => props.onClick(
            {
                date: date,
                name: name,
                doctor: doctor,
                room: room,
            }
        )} style={button} />

        <CustomButton text='Close' onClick={props.onClickClose} style={button} />

    </Box>
    );
}
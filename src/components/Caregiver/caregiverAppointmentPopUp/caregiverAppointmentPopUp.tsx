import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverAppointmentPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Login } from '../../login/login';
import { CustomForm } from '../../customForm/customForm';
import { subButton } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { UserType } from '../../userLogin/userLogin';

type Props = {
    onClick: (value: any) => void;
}

export type Treatment = {
    name: string;
}

const getCaregivers = () => {

}

export type Appointment = {
    date: string;
    name: string;
    doctor: string;
    treatment: string;
}

export type ListForm = {
    value: string;
}

export const AppointmentPopUp = (props: Props) => {
    const [date, setDate] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [doctor, setDoctor] = React.useState<string>('');
    const [treatment, setTreatment] = React.useState<string>();
    const styleProps = {
    }



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

    const onChangeTreatment = (treatment: string) => {
        console.log(treatment);
        setTreatment(treatment);
    }
    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            Create a prescription
        </Typography>

        <CustomForm text={'Patient name'} style={formPopUp} onChange={onChangeName} formType={'textfield'} />

        <CustomForm text={'Enter the treatment'} style={formPopUp} onChange={onChangeTreatment} formType={'textfield'} />

        <CustomButton text='Create' onClick={() => props.onClick(
            {
                date: date,
                name: name,
                doctor: doctor,
                treatment : treatment,
            }
        )} style={button} />
    </Box>
    );
}
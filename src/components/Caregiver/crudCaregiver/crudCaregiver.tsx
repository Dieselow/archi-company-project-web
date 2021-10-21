import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudCaregiver.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { CaregiverData } from '../caregiverData/caregiverData';
import {PatientData,Patient } from '../caregiverPatientData/caregiverPatientData';
import { CaregiverAppointmentData, Appointment } from '../caregiverAppointementData/caregiverAppointmentData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { AppointmentPopUp } from '../caregiverAppointmentPopUp/caregiverAppointmentPopUp';

import {} from '../../crudSecretary/crudSecretary';
import axios from 'axios';
import {api} from '../../../utils/api/api';



export type Caregiver = {
    firstname: string;
    lastname: string;
    adress: string;
    phoneNumber: string;
    email: string;
    employmentdate: string;
}

export const Patientlist: any[] =[
    {name: 'Jack river',},
    {name: 'Joe mayo',}
]


const patients : Patient[]= [
    {
        firstname:'Jack',
        lastname: 'Morgan',
        healthfile: 'Broken knee-August 2007',
    },
    {
        firstname:'Arthur',
        lastname: 'Biden',
        healthfile: 'flu - Autumn 2012',
    }
]


const appointments : Appointment[] = [
    {
        date : 'Lundi',
        data: 'M Doe, Lumbago',
        hasPrescription: true,
    },
    {
        date : 'Mardi',
        data: 'Mme Ludwig, Fièvre',
        hasPrescription: false,
    }
]

type Props = {
    caregiver: Caregiver
}

const onClick = (variable: any) => {
    console.log('on click !');
}

export const CrudCaregiver = (props: Props) => {
  const [open, setOpen] = React.useState(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const onClickCustom = () => {
        console.log('on click !');
        setOpen(true);
    }
    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }

    const callWelcome = () =>{
        axios.get(api.welcome).then((response: any)=>{
            console.log(response);

        }).catch((reason: any)=>{
            console.log(reason);
        });

    }
    return (<Box className={classes.box}>
        <Banner onClick={onClick} textTypography={'Hello ' + props.caregiver.firstname +'.'} textButton={'Log out' } />

        <Box className={classes.background}>
            <CustomButton text={'My info'} onClick={onClickCustom} style={titleButton}/>
            <Box className={classes.content}>
                <Box className={classes.appointements}>
                    <CaregiverAppointmentData appointments={appointments}/>
                </Box>
                <Box className={classes.caregiverData}>
                    <PatientData patients={patients}/>
                </Box>
            </Box>
        </Box>
        <CustomButton text={'My info'} onClick={callWelcome} style={titleButton}/>
        <Banner onClick={onClick} textButton={'Inventory'} />
        <Dialog open={open} onClose={handleClose}>
            <AppointmentPopUp onClick={handleClose}/>
        </Dialog>
    </Box>
    );
}
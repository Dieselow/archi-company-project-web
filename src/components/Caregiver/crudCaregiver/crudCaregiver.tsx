import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudCaregiver.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { CaregiverData } from '../caregiverData/caregiverData';
import {PatientData,Patient } from '../caregiverPatientData/caregiverPatientData';
import { CaregiverAppointmentData, Appointment } from '../caregiverAppointementData/caregiverAppointmentData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { InformationPopUp } from '../caregiverInformationPopUp/caregiverInformationPopUp';

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

const caregiver: Caregiver={
    firstname: 'John',
    lastname: 'House',
    adress: '779 Rue Huard',
    phoneNumber: '45314528795',
    email: 'John@usa.fr',
    employmentdate: '08-10-1998',
}
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

const onClick = () => {
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
            <Dialog open={open} onClose={handleClose}>
                <InformationPopUp onClick={onClickCustom} caregiver={caregiver}/>
            </Dialog>
            <Box className={classes.content}>
                <Box className={classes.appointements}>
                    <CaregiverAppointmentData appointments={appointments}/>
                </Box>
                <Box className={classes.caregiverData}>
                    <PatientData patients={patients}/>
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Inventory'} />
        
    </Box>
    );
}
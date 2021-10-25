import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudCaregiver.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { CaregiverData } from '../caregiverData/caregiverData';
import { PatientData, Patient } from '../caregiverPatientData/caregiverPatientData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { InformationPopUp } from '../caregiverInformationPopUp/caregiverInformationPopUp';
import { Details, details, bearerToken } from '../../login/login';
import { api } from '../../../utils/api/api';
import axios from 'axios';

export type Caregiver = {
    firstname: string;
    lastname: string;
    adress: string;
    phoneNumber: string;
    email: string;
    employmentdate: string;
}

export const Patientlist: any[] = [
    { name: 'Jack river', },
    { name: 'Joe mayo', }
]

var patients: Details[] = [
]



type Props = {
}

const getPatients = () => {
    axios.get(api.patients, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then((response:any) => {
        console.log(response);
        patients = response;
    }).catch((reason:any) => {
        console.log(reason);
    })
}

const onClick = () => {
    console.log('on click !');
}

export const CrudCaregiver = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    getPatients();
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

    const callWelcome = () => {
        axios.get(api.welcome).then((response: any) => {
            console.log(response);

        }).catch((reason: any) => {
            console.log(reason);
        });

    }

    return (<Box className={classes.box}>
        <Banner onClick={onClick} textTypography={'Hello Doctor ' + details.firstName + '.'} textButton={'Log out'} />

        <Box className={classes.background}>
            <CustomButton text={'My info'} onClick={onClickCustom} style={titleButton} />
            <Dialog open={open} onClose={handleClose}>
                <InformationPopUp onClick={onClickCustom} caregiver={details} />
            </Dialog>
            <Box className={classes.content}>
                <Box className={classes.caregiverData}>
                    <PatientData id={details.id} patients={patients} />
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Delete Account'} />

    </Box>
    );
}
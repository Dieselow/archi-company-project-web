import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudCaregiver.style';
import { Banner } from '../banner/banner';
import { CustomButton } from '../customButton/customButton';
import { CaregiverData } from '../caregiverData/caregiverData';
import { AppointmentData, Appointment } from '../appointmentData/appointmentData';
import { titleButton } from '../../utils/customButton/customButtonHelper';
import { AppointmentPopUp } from '../appointmentPopUp/appointmentPopUp';
import {} from '../crudSecretary/crudSecretary';

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




const appointments : Appointment[] = [
    {
        date : 'Lundi',
        data: 'M Doe, Lumbago',
    },
    {
        date : 'Mardi',
        data: 'Mme Ludwig, Fièvre',
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
    return (<Box className={classes.box}>
        <Banner onClick={onClick} textTypography={'Hello ' + props.caregiver.firstname +'.'} textButton={'Log out' } />

        <Box className={classes.background}>
            <CustomButton text={'My info'} onClick={onClickCustom} style={titleButton}/>
            <Box className={classes.content}>
                <Box className={classes.appointements}>
                    <AppointmentData appointments={appointments}/>
                </Box>
                <Box className={classes.caregiverData}>
                    <CaregiverData onClick={onClickCustom} caregiver={props.caregiver}/>
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Inventory'} />
        <Dialog open={open} onClose={handleClose}>
            <AppointmentPopUp onClick={handleClose}/>
        </Dialog>
    </Box>
    );
}
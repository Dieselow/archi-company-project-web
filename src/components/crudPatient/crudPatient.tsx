import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudPatient.style';
import { Banner } from '../banner/banner';
import { CustomButton } from '../customButton/customButton';
import { PersonalData } from '../personalData/personalData';
import { AppointmentData, Appointment } from '../appointmentData/appointmentData';
import { titleButton } from '../../utils/customButton/customButtonHelper';
import { AppointmentPopUp } from '../appointmentPopUp/appointmentPopUp';


export type Patient = {
    firstname: string;
    lastname: string;
    adress: string;
    phoneNumber: string;
    email: string;
}

const appointments : Appointment[] = [
    {
        date : 'Lundi',
        data: 'test',
    },
    {
        date : 'Mardi',
        data: 'test2',
    }
]

type Props = {
    patient: Patient
}

const onClick = (variable: any) => {
    console.log('on click !');
}

export const CrudPatient = (props: Props) => {
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
        <Banner onClick={onClick} textTypography={'Hello ' + props.patient.firstname +'.'} textButton={'Log out' } />

        <Box className={classes.background}>
            <CustomButton text={'My health file'} onClick={onClickCustom} style={titleButton}/>
            <Box className={classes.content}>
                <Box className={classes.appointements}>
                    <AppointmentData appointments={appointments}/>
                </Box>
                <Box className={classes.personalData}>
                    <PersonalData onClick={onClickCustom} patient={props.patient}/>
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Delete account'} />
        <Dialog open={open} onClose={handleClose}>
            <AppointmentPopUp onClick={handleClose}/>
        </Dialog>
    </Box>
    );
}
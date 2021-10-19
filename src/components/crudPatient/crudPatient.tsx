import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudPatient.style';
import { Banner } from '../banner/banner';
import { PersonalData } from '../personalData/personalData';
import { AppointmentData, Appointment } from '../appointmentData/appointmentData';
import { AppointmentPopUp } from '../popUp/appointmentPopUp/appointmentPopUp';
import { EditPopUp } from '../popUp/editPopUp/editPopUp';
import { useHistory } from 'react-router-dom';

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


export const CrudPatient = (props: Props) => {
  const [openAppointment, setOpenAppointment] = React.useState(false);
  const [openEdit, setEdit] = React.useState(false);
  const history = useHistory();
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const onClickDelete = () => {
        console.log('Delete'); //TODO API DELETE CALL
    }
    const onClickLogOut = () => {
        history.push('/');
    }
    const onClickAppointment = () => {
        setOpenAppointment(true);
    }
    const onClickAppointmentClose = () => {
        setOpenAppointment(false);
    }
    const handleCloseAppointment = (value: Appointment) => {
        console.log(value);
        setOpenAppointment(false);
    }

    const onClickEdit = () => {
        setEdit(true);
    }
    const onClickEditClose = () => {
        setEdit(false);
    }
    const handleCloseEdit = (value: any) => {
        console.log(value);
        setEdit(false);
    }
    
    return (<Box className={classes.box}>
        <Banner onClick={onClickLogOut} textTypography={'Hello ' + props.patient.firstname +'.'} textButton={'Log out' } />

        <Box className={classes.background}>
            {/* <CustomButton text={'My health file'} onClick={onClickCustom} style={titleButton}/> */}
            <Box className={classes.content}>
                <Box className={classes.appointements}>
                    <AppointmentData appointments={appointments} onClick={onClickAppointment}/>
                </Box>
                <Box className={classes.personalData}>
                    <PersonalData onClick={onClickEdit} patient={props.patient}/>
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClickDelete} textButton={'Delete account'} />

        <Dialog open={openAppointment}>
            <AppointmentPopUp onClick={handleCloseAppointment} onClickClose={onClickAppointmentClose}/>
        </Dialog>

        <Dialog open={openEdit}>
            <EditPopUp onClick={handleCloseEdit} onClickClose={onClickEditClose}/>
        </Dialog>

    </Box>
    );
}
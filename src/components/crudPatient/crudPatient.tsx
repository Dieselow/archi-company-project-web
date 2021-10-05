import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudPatient.style';
import { Banner } from '../banner/banner';
import { CustomButton } from '../customButton/customButton';
import { PersonalData } from '../personalData/personalData';
import { AppointmentData, Appointment } from '../appointmentData/appointmentData';


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
const handleClose = () => {

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
    return (<Box>
        <Banner onClick={onClick} textTypography={'hello ' + props.patient.firstname} textButton={'Log out' } />
        <Box className={classes.box1}>
            <CustomButton text={'My health file'} onClick={onClickCustom} />
            <Box className={classes.box2}>
                <Box className={classes.box3}>
                    <AppointmentData appointments={appointments}/>
                </Box>
                <Box className={classes.box4}>
                    <PersonalData onClick={onClickCustom} patient={props.patient}/>
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Delete account'} />
        <Dialog open={open} onClose={handleClose}>
            <Typography>{'test'}</Typography>
        </Dialog>
    </Box>
    );
}
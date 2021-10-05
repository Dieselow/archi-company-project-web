import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './appointmentData.style';
import { CustomButton } from '../customButton/customButton';
import { AppointmentItem } from '../appointmentItem/appointmentItem';

export type Appointment = {
    date: string;
    data: string;
}

type Props = {
    appointments : Appointment[]
}

const onClickCreate = () => {

}

export const AppointmentData = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography>Appointments history</Typography>
        <Box>
            <CustomButton text={'Create a new appointment'} onClick={onClickCreate}/>
            {props.appointments.map(x => <AppointmentItem appointment={x}/>)}
        </Box>
    </Box>
    );
}
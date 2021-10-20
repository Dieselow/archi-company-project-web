import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './secretaryAppointmentData.style';
import { CustomButton } from '../customButton/customButton';
import { AppointmentItem } from '../secretaryAppointmentItem/secretaryAppointmentItem';
import { button } from '../../utils/customButton/customButtonHelper';

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
        <Typography className={classes.typography}>Pending appointments</Typography>
        <Box>
            {props.appointments.map(x => <AppointmentItem appointment={x}/>)}
        </Box>
    </Box>
    );
}

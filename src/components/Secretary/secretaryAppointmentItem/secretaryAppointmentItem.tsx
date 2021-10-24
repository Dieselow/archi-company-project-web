import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './secretaryAppointmentItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';

export type Appointment = {
    date: string;
    data: string;
}

type Props = {
    appointment: Appointment
}

const onClickAccess = () => {

}

export const AppointmentItem = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.appointment.date}
            {props.appointment.data}
        </Typography>
        <CustomButton text={'Review appointment'} onClick={onClickAccess} style={button}/>
    </Box>
    );
}

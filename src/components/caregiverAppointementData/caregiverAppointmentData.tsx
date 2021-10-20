import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverAppointementData.style';
import { CustomButton } from '../customButton/customButton';
import { CaregiverAppointmentItem } from '../caregiverAppointmentItem/caregiverAppointmentItem';
import { button } from '../../utils/customButton/customButtonHelper';

export type Appointment = {
    date: string;
    data: string;
    hasPrescription: boolean;
}

type Props = {
    appointments : Appointment[]
}

const onClickCreate = () => {

}

export const CaregiverAppointmentData = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Appointments</Typography>
        <Box>
            {props.appointments.map(x => <CaregiverAppointmentItem hasPrescription={x.hasPrescription} appointment={x}/>)}
        </Box>
    </Box>
    );
}

import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './appointmentItem.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';

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
        <Typography>
            {props.appointment.date}
        </Typography>
        <CustomButton text={'Access prescription'} onClick={onClickAccess} style={button}/>
    </Box>
    );
}
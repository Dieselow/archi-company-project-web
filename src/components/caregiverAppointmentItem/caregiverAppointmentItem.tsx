import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverAppointmentItem.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';

export type Appointment = {
    date: string;
    data: string;
}

type Props = {
    appointment: Appointment;
    hasPrescription: boolean;
}

const onClickEdit = () => {

}

const onClickCreate = () => {

}

export const CaregiverAppointmentItem = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.appointment.date}
        </Typography>
        {
                props.hasPrescription? <CustomButton text={'Edit prescription'} onClick={onClickEdit} style={button}/> : 
                <CustomButton text={'Add prescription'} onClick={onClickCreate} style={button}/>
        }
        
    </Box>
    );
}

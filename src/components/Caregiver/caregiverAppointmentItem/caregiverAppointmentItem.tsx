import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './caregiverAppointmentItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { AppointmentPopUp } from '../caregiverAppointmentPopUp/caregiverAppointmentPopUp';

export type Appointment = {
    date: string;
    data: string;
}

type Props = {
    appointment: Appointment;
    hasPrescription: boolean;
}



export const CaregiverAppointmentItem = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const styleProps = {
    }

    const onClickCustom = () => {
        console.log('on click !');
        setOpen(true);
    }
    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }
    const onClickEdit = () => {
        setOpen(true);
    }
    
    const onClickCreate = () => {
        setOpen(true);
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
        <Dialog open={open} onClose={handleClose}>
            <AppointmentPopUp onClick={handleClose}/>
        </Dialog>
    </Box>
    );
}

import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './caregiverPatientItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import {HealthFilePopUp} from '../caregiverPatientFilePopUp/caregiverPatientFilePopUp'; 

export type Patient = {
    lastname: string;
    firstname: string;
    healthfile: string;
}

type Props = {
    patient: Patient
}



export const PatientItem = (props: Props) => {
    const styleProps = {
    }
    const [open, setOpen] = React.useState(false);
    const classes = useStyles(styleProps);

    const onClickAccessHealthFile = () => {
        setOpen(true);
    }

    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.patient.firstname}
        </Typography>
        <CustomButton text={'Access patient file'} onClick={onClickAccessHealthFile} style={button}/>
        <Dialog open={open} onClose={handleClose}>
            <HealthFilePopUp onClick={handleClose}/>
        </Dialog>
    </Box>
    );
}

import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverPatientItem.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';

export type Patient = {
    lastname: string;
    firstname: string;
    healthfile: string;
}

type Props = {
    patient: Patient
}

const onClickAccessHealthFile = () => {

}

export const PatientItem = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.patient.firstname}
        </Typography>
        <CustomButton text={'Access patient file'} onClick={onClickAccessHealthFile} style={button}/>
    </Box>
    );
}

import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './personalData.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';

type Props = {
    onClick?: () => void;
    patient: any;
}

export const PersonalData = (props: Props) => {
    const patient = props.patient;
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box >
        <Box className={classes.box}>
        <Typography className={classes.titleTypography}>
            Personal Data
        </Typography>
        {props.onClick != null ? <CustomButton text={'Edit'} onClick={props.onClick} style={button}/> : null}
        </Box>
        <Typography className={classes.typography}>
            address : {patient.address}
        </Typography>
        <Typography className={classes.typography}>
            phone number : {patient.phoneNumber}
        </Typography>
        <Typography className={classes.typography}>
            email : {patient.email}
        </Typography>
    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './prescriptionPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { CustomForm } from '../../customForm/customForm';
import { formPopUp } from '../../../utils/customForm/customFormHelper';

type Props = {
    onClickClose: () => void;
    prescription: Prescription;
}

export type Prescription = {
    date: string;    
    data: string;
}

export type ListForm = {
    value: string;
}

export const PrescriptionPopUp = (props: Props) => {
    const styleProps = {
    }

    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            Prescription info
        </Typography>

        <Typography className={classes.typographyLight}>
            Date : {props.prescription.date}
        </Typography>

        <Typography className={classes.typographyLight}>
            Data : {props.prescription.data}
        </Typography>

        <CustomButton text='Close' onClick={props.onClickClose} style={button} />

    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './healthFilePopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { CustomForm } from '../../customForm/customForm';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { PersonalData } from '../../personalData/personalData';
import { AppointmentData, Appointment } from '../../appointmentData/appointmentData';
import { AppointmentPopUp } from '../../popUp/appointmentPopUp/appointmentPopUp';
import { EditPopUp } from '../../popUp/editPopUp/editPopUp';
import { useHistory } from 'react-router-dom';
import { api, getUpdate } from '../../../utils/api/api';
import { bearerToken } from '../../login/login';
import { Details, details } from '../../login/login';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import axios from 'axios';

type Props = {
    onClickClose: () => void;
}

export type HealthFile = {
    emergencyContact: string;
    medications: string;
    chronicConditions: string;
}

export type ListForm = {
    value: string;
}

const getHealthFile = () => {
    var healthFile: HealthFile = {
        emergencyContact: '',
        medications: '',
        chronicConditions: '',
    }
    axios.get(api.healthfile.view + details.id,
        {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            console.log(response);
            healthFile.emergencyContact = response.emergencyContact;
            healthFile.medications = response.medications;
            healthFile.chronicConditions = response.chronicConditions;
        }).catch((reason: any) => {
            console.log(reason);
        })
    return healthFile;
}

const healthFile = getHealthFile();

export const HealthFilePopUp = (props: Props) => {
    const styleProps = {
    }

    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            HealthFile
        </Typography>

        <Typography className={classes.typographyLight}>
            Emergency contact : {healthFile.emergencyContact}
        </Typography>

        <Typography className={classes.typographyLight}>
            medications : {healthFile.medications}
        </Typography>

        <Typography className={classes.typographyLight}>
            Chronic conditions : {healthFile.chronicConditions}
        </Typography>

        <CustomButton text='Close' onClick={props.onClickClose} style={button} />

    </Box>
    );
}
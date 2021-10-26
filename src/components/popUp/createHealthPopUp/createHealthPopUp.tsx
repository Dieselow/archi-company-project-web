import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './createHealthPopUp.style';
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
    onClickCreate: (healthFile: HealthFile) => void;
}

export type HealthFile = {
    emergencyContact: string;
    medications: string;
    chronicConditions: string;
}


export const CreateHealthFilePopUp = (props: Props) => {
    const [emergencyContact, setEmergencyContact] = React.useState<string>('');
    const [medications, setMedications] = React.useState<string>('');
    const [chronicConditions, setChronicConditions] = React.useState<string>('');
    const styleProps = {
    }

    const onChangeEmergency = (emergency: string) => {
        setEmergencyContact(emergency);
    }

    const onChangeMedications = (medications: string) => {
        setMedications(medications);
    }

    const onChangeChronic = (chronic: string) => {
        setChronicConditions(chronic);
    }

    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            Create HealthFile
        </Typography>

        <CustomForm text={'Emergency contact '} style={formPopUp} onChange={onChangeEmergency} formType={'textfield'} />

        <CustomForm text={'medications '} style={formPopUp} onChange={onChangeMedications} formType={'textfield'} />

        <CustomForm text={'Chronic conditions'} style={formPopUp} onChange={onChangeChronic} formType={'textfield'} />

        <CustomButton text='Create' onClick={() => props.onClickCreate(
            {
                emergencyContact: emergencyContact,
                medications: medications,
                chronicConditions: chronicConditions,
            }
        )} style={button} />

        <CustomButton text='Close' onClick={props.onClickClose} style={button} />

    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverPatientFilePopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Login } from '../../login/login';
import { CustomForm } from '../../customForm/customForm';
import { subButton } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { UserType } from '../../userLogin/userLogin';
import { HealthFile } from '../../popUp/healthFilePopUp/healthFilePopUp';

type Props = {
    onClick: (value: any) => void;
    healthFile : HealthFile;
}

export type Treatment = {
    name: string;
}

export type ListForm = {
    value: string;
}

export const HealthFilePopUp = (props: Props) => {
    const [emergencyContact, setEmergencyContact] = React.useState<string>(props.healthFile.emergencyContact);
    const [medications, setMedications] = React.useState<string>(props.healthFile.medications);
    const [chronicConditions, setChronicConditions] = React.useState<string>(props.healthFile.chronicConditions);

    const styleProps = {
    }

    const classes = useStyles(styleProps);

    const onChangeEmergencyContact = (value: string) => {
        console.log(value);
        setEmergencyContact(value);
    }

    const onChangeMedications = (value: string) => {
        console.log(value);
        setMedications(value);
    }

    const onChangeChronicConditions = (value: string) => {
        console.log(value);
        setChronicConditions(value);
    }

    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            Healthfile
        </Typography>

        <CustomForm text={'Emergency contact'} style={formPopUp} onChange={onChangeEmergencyContact} formType={'textfield'} default={props.healthFile.emergencyContact}/>

        <CustomForm text={'Medications'} style={formPopUp} onChange={onChangeMedications} formType={'textfield'} default={props.healthFile.medications}/>

        <CustomForm text={'Chronic conditions'} style={formPopUp} onChange={onChangeChronicConditions} formType={'textfield'} default={props.healthFile.chronicConditions}/>

        <CustomButton text='Update' onClick={() => props.onClick(
            {
                emergencyContact: emergencyContact,
                medications: medications,
                chronicConditions: chronicConditions
            }
        )} style={button} />
    </Box>
    );
}

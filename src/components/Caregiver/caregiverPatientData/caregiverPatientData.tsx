import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverPatientData.style';
import { CustomButton } from '../../customButton/customButton';
import { PatientItem } from '../caregiverPatientItem/caregiverPatientItem';
import { button } from '../../../utils/customButton/customButtonHelper';
import {bearerToken, Details, details} from '../../login/login';
import axios from "axios";
import {api} from "../../../utils/api/api";

export type Patient = {
    firstname: string;
    lastname: string;
    healthfile: string;
}

type Props = {
    patients : Details[],
    id : number,
}
var patientRequestMade = 0;
export const PatientData = (props: Props) => {
    const styleProps = {
    }
    const [patients, setPatients] = React.useState<Details[]>([]);

    const getAllDoctorPatient = () => {

        axios.get(api.doctorPatient, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            setPatients(response.data);
            console.log(patients);
        }).catch((reason: any) => {
            console.log(reason);
        })
    }
    const classes = useStyles(styleProps);
    console.log(props.patients);
    console.log(patientRequestMade);
    if(patientRequestMade == 0){
        getAllDoctorPatient();
        patientRequestMade = 1;
    }
    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Patient List</Typography>
        <Box>
            {props.patients.map(x => <PatientItem id={x.id} patient={x}/>)}
        </Box>
    </Box>
    );
}

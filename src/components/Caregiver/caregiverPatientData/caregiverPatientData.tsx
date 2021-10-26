import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverPatientData.style';
import { CustomButton } from '../../customButton/customButton';
import { PatientItem } from '../caregiverPatientItem/caregiverPatientItem';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Details, details } from '../../login/login';

export type Patient = {
    firstname: string;
    lastname: string;
    healthfile: string;
}

type Props = {
    patients : Details[],
    id : number,
}

const onClickCreate = () => {

}

export const PatientData = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Patient List</Typography>
        <Box>
            {props.patients.map(x => <PatientItem id={props.id} patient={x}/>)}
        </Box>
    </Box>
    );
}

import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './personalData.style';
import { Patient } from '../crudPatient/crudPatient';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';

type Props = {
    onClick: () => void;
    patient: Patient;
}

export const PersonalData = (props: Props) => {
    const patient = props.patient;
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box >
        <Box className={classes.box}>
        <Typography>
            Personal Data
        </Typography>
        <CustomButton text={'Edit'} onClick={props.onClick} style={button}/>
        </Box>
        <Typography>
            address : {patient.adress}
        </Typography>
        <Typography>
            phone number : {patient.phoneNumber}
        </Typography>
        <Typography>
            email : {patient.email}
        </Typography>
    </Box>
    );
}
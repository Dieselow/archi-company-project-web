import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudCaregiver.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { CaregiverData } from '../caregiverData/caregiverData';
import { PatientData, Patient } from '../caregiverPatientData/caregiverPatientData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { InformationPopUp } from '../caregiverInformationPopUp/caregiverInformationPopUp';
import { Details, details, bearerToken } from '../../login/login';
import { api } from '../../../utils/api/api';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export type Caregiver = {
    firstname: string;
    lastname: string;
    adress: string;
    phoneNumber: string;
    email: string;
    employmentdate: string;
}

export const Patientlist: any[] = [
    { name: 'Jack river', },
    { name: 'Joe mayo', }
]
type Props = {
}


export const CrudCaregiver = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);  
    const [bearerType, setBearerType] = React.useState('');

    let history = useHistory();

    const onClick = () => {
        history.push('/caregiver');
    }


    
    const onClickCustom = () => {
        console.log('on click !');
        setOpen(true);
    }
    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }

    return (<Box className={classes.box}>

        <Banner onClick={onClick} textTypography={'Hello Doctor ' + details.firstName + '.'} textButton={'Log out'}  searchBar= {true} />

        <Box className={classes.background}>
            {/* <CustomButton text={'My info'} onClick={onClickCustom} style={titleButton} /> */}
            <Dialog open={open} onClose={handleClose}>
                <InformationPopUp onClick={onClickCustom} caregiver={details} />
            </Dialog>
            <Box className={classes.content}>
                <Box className={classes.caregiverData}>
                    <PatientData id={details.id} patients={details.patients || []} />
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Delete Account'} />

    </Box>
    );
}
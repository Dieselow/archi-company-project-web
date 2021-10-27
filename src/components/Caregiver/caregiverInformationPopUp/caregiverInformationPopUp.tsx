import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './caregiverInformationPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Login } from '../../login/login';
import { CustomForm } from '../../customForm/customForm';
import { subButton } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { UserType } from '../../userLogin/userLogin';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { CaregiverData } from '../caregiverData/caregiverData';
import { Caregiver } from '../crudCaregiver/crudCaregiver';
import { Details, details } from '../../login/login';
type Props = {
    caregiver: Details;
    onClick: (value: any) => void;
}

const getCaregiverData = (caregiver: Caregiver) => {

}

export type ListForm = {
    value: string;
}

export const InformationPopUp = (props: Props) => {
    const styleProps = {
    }
    const [open, setOpen] = React.useState(false);

    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }
    
    
    const onClickCreate = () => {
        setOpen(true);
    }

    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
        First name: {props.caregiver.firstName} <br/>
        Last name: {props.caregiver.lastName} <br/>
        Email: {props.caregiver.email} <br/>
        Phone Number: {props.caregiver.phoneNumber} <br/>
        Employed since: {props.caregiver.employmentdate}  <br/>
        </Typography>
        <CustomButton text='Edit' onClick={onClickCreate} style={button} />
        <Dialog open={open} onClose={handleClose}>
            <CaregiverData onClick={handleClose} 
            />
        </Dialog>
    </Box>
    );
}
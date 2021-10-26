import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './secretaryInformationPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Login } from '../../login/login';
import { CustomForm } from '../../customForm/customForm';
import { subButton } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { UserType } from '../../userLogin/userLogin';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { SecretaryData } from '../secretaryData/secretaryData';
import { Details, details } from '../../login/login';

type Props = {
    secretary: Details;
    onClick: (value: any) => void;
}

const getSecretaryData = (secretary: Details) => {

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
        First name: {props.secretary.firstName} <br/>
        Last name: {props.secretary.lastName} <br/>
        Email: {props.secretary.email} <br/>
        Phone Number: {props.secretary.phoneNumber} <br/>
        Employed since: {props.secretary.employmentdate}  <br/>
        </Typography>
        <CustomButton text='Edit' onClick={onClickCreate} style={button} />
        <Dialog open={open} onClose={handleClose}>
            <SecretaryData onClick={handleClose} 
            secretary={props.secretary}/>
        </Dialog>
    </Box>
    );
}
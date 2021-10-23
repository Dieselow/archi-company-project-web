import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './secretaryData.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Secretary } from '../crudSecretary/crudSecretary';
import { formPopUp } from '../../../utils/customForm/customFormHelper';


type Props = {
    onClick: (value: any) => void;
}

export type Appointment = {
    employmentdate: string;
    lastname: string;
    email: string;
    address: string;
    phonenumber: string;

}

    
    export const SecretaryData = (props: Props) => {
        const [employmentdate, setEmploymentDate] = React.useState<string>('');
        const [lastname, setLastName] = React.useState<string>('');
        const [email, setEmail] = React.useState<string>('');
        const [address, setAddress] = React.useState<string>();
        const [phonenumber, setPhonenumber] = React.useState<string>();

        const styleProps = {
        }

     

    
    
    
        const classes = useStyles(styleProps);
    
        const onChangeEmail = (email: string) => {
            console.log(email);
            setEmail(email);
        }
    
        const onChangeLastName = (lastname: string) => {
            console.log(lastname);
            setLastName(lastname);
        }
    
        const onChangePhoneNumber = (phonenumber: string) => {
            console.log(phonenumber);
            setPhonenumber(phonenumber);
        }
        const onChangeAddress = (address: string) => {
            console.log(address);
            setAddress(address);
        }
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
                Edit your info:
            </Typography>
    
            <CustomForm text={'Last name'} style={formPopUp} onChange={onChangeLastName} formType={'textfield'} />

            <CustomForm text={'Enter your new email'} style={formPopUp} onChange={onChangeEmail} formType={'textfield'} />

            <CustomForm text={'Enter your new phone number'} style={formPopUp} onChange={onChangePhoneNumber} formType={'textfield'} />
    
            <CustomForm text={'Enter your new Address'} style={formPopUp} onChange={onChangeAddress} formType={'textfield'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    lastname: lastname,
                    email: email,
                    address: address,
                    phonenumber : phonenumber,
                }
            )} style={button} />
        </Box>
        );
    }
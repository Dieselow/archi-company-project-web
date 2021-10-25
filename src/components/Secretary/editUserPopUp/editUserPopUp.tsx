import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './editUserPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';
import { User } from '../userItem/userItem';


type Props = {
    onClick: (value: any) => void;
}

export {}
export const EditUserPopUp = (props: Props) => {
        const [address, setAddress] = React.useState<string>('');
        const [primaryDoctor, setPrimaryDoctor] = React.useState<string>('');
        
        const styleProps = {
        }
    
        const classes = useStyles(styleProps);
    
        const onChangeAddress = (address: string) => {
            console.log(address);
            setAddress(address);
        }
    
        const onChangePrimaryDoctor= (primaryDoctor: string) => {
            console.log(primaryDoctor);
            setPrimaryDoctor(primaryDoctor);
        }

        const postUpdate= (patient: Details) => {
            axios.put(api.update.patient, patient,
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    console.log('Updated at: '+response.data.Updated);
                }).catch((reason: any) => {
                    console.log(reason);
                });
        }
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Edit user:
            </Typography>
    
            <CustomForm text={'Address'} style={formPopUp} onChange={onChangeAddress} formType={'textfield'} />

            <CustomForm text={'Primary Doctor'} style={formPopUp} onChange={onChangePrimaryDoctor} formType={'list'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    address: address,
                    primaryDoctor: primaryDoctor,
                    
                }
            )} style={button} />
        </Box>
        );
}
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './editUserPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';


type Props = {
    onClick: (value: any) => void;
}

export {}
export const EditUserPopUp = (props: Props) => {
        const [address, setAddress] = React.useState<string>('');
        const [username, setUsername] = React.useState<string>('');
        
        const styleProps = {
        }
    
        const classes = useStyles(styleProps);
    
        const onChangeAddress = (address: string) => {
            console.log(address);
            setAddress(address);
        }
    
        const onChangeUsername = (username: string) => {
            console.log(username);
            setUsername(username);
        }
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Edit user:
            </Typography>
    
            <CustomForm text={'Address'} style={formPopUp} onChange={onChangeAddress} formType={'textfield'} />

            <CustomForm text={'Username'} style={formPopUp} onChange={onChangeUsername} formType={'textfield'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    address: address,
                    username: username,
                }
            )} style={button} />
        </Box>
        );
}
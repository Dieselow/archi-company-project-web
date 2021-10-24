import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './addEquipmentPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Equipment } from '../secretaryEquipmentItem/secretaryEquipmentItem';
import { formPopUp } from '../../../utils/customForm/customFormHelper';


type Props = {
    onClick: (value: any) => void;
}



    
    export const AddEquipmentPopUp = (props: Props) => {
        const [installationdate, setInstallationDate] = React.useState<string>('');
        const [name, setName] = React.useState<string>('');
        
        const styleProps = {
        }

     

    
    
    
        const classes = useStyles(styleProps);
    
        const onChangeName = (name: string) => {
            console.log(name);
            setName(name);
        }
    
        const onChangeInstallationData = (installationDate: string) => {
            console.log(installationDate);
            setInstallationDate(installationDate);
        }
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Add an equipment:
            </Typography>
    
            <CustomForm text={'Name'} style={formPopUp} onChange={onChangeName} formType={'textfield'} />

            <CustomForm text={'Enter the installation date'} style={formPopUp} onChange={onChangeInstallationData} formType={'textfield'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    name: name,
                    installationdate: installationdate,
                }
            )} style={button} />
        </Box>
        );
    }
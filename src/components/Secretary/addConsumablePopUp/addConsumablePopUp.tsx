import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './addConsumablePopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Consumable } from '../consumableItem/consumableItem';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';

type Props = {
    onClick: (value: any) => void;
}



    
    export const AddConsumablePopUp = (props: Props) => {
        const [installationdate, setInstallationDate] = React.useState<string>('');
        const [name, setName] = React.useState<string>('');
        const [id, setId] = React.useState<string>('');
        
        const styleProps = {
        }

     

    
    
    
        const classes = useStyles(styleProps);
    
        const onChangeName = (name: string) => {
            console.log(name);
            setName(name);
        }

        const onChangeId = (Id: string) => {
            console.log(Id);
            setId(Id);
        }
    
        const onChangeInstallationData = (installationDate: string) => {
            console.log(installationDate);
            setInstallationDate(installationDate);
        }

        const postCreate= (consumable: Consumable) => {
            axios.post(api.consumable.create+ consumable.consumableType.id, consumable,
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    console.log('Created at: '+response.data);
                }).catch((reason: any) => {
                    console.log(reason);
                });
        }
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Add an equipment:
            </Typography>
    
            <CustomForm text={'Name'} style={formPopUp} onChange={onChangeName} formType={'textfield'} />

            <CustomForm text={'Enter the installation date'} style={formPopUp} onChange={onChangeInstallationData} formType={'textfield'} />

            <CustomForm text={'Enter the Id'} style={formPopUp} onChange={onChangeId} formType={'textfield'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    name: name,
                    installationdate: installationdate,
                    id: id,
                }
            )} style={button} />
        </Box>
        );
    }
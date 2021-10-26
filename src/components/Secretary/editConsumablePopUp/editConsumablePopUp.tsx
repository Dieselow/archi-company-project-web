import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './editConsumablePopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';
import { Consumable } from '../consumableItem/consumableItem';


type Props = {
    onClick: (value: any) => void;
    consumable:Consumable;
}

export const EditConsumablePopUp = (props: Props) => {
        const [quantity, setQuantity] = React.useState<string>('');
        const [treshold, setTreshold] = React.useState<string>('');
        
        const styleProps = {
        }
    
        const classes = useStyles(styleProps);
    
        const onChangeTreshold = (treshold: string) => {
            console.log(treshold);
            setTreshold(treshold);
        }
    
        const onChangeQuantity= (quantity: string) => {
            console.log(quantity);
            setQuantity(quantity);
        }

        const postUpdate= (consumable: Consumable) => {
            axios.put(api.consumable.update, consumable,
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    console.log('Updated at: '+response.data);
                }).catch((reason: any) => {
                    console.log(reason);
                });
        }
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Edit consumable:
            </Typography>
    
            <CustomForm text={'Treshold:'} style={formPopUp} onChange={onChangeTreshold} formType={'textfield'} default={props.consumable.threshold}/>

            <CustomForm text={'Quantity'} style={formPopUp} onChange={onChangeQuantity} formType={'textfield'} default={props.consumable.quantity}/>
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    quantity: quantity,
                    treshold: treshold,
                }
            )} style={button} />
        </Box>
        );
}
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
        const [quantity, setQuantity] = React.useState<string>('');
        const [treshold, setTreshold] = React.useState<string>('');
        const [id, setId] = React.useState<string>('');
        
        const styleProps = {
        }

     

    
    
    
        const classes = useStyles(styleProps);
    
        const onChangeQuantity = (quantity: string) => {
            console.log(quantity);
            setQuantity(quantity);
        }

        const onChangeId = (Id: string) => {
            console.log(Id);
            setId(Id);
        }
    
        const onChangeTreshold = (treshold: string) => {
            console.log(treshold);
            setTreshold(treshold);
        }

        
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Add a consumable:
            </Typography>
    
            <CustomForm text={'Quantity'} style={formPopUp} onChange={onChangeQuantity} formType={'textfield'} />

            <CustomForm text={'Treshold'} style={formPopUp} onChange={onChangeTreshold} formType={'textfield'} />

            <CustomForm text={'Enter the Id'} style={formPopUp} onChange={onChangeId} formType={'textfield'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    quantity: quantity,
	                threshold: treshold,
	                consumableType: {
	                    id: id
	                }
                }
            )} style={button} />
        </Box>
        );
    }
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { CustomForm } from '../../customForm/customForm';
import { useStyles } from './addTicketPopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Ticket } from '../ticketItem/ticketItem';
import { formPopUp } from '../../../utils/customForm/customFormHelper';


type Props = {
    onClick: (value: any) => void;
}



    
    export const AddEquipmentPopUp = (props: Props) => {
        const [requestDate, setRequestDate] = React.useState<string>('');
        const [consumables, setConsumables] = React.useState<string>('');
        
        const styleProps = {
        }

     

    
    
    
        const classes = useStyles(styleProps);
    
        const onChangeConsumables = (consumables: string) => {
            console.log(consumables);
            setRequestDate(consumables);
        }
    
        const onChangeRequestDate = (requestDate: string) => {
            console.log(requestDate);
            setRequestDate(requestDate);
        }
    
        return (<Box className={classes.box}>
    
            <Typography className={classes.typography}>
               Add an equipment:
            </Typography>
    
            <CustomForm text={'Consumables'} style={formPopUp} onChange={onChangeConsumables} formType={'textfield'} />

            <CustomForm text={'Enter the Request date'} style={formPopUp} onChange={onChangeRequestDate} formType={'textfield'} />
    
            <CustomButton text='Create' onClick={() => props.onClick(
                {
                    consumables: consumables,
                    requestDate: requestDate,
                }
            )} style={button} />
        </Box>
        );
    }
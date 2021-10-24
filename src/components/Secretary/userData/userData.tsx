import React from 'react';
import { Button, Typography, Box, Dialog, useScrollTrigger } from '@material-ui/core';
import { useStyles } from './userData.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { TicketData } from '../ticketData/ticketData';
import { Ticket } from '../ticketItem/ticketItem';
import { AppointmentData, Appointment } from '../secretaryAppointmentData/secretaryAppointmentData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { AppointmentPopUp } from '../../appointmentPopUp/appointmentPopUp';
import { InformationPopUp } from '../secretaryInformationPopUp/secretaryInformationPopUp';
import { Secretary } from '../crudSecretary/crudSecretary';
import { button } from '../../../utils/customButton/customButtonHelper';
import { UserItem, User } from '../userItem/userItem';


const getAllUsers= {

}
type Props = {
    users: User[],
}

const onClick = (variable: any) => {
    console.log('on click !');
}

const onClickCreate = () => {

}
  
    
    export const UserData = (props: Props) => {
        const [open, setOpen] = React.useState(false);
        const styleProps = {
        }
        const classes = useStyles(styleProps);
    
        const onClickCustom = () => {
            console.log('on click !');
            setOpen(true);
        }
        const handleClose = (value: string) => {
            console.log(value);
            setOpen(false);
        }
    
    
        return (<Box className={classes.box}>
            <Typography className={classes.typography}>Patient list</Typography>
            <Box>
                {props.users.map(x => <UserItem user={x}/>)}
            </Box>
        </Box>
        );
    }

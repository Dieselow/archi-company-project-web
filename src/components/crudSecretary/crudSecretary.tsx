import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudSecretary.style';
import { Banner } from '../banner/banner';
import { CustomButton } from '../customButton/customButton';
import { TicketData, Ticket } from '../ticketData/ticketData';
import { AppointmentData, Appointment } from '../secretaryAppointmentData/secretaryAppointmentData';
import { titleButton } from '../../utils/customButton/customButtonHelper';
import { AppointmentPopUp } from '../appointmentPopUp/appointmentPopUp';



export type Secretary = {
    firstname: string;
    lastname: string;
    adress: string;
    phoneNumber: string;
    email: string;
    employmentdate: string;
}

const appointmentsrequests : Appointment[] = [
    {
        date : 'Lundi',
        data: 'M Doe, Lumbago, with Dr River',
    },
    {
        date : 'Mardi',
        data: 'Mme Ludwig, Fièvre, with Dr Menard',
    }
]
const ongoingtickets : Ticket[] = [
    {
        name : 'Order 10254',
        data: '2 compresses, 5 ciseaux, 3 seringues',
    },
    {
        name : 'Order 2118',
        data: '10 dolipranes',
    }
]

type Props = {
    secretary: Secretary
}

const onClick = (variable: any) => {
    console.log('on click !');
}

export const CrudSecretary = (props: Props) => {
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
        <Banner onClick={onClick} textTypography={'Hello ' + props.secretary.firstname +'.'} textButton={'Log out' } />

        <Box className={classes.background}>
            <CustomButton text={'My infos'} onClick={onClickCustom} style={titleButton}/>
            <Box className={classes.content}>
                <Box className={classes.appointements}>
                    <AppointmentData appointments={appointmentsrequests}/>
                </Box>
                <Box className={classes.tickets}>
                    <TicketData tickets={ongoingtickets}/>
                </Box>
            </Box>
        </Box>
        <Banner onClick={onClick} textButton={'Inventory'} />
        <Dialog open={open} onClose={handleClose}>
            <AppointmentPopUp onClick={handleClose}/>
        </Dialog>
    </Box>
    );
}
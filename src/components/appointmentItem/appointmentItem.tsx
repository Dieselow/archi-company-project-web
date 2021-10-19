import React from 'react';
import { Button, Typography, Box , Dialog} from '@material-ui/core';
import { useStyles } from './appointmentItem.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { PrescriptionPopUp, Prescription } from '../popUp/prescriptionPopUp/prescriptionPopUp';


export type Appointment = {
    date: string;
    data: string;
}

type Props = {
    appointment: Appointment
}

export const AppointmentItem = (props: Props) => {
    const [openPrescription, setOpenPrescritpion] = React.useState<boolean>(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const onClickAccess = () => {
        setOpenPrescritpion(true);
    }
    const onClose = () => {
        setOpenPrescritpion(false);
    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.appointment.date}
        </Typography>
        <CustomButton text={'Access prescription'} onClick={onClickAccess} style={button} />
        <Dialog open={openPrescription}>
            <PrescriptionPopUp prescription={{
                date:props.appointment.date,
                data:props.appointment.data
            }} onClickClose={onClose} />
        </Dialog>
    </Box>
    );
}
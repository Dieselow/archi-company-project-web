import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './caregiverPatientItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { HealthFilePopUp } from '../caregiverPatientFilePopUp/caregiverPatientFilePopUp';
import { CreateHealthFilePopUp } from '../../popUp/createHealthPopUp/createHealthPopUp';
import { bearerToken } from '../../login/login';
import axios from 'axios';
import { api } from '../../../utils/api/api';
import { HealthFile } from '../../popUp/healthFilePopUp/healthFilePopUp';
import { Details, details } from '../../login/login';

export type Patient = {
    lastname: string;
    firstname: string;
    healthfile: string;
}

type Props = {
    patient: Details,
    id: number,
}

export const PatientItem = (props: Props) => {
    const styleProps = {
    }
    const [open, setOpen] = React.useState(false);
    const [openCreate, setOpenCreate] = React.useState(false);
    const classes = useStyles(styleProps);

    const onClickAccessHealthFile = () => {
        setOpen(true);
    }

    const onClickCreatehealthFile = () => {
        setOpenCreate(true);
    }

    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }

    const onClickCreate = (value: any) => {
        console.log(value);
        createHealthFile(value);
        setOpenCreate(false);
    }

    const onClickClose = () => {
        setOpenCreate(false);
    }

    const createHealthFile = (value: HealthFile) => {
        axios.post(api.healthfile.create + props.id,
            {
                emergencyContact: value.emergencyContact,
                medications: value.medications,
                chronicConditions: value.chronicConditions,
            },
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log(response);
            }).catch((reason: any) => {
                console.log(reason);
            })
    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.patient.firstName}
        </Typography>
        <CustomButton text={'Access patient file'} onClick={onClickAccessHealthFile} style={button} />
        <CustomButton text={'Create health file'} onClick={onClickCreatehealthFile} style={button} />
        <Dialog open={open} onClose={handleClose}>
            <HealthFilePopUp onClick={handleClose} />
        </Dialog>
        <Dialog open={openCreate}>
            <CreateHealthFilePopUp onClickClose={onClickClose} onClickCreate={onClickCreate} />
        </Dialog>
    </Box>
    );
}

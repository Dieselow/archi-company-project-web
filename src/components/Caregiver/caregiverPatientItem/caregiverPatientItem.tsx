import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './caregiverPatientItem.style';
import { CustomButton } from '../../customButton/customButton';
import { listButton } from '../../../utils/customButton/customButtonHelper';
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
    const [healthFile, setHealthFile] = React.useState<HealthFile>(props.patient.healthFile);
    const [isEmpty, setIsEmpty] = React.useState<boolean>(props.patient.healthFile === null);
    const classes = useStyles(styleProps);

    const onClickAccessHealthFile = () => {
        setOpen(true);
    }

    const onClickCreatehealthFile = () => {
        setOpenCreate(true);
    }

    const handleClose = (value: any) => {
        console.log(value);
        updateHealthFile(value);
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

    const onClickDelete = () => {
        deleteHealthFile();
    }

    const updateHealthFile = (value: HealthFile) => {
        axios.put(api.healthfile.update + props.id,
            {
                emergencyContact: value.emergencyContact,
                medications: value.medications,
                chronicConditions: value.chronicConditions,
                id: props.patient.healthFile.id,
            },
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log(response);
                setHealthFile(props.patient.healthFile);
            }).catch((reason: any) => {
                console.log(reason);
            })
    }

    const deleteHealthFile = () => {
        axios.delete(api.healthfile.delete + props.patient.healthFile.id,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log(response);
                setHealthFile(props.patient.healthFile);
                setIsEmpty(true);
            }).catch((reason: any) => {
                console.log(reason);
            })
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
                setHealthFile(props.patient.healthFile);
                setIsEmpty(false);
            }).catch((reason: any) => {
                console.log(reason);
            })
    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            - {props.patient.firstName}
        </Typography>
        { isEmpty ? 
        <CustomButton text={'Create health file'} onClick={onClickCreatehealthFile} style={listButton} /> :        
        <CustomButton text={'Access patient file'} onClick={onClickAccessHealthFile} style={listButton} />}       
        <CustomButton text={'Delete health file'} onClick={onClickDelete} style={listButton} />
        <Dialog open={open} onClose={handleClose}>
            <HealthFilePopUp onClick={handleClose} healthFile={healthFile}/>
        </Dialog>
        <Dialog open={openCreate}>
            <CreateHealthFilePopUp onClickClose={onClickClose} onClickCreate={onClickCreate} />
        </Dialog>
    </Box>
    );
}

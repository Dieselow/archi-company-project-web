import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudPatient.style';
import { Banner } from '../../banner/banner';
import { PersonalData } from '../../personalData/personalData';
import { AppointmentData, Appointment } from '../../appointmentData/appointmentData';
import { AppointmentPopUp } from '../../popUp/appointmentPopUp/appointmentPopUp';
import { EditPopUp } from '../../popUp/editPopUp/editPopUp';
import { HealthFilePopUp } from '../../popUp/healthFilePopUp/healthFilePopUp';
import { useHistory } from 'react-router-dom';
import { api, getUpdate } from '../../../utils/api/api';
import { bearerToken } from '../../login/login';
import { Details, details } from '../../login/login';
import { CustomButton } from '../../customButton/customButton';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { HealthFile } from '../../popUp/healthFilePopUp/healthFilePopUp';
import axios from 'axios';

const appointments: Appointment[] = [
    {
        date: 'Lundi',
        data: 'test',
    },
    {
        date: 'Mardi',
        data: 'test2',
    }
]

type Props = {
}


export const CrudPatient = (props: Props) => {
    console.log(details);
    console.log(details.firstName);
    const [openEdit, setEdit] = React.useState(false);
    const [openHealthFile, setOpenHealthFile] = React.useState(false);
    const history = useHistory();
    const styleProps = {
    }
    const classes = useStyles(styleProps);
    const onClickLogOut = () => {
        history.push('/');
    }

    const onClickEdit = () => {
        setEdit(true);
    }
    const onClickEditClose = () => {
        setEdit(false);
    }
    const onClickHealthFileClose = () => {
        setOpenHealthFile(false);
    }
    const onClickHealthFile = () => {
        setOpenHealthFile(true);
    }
    const handleCloseEdit = (value: any) => {
        console.log(value);
        details.address = value.address;
        details.phoneNumber = value.phone;
        console.log(getUpdate('patient') + details.id.toString());
        console.log(bearerToken);
        console.log(
            {
                "id": details.id,
                "username": details.username,
                "firstName": details.firstName,
                "lastName": details.lastName,
                "password": details.password,
                "email": details.email,
                "dateOfBirth": details.dateOfBirth,
                "address": details.address,
                "phoneNumber": details.phoneNumber,
                "primaryDoctor": details.primaryDoctor,
                "roles": details.roles,
            })
        axios.put(getUpdate('patient') + details.id.toString(),
            {
                "id": details.id,
                "username": details.username,
                "firstName": details.firstName,
                "lastName": details.lastName,
                "password": details.password,
                "email": details.email,
                "dateOfBirth": details.dateOfBirth,
                "address": details.address,
                "phoneNumber": details.phoneNumber,
                "primaryDoctor": details.primaryDoctor,
                "roles": details.roles,
            },
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).
            then((response: any) => {
                alert(details.firstName + ' updated');
                console.log(response);
            }).catch((reason: any) => {
                alert(reason);
            });

        setEdit(false);
    }

    return (<Box className={classes.box}>
        <Banner onClick={onClickLogOut} textTypography={'Hello ' + details.firstName + '.'} textButton={'Log out'} />

        <Box className={classes.background}>
            {/* <CustomButton text={'My health file'} onClick={onClickHealthFile} style={titleButton} /> */}
            <Box className={classes.content}>
                <Box className={classes.personalData}>
                    <PersonalData onClick={onClickEdit} patient={details} />
                </Box>
            </Box>
        </Box>

        <Dialog open={openEdit}>
            <EditPopUp onClick={handleCloseEdit} onClickClose={onClickEditClose} />
        </Dialog>

        <Dialog open={openHealthFile}>
            <HealthFilePopUp onClickClose={onClickHealthFileClose} healthFile={details.healthFile}/>
        </Dialog>
    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box, Dialog, useScrollTrigger } from '@material-ui/core';
import { useStyles } from './userData.style';
import { UserItem } from '../userItem/userItem';
import { Details, bearerToken } from '../../login/login';
import { api } from '../../../utils/api/api';
import axios from 'axios';
import { ListForm } from '../../popUp/appointmentPopUp/appointmentPopUp';

type Props = {
}

export const UserData = (props: Props) => {
    const [patients, setPatients] = React.useState<Details[]>([]);
    const [caregivers, setCaregivers] = React.useState<ListForm[]>([]);
    const [open, setOpen] = React.useState(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const getAllUsers = () => {
        console.log('get all users');
        axios.get(api.patients, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            setPatients(response.data);
        }).catch((reason: any) => {
            console.log(reason);
        })
    }
    const getAllCaregivers = () => {
        console.log('get all caregivers');
        axios.get(api.caregivers, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            const data = response.data;
            var tmp : ListForm[]= [];
            data.map((x:Details) => tmp.push({
                value: x.lastName,
                id : x.id.toString(),
            }))
            if ( tmp != null)
            {
                setCaregivers(tmp);
            }
        }).catch((reason: any) => {
            console.log(reason);
        })
    }

    if (patients.length === 0){
        getAllUsers();
    }
    if (caregivers.length === 0){
        getAllCaregivers();
    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Patient list</Typography>
        <Box className={classes.list}>
            {patients?.map(x => <UserItem user={x} list={caregivers} listPatient={patients} setListPatients={setPatients}/>)}
        </Box>
    </Box>
    );
}

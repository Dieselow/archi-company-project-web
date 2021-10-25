import React from 'react';
import { Button, Typography, Box, Dialog, useScrollTrigger } from '@material-ui/core';
import { useStyles } from './userData.style';
import { UserItem } from '../userItem/userItem';
import { Details, bearerToken } from '../../login/login';
import { api } from '../../../utils/api/api';
import axios from 'axios';

var patients: Details[] = [];

const getAllUsers = () => {
    axios.get(api.patients, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then((response: any) => {
        console.log(response.data);
        patients = response.data;
    }).catch((reason: any) => {
        console.log(reason);
    })
}

type Props = {
}

const onClick = (variable: any) => {
    console.log('on click !');
}

const onClickCreate = () => {

}
getAllUsers();


export const UserData = (props: Props) => {

    const [open, setOpen] = React.useState(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);
    console.log(patients);
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
        <Box className={classes.list}>
            {patients.map(x => <UserItem user={x} />)}
        </Box>
    </Box>
    );
}

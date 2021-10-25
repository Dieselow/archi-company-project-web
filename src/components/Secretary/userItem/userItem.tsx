import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './userItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken } from '../../login/login';

export type User= {
    username: string,
	firstName: string,
	lastName: string,
	password: string,
	email: string,
	dateOfBirth : string,
	address: string,
	phoneNumber: string,
}

type Props = {
    user: User
}

const onClickDelete = () => {

}

const onClickUpdate = () => {

}

var details : User = {
    address: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    username: '',
}

var userlist : User[];


export const UserItem = (props: Props) => {
    const styleProps = {
    }
    const getAllPatients = () => {
        axios.get(api.getpatient,
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    userlist = response.data;
                    console.log(details);
                }).catch((reason: any) => {
                    console.log(reason);
                });

    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.user.lastName}, 
            {props.user.firstName}
        </Typography>
        <CustomButton text={'Edit'} onClick={onClickUpdate} style={button}/>
        <CustomButton text={'Delete'} onClick={onClickDelete} style={button}/>
    </Box>
    );
}
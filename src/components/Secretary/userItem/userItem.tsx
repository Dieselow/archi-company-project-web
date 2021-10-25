import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './userItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken } from '../../login/login';
import { EditUserPopUp } from '../editUserPopUp/editUserPopUp';

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
    const [open, setOpen] = React.useState(false);
    const styleProps = {
    }

    const onClickUpdate = () => {
        console.log('on click !');
        setOpen(true);
    }

    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
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
            <Dialog open={open} onClose={handleClose}>
                <EditUserPopUp onClick={onClickUpdate} />
            </Dialog>

        <CustomButton text={'Delete'} onClick={onClickDelete} style={button}/>
    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './userItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';
import { EditUserPopUp } from '../editUserPopUp/editUserPopUp';
import { ListForm } from '../../popUp/appointmentPopUp/appointmentPopUp';

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
    user: User,
    list: ListForm[]
}

var userlist : User[];




export const UserItem = (props: Props) => {
    console.log('UserItem')
    const [open, setOpen] = React.useState(false);
    const styleProps = {
    }

    const onClickOpenUpdate = () => {
        console.log('on click !');
        setOpen(true);
    }

    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }

    const onClickUpdate = (value: any) => {
        details.address=value.address;
        details.primaryDoctor=value.primaryDoctor;
        postUpdate(details);
        console.log('on click !');
        setOpen(true);
    }


    const onClickDelete = () => {
        console.log('Delete'); 
        console.log(details.id);
        console.log(api.delete.patient + details.id.toString());
        axios.delete(api.delete.patient + details.id.toString(),
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).
            then((response: any) => {
                alert(details.firstName + ' deleted');
                console.log(response);
            }).catch((reason: any) => {
                alert(reason);
            });
    }

    const postUpdate= (patient: Details) => {
        axios.put(api.update.patient+details.id, patient,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log('Updated at: '+response.data.Updated);
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
        <CustomButton text={'Edit'} onClick={onClickOpenUpdate} style={button}/>
            <Dialog open={open} onClose={handleClose}>
                <EditUserPopUp list={props.list} onClick={onClickUpdate} />
            </Dialog>
        <CustomButton text={'Delete'} onClick={onClickDelete} style={button}/>
    </Box>
    );
}
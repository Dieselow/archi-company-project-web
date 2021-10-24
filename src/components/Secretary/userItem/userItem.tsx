import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './userItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';

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
export const UserItem = (props: Props) => {
    const styleProps = {
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
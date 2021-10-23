import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './userItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';

export type User= {
    firstname: string;
    lastname: string;
    adress: string;
    phoneNumber: string;
    email: string;
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
            {props.user.lastname}, 
            {props.user.firstname}
        </Typography>
        <CustomButton text={'Edit'} onClick={onClickUpdate} style={button}/>
        <CustomButton text={'Delete'} onClick={onClickDelete} style={button}/>
    </Box>
    );
}
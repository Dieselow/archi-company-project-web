import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './userItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken } from '../../login/login';
import { Details } from '../../login/login';

type Props = {
    user: Details
}

const onClickDelete = () => {

}

const onClickUpdate = () => {

}


export const UserItem = (props: Props) => {
    console.log('users :' + props.user);
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
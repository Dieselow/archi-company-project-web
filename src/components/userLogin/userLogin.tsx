import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { useStyles } from './userLogin.style';
import { Register } from '../register/register';
import { Login } from '../login/login';
import { CustomButton } from '../customButton/customButton';
import { subButton } from '../../utils/customButton/customButtonHelper';

export type UserType = 'patient' | 'caregiver' | 'secretary';

type Props = {
    type : UserType;
}

export const UserLogin = (props: Props) => {
    const [isLogin, setIsLogin] = React.useState<boolean>(true);
    const styleProps = {
    }
    const classes = useStyles(styleProps);


    const onChangeLogin = () => {
        setIsLogin(!isLogin);
    }
    
    return (
        <Box className={classes.box}>
            {isLogin ? <Login type={props.type}/> : <Register type={props.type}/>}
            
            <CustomButton onClick={onChangeLogin} text={isLogin ? 'New account' : 'Member'} style={subButton}/>
        </Box>
    );
}
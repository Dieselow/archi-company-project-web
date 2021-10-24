import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Switch } from '@material-ui/core';
import { Register } from '../register/register';
import { bearerToken, Details, Login } from '../login/login';
import { CustomButton } from '../customButton/customButton';
import { subButton } from '../../utils/customButton/customButtonHelper';
import { UserType } from '../userLogin/userLogin';
import { useStyles } from './userinfo.style';
import { Banner } from '../banner/banner';
import axios from 'axios';
import { api } from '../../utils/api/api';
import { userType } from '../header/header';
import { PersonalData } from '../personalData/personalData';
import { info } from 'console';


type Props = {
    userType : UserType;
}


const onClick = (variable: any) => {
    console.log('on click !');
}



export const UserInfo = (props: Props) => {

    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const [infos, setInfos] = React.useState<Details>({
        firstName : "loading",
        address: '',
        dateOfBirth: '',
        email: '',
        healthFile: '',
        id : 0,
        lastName: '',
        password: '',
        phoneNumber: '',
        roles : [],
        username: ''});

    const [fetched, setFetched] = React.useState(false);
    
    const { search } = window.location;

    const userId = new URLSearchParams(search).get('id');
    const root = new URLSearchParams(search).get('root') || "";
    if (!fetched){
        axios.get(root, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            setFetched(true);
            setInfos(response.data);
            console.log("Read " +infos.firstName);
        });
    }
    console.log("CREATE");
    console.log("created " +infos.firstName);
    
    function RenderAdditionalInfo() {
        switch(props.userType){
            case 'caregiver':
                return (<div><Typography className={classes.typography}>
                            licenceNumber : {infos.licenceNumber}
                        </Typography>
                        {infos.patients != null ? infos.patients.map(patient => 
                        (<Typography className={classes.typography}>
                            Patient : {patient.firstName + " " + patient.lastName}
                         </Typography>)) : null}
                        </div>); 
            default:
                return null;

        }
    }

    return (
        <Box className={classes.box}>
        <Banner onClick={onClick} textTypography={'Info from ' + infos.firstName + " " + infos.lastName + '.'} textButton={'Log out' } searchBar={true} />

        <Box className={classes.background}>
            <Box className={classes.content}>
                <Box className={classes.personalData}>
                    <PersonalData patient={infos} />
                    {RenderAdditionalInfo()}
                </Box>
            </Box>
        </Box>
    </Box>
    );
}
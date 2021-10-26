import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Switch } from '@material-ui/core';
import { Register } from '../register/register';
import { bearerToken, Details, Login } from '../login/login';
import { CustomButton } from '../customButton/customButton';
import { subButton } from '../../utils/customButton/customButtonHelper';
import { UserType } from '../userLogin/userLogin';
import { useStyles } from './roomInfo.style';
import { Banner } from '../banner/banner';
import axios from 'axios';
import { api } from '../../utils/api/api';
import { userType } from '../header/header';
import { PersonalData } from '../personalData/personalData';
import { info } from 'console';
import { useHistory } from 'react-router-dom';


type Props = {
}
type EquipmentType = {
    id : number,
    name : string,
}

type Equipment = {
    id : number,
    installationDate : Date,
    equipmentType : EquipmentType
}

type Room = {
    id : number,
    name: string,
    equipments : Array<Equipment>
}







export const RoomInfo = (props: Props) => {

    const styleProps = {
    }
    const classes = useStyles(styleProps);
    const [bearerType, setBearerType] = React.useState('');

    let history = useHistory();

    const HandleRoute = () => {
        history.push('/'+ bearerType);
    }

    axios.get(api.getUserType, {
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    }).then((response: any) => {
        setBearerType(response.data);
    });

    const [infos, setInfos] = React.useState<Room>({
        id : 0,
        name: 'Loading',
        equipments : []});

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
            console.log("Read " +infos.name);
        });
    }
    console.log("CREATE");
    console.log("created " +infos.name);

    return (
        <Box className={classes.box}>
        <Banner onClick={HandleRoute} textTypography={'Info from ' + infos.name + '.'} textButton={'Main Menu' } searchBar={true} />

        <Box className={classes.background}>
            <Box className={classes.content}>
                <Box className={classes.personalData}>
                        <Typography className={classes.typography}>
                           Equipments
                        </Typography>
                        {infos.equipments != null ? infos.equipments.map(equipment => 
                        (<Typography className={classes.typography}>
                            Equipement : {equipment.equipmentType.name + " Installed on " + equipment.installationDate.toString()}
                         </Typography>)) : null}
                </Box>
            </Box>
        </Box>
    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './secretaryEquipmentItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { isPropertySignature } from 'typescript';
import { api, getDetails } from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';
import { Equipment } from '../secretaryEquipmentData/secretaryEquipmentData';

type Props = {
    equipment: Equipment
}


let date: Date = new Date();

export const EquipmentItem = (props: Props) => {
    const [date, setDate] = React.useState<string>(props.equipment.installationDate.toString());
    const styleProps = {
    }
    
    const onClickDelete = () => {
        console.log('Delete');
        console.log(props.equipment.equipmentType.id);
        // @ts-ignore
        console.log(api.equipment.delete + props.equipment.id.toString());
        // @ts-ignore
        axios.delete(api.equipment.delete + props.equipment.id.toString(),
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).
            then((response: any) => {
                console.log(response);
            }).catch((reason: any) => {
                alert(reason);
            });
    }

    const classes = useStyles(styleProps);
    const onClickUpdate = (date: any) => {
        props.equipment.installationDate = date.toLocaleString();
        // @ts-ignore
        axios.put(api.equipment.update,
            {
                "equipmentType":
                {
                    "name": props.equipment.equipmentType.name,
                    'id' : props.equipment.equipmentType.id
                },
                "installationDate": date.toLocaleString(),
                "id": props.equipment.id,
                "room": {
                    "name": "Salle 1",
                    "equipments": [],
                    "id": 50
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).
            then((response: any) => {
                setDate(date.toLocaleString());
                console.log(response);
            }).catch((reason: any) => {
                alert(reason);
            });

    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.equipment.equipmentType.name}, Installed on:
            {date}
        </Typography>
        <CustomButton text={'Edit'} onClick={() => onClickUpdate(date)} style={button} />
        <CustomButton text={'Delete'} onClick={onClickDelete} style={button} />
    </Box>
    );
}

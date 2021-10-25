import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './secretaryEquipmentItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { isPropertySignature } from 'typescript';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';
import { Equipment } from '../secretaryEquipmentData/secretaryEquipmentData';

type Props = {
    equipment: Equipment
}


let date: Date = new Date();

export const EquipmentItem = (props: Props) => {
    const styleProps = {
    }

    const getAllEquipments = () => {
        axios.get(api.equipment.view,
                {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
                    }
                }).then((response: any) => {
                    console.log(details);
                }).catch((reason: any) => {
                    console.log(reason);
                });
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
                alert(details.firstName + ' deleted');
                console.log(response);
            }).catch((reason: any) => {
                alert(reason);
            });
    }


    const classes = useStyles(styleProps);
    const onClickUpdate = (date: any) => {
        props.equipment.installationDate=date.toString();

    }

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.equipment.equipmentType.name}, Installed on:
            {props.equipment.installationDate}
        </Typography>
        <CustomButton text={'Edit Equipment'} onClick={() => onClickUpdate(date)} style={button} />
        <CustomButton text={'Delete Equipment'} onClick={onClickDelete} style={button}/>
    </Box>
    );
}

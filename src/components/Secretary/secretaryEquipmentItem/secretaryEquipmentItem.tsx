import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './secretaryEquipmentItem.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { isPropertySignature } from 'typescript';

export type Equipment = {
    name: string;
    installationDate: string;
    id: string;
}

type Props = {
    equipment: Equipment
}

const onClickDelete = () => {

}

let date: Date = new Date();

export const EquipmentItem = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);
    const onClickUpdate = (date: any) => {
        props.equipment.installationDate=date.toString();

    }
    return (<Box className={classes.box}>
        <Typography className={classes.typography}>
            {props.equipment.name}, Installed on:
            {props.equipment.installationDate}
        </Typography>
        <CustomButton text={'Edit Equipment'} onClick={() => onClickUpdate(date)} style={button} />
        <CustomButton text={'Delete Equipment'} onClick={onClickDelete} style={button}/>
    </Box>
    );
}
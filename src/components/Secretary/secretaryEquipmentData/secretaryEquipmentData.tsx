import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './secretaryEquipmentData.style';
import { CustomButton } from '../../customButton/customButton';
import { EquipmentItem } from '../secretaryEquipmentItem/secretaryEquipmentItem';
import { button } from '../../../utils/customButton/customButtonHelper';
import { AddEquipmentPopUp } from '../addEquipmentPopUp/addEquipmentPopUp';

export type Equipment = {
    name: string;
    installationDate: string;
    id: string;
}

type Props = {
    equipments : Equipment[]
}

const getAllEquipments = () => {

}


export const EquipmentData = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    const onClickAdd = (value: any) => {
        console.log(value)
        
    }
    const onClick = () => {
        setOpen(true);
    }
    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }
    
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Equipment List</Typography>
        
        <Box>
        <CustomButton text={'Add Equipment'} onClick={onClick} style={button}/>
        <Dialog open={open} onClose={handleClose}>
                <AddEquipmentPopUp onClick={onClickAdd} />
            </Dialog>
            {props.equipments.map(x => <EquipmentItem equipment={x}/>)}
        </Box>
    </Box>
    );
}

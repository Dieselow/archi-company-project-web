import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './secretaryEquipmentData.style';
import { CustomButton } from '../../customButton/customButton';
import { EquipmentItem } from '../secretaryEquipmentItem/secretaryEquipmentItem';
import { button } from '../../../utils/customButton/customButtonHelper';
import { AddEquipmentPopUp } from '../addEquipmentPopUp/addEquipmentPopUp';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';



export type Equipment = { equipmentType : 
{
name: string,
   id: number
   },
installationDate:Date
}

var equipments : Equipment[]

type Props = { equipments: Equipment[]
}

const getAllEquipments = () => {
    axios.get(api.equipment.view,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log(details);
                equipments=response.data;
            }).catch((reason: any) => {
                console.log(reason);
            });
}


export const EquipmentData = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    const onClickAdd = (value: any) => {
        console.log(value)
        
    }
    const onClickCreate = () => {
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
        <CustomButton text={'Add Equipment'} onClick={onClickCreate} style={button}/>
        <Dialog open={open} onClose={handleClose}>
                <AddEquipmentPopUp onClick={onClickAdd} />
            </Dialog>
            {/* {equipments.map(x => <EquipmentItem equipment={x}/>)} */}
        </Box>
    </Box>
    );
}

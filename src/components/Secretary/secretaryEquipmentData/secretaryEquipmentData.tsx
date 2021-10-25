import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './secretaryEquipmentData.style';
import { CustomButton } from '../../customButton/customButton';
import { EquipmentItem } from '../secretaryEquipmentItem/secretaryEquipmentItem';
import { button } from '../../../utils/customButton/customButtonHelper';
import { AddEquipmentPopUp } from '../addEquipmentPopUp/addEquipmentPopUp';
import { api, getDetails } from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details, details } from '../../login/login';

export type Equipment = {
    id?: number
    equipmentType:
    {
        name: string,
        id?: number
    },
    installationDate: string
}

var equipment: Equipment = {
    equipmentType: {
        name: '',
        id: 0
    },
    installationDate: ''
}

var equipments: Equipment[]

type Props = {
    equipments: Equipment[]
}

const getAllEquipments = () => {
    axios.get(api.equipment.view,
        {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            console.log(details);
            equipments = response.data;
        }).catch((reason: any) => {
            console.log(reason);
        });
}

const gellAllRooms = () => {
    console.log('rooms');
    axios.get(api.rooms.rooms,
        {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response: any) => {
            console.log(response);
        }).catch((reason: any) => {
            console.log(reason);
        });
}

gellAllRooms();

export const EquipmentData = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    const onClickAdd = () => {
        console.log('on click')
        setOpen(true);
    }

    const postCreate = (equipment: Equipment, roomId: String) => {
        axios.post(api.equipment.create + roomId, equipment,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                console.log('Created at: ' + response.data);
            }).catch((reason: any) => {
                console.log(reason);
            });
    }

    const onClickCreate = (value: any) => {
        console.log(value);
        console.log(equipment);
        equipment.equipmentType.name = value.equipmentType.name;
        equipment.equipmentType.id = undefined;
        equipment.installationDate = value.installationDate;
        postCreate(equipment,value.equipmentType.id);
        console.log('Created equipment');
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
            <CustomButton text={'Add Equipment'} onClick={onClickAdd} style={button} />
            <Dialog open={open} onClose={handleClose}>
                <AddEquipmentPopUp onClick={onClickCreate} />
            </Dialog>
            {/* {equipments.map(x => <EquipmentItem equipment={x}/>)} */}
        </Box>
    </Box>
    );
}

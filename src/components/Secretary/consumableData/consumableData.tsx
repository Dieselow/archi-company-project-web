import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './consumableData.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Consumable, ConsumableItem } from '../consumableItem/consumableItem';
import { api, getDetails } from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details } from '../../login/login';
import { AddConsumablePopUp } from '../addConsumablePopUp/addConsumablePopUp';



type Props = {

}

var consumable: Consumable = {
    quantity: '',
    threshold: '',
    consumableType: {
        id: ''
    },
}


export const ConsumableData = (props: Props) => {
    const [consumables, setConsumables] = React.useState<Consumable[]>([]);
    const [open, setOpen] = React.useState(false);

    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const getAllConsumables = () => {
        axios.get(api.consumable.viewall,
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }).then((response: any) => {
                setConsumables(response.data);
            }).catch((reason: any) => {
                console.log(reason);
            });
    }
    const postCreate = (consumable: Consumable) => {
        axios.post(api.consumableType.create, {
            name: 'te2s1t',
            brand: 'tes12t',
        },
            {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            }
        ).then((response: any) => {
            console.log(response.data);
            consumable.consumableType.id = response.data.id;
        }).catch((reason: any) => {
            console.log(reason);
        });        
        axios.post(api.consumable.create, consumable,
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
        consumable.threshold = value.treshold;
        consumable.quantity = value.quantity;
        postCreate(consumable);
        console.log('on click !');
        setOpen(true);
    }

    const onClickCreateOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Ongoing Tickets</Typography>
        <Box>
            <CustomButton text={'Create a new consumable'} onClick={onClickCreateOpen} style={button} />
            <Dialog open={open} onClose={handleClose}>
                <AddConsumablePopUp onClick={onClickCreate} />
            </Dialog>
            {consumables.map(x => <ConsumableItem consumable={x} />)}
        </Box>
    </Box>
    );
}
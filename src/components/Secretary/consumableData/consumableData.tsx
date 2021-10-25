import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './consumableData.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Consumable, ConsumableItem } from '../consumableItem/consumableItem';
import { api, getDetails} from '../../../utils/api/api';
import axios from 'axios';
import { bearerToken, Details } from '../../login/login';



type Props = {

}

const onClickCreate = () => {

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


    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Ongoing Tickets</Typography>
        <Box>
            <CustomButton text={'Create a new consumable'} onClick={onClickCreate} style={button}/>
            {consumables.map(x => <ConsumableItem consumable={x}/>)}
        </Box>
    </Box>
    );
}
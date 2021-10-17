import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './ticketData.style';
import { CustomButton } from '../customButton/customButton';
import { TicketItem } from '../ticketItem/ticketItem';
import { button } from '../../utils/customButton/customButtonHelper';

export type Ticket = {
    name: string;
    data: string;
}

type Props = {
    tickets : Ticket[]
}

const onClickCreate = () => {

}

export const TicketData = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>Ongoing Tickets</Typography>
        <Box>
            <CustomButton text={'Create a new ticket'} onClick={onClickCreate} style={button}/>
            {props.tickets.map(x => <TicketItem ticket={x}/>)}
        </Box>
    </Box>
    );
}
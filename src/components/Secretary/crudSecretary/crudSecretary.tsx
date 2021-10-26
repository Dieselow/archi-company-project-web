import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudSecretary.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { TicketData } from '../ticketData/ticketData';
import { Ticket } from '../ticketItem/ticketItem';
import { UserData } from '../userData/userData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { InformationPopUp } from '../secretaryInformationPopUp/secretaryInformationPopUp';
import { EquipmentData, Equipment } from '../secretaryEquipmentData/secretaryEquipmentData';
import { Details, details } from '../../login/login';

const equipmentlist : Equipment[] = [
    {
        name : 'Scanner',
        installationDate: '10-10-2018',
        id: '1',
    },
    {
        name : 'Brancard',
        installationDate: '01-02-2021',
        id:'2',
    }
]

const ongoingtickets : Ticket[] = [
    {
        requestDate : 'Order 10254',
        consumables: '2 compresses, 5 ciseaux, 3 seringues',
    },
    {
        requestDate : 'Order 21181',
        consumables: '10 dolipranes',
    }
]

type Props = {
}

const onClick = (variable: any) => {
    console.log('on click !');
}

export const CrudSecretary = (props: Props) => {
  const [open, setOpen] = React.useState(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    const onClickCustom = () => {
        console.log('on click !');
        setOpen(true);
    }
    const handleClose = (value: string) => {
        console.log(value);
        setOpen(false);
    }
    return (<Box className={classes.box}>
        <Banner onClick={onClick} textTypography={'Hello ' + details.firstName +'.'} textButton={'Log out' } searchBar={true} />

        <Box className={classes.background}>
        <CustomButton text={'My info'} onClick={onClickCustom} style={titleButton}/>
            <Dialog open={open} onClose={handleClose}>
                <InformationPopUp onClick={onClickCustom} secretary={details}/>
            </Dialog>
            <Box className={classes.content}>
                <Box className={classes.users}>
                    <UserData/>
                </Box>
                <Box className={classes.equipments}>
                    <EquipmentData equipments={equipmentlist}/>
                </Box>
                <Box className={classes.tickets}>
                    <TicketData tickets={ongoingtickets}/>
                </Box>
            </Box>
        </Box>
    </Box>
    );
}
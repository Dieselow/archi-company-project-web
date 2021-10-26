import React from 'react';
import { Button, Typography, Box, Dialog } from '@material-ui/core';
import { useStyles } from './crudSecretary.style';
import { Banner } from '../../banner/banner';
import { CustomButton } from '../../customButton/customButton';
import { ConsumableData } from '../consumableData/consumableData';
import { Consumable } from '../consumableItem/consumableItem';
import { UserData } from '../userData/userData';
import { titleButton } from '../../../utils/customButton/customButtonHelper';
import { InformationPopUp } from '../secretaryInformationPopUp/secretaryInformationPopUp';
import { EquipmentData, Equipment } from '../secretaryEquipmentData/secretaryEquipmentData';
import { Details, details } from '../../login/login';
import { useHistory } from 'react-router-dom';

const equipmentlist : Equipment[] = []

const consumablelist : Consumable[] = []

type Props = {
}


    



export const CrudSecretary = (props: Props) => {
  const [open, setOpen] = React.useState(false);
    const styleProps = {
    }
    const classes = useStyles(styleProps);
    let history = useHistory();
    const onClick = () => {
        
        history.push('/'+ 'secretary');
    }

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
                    <ConsumableData/>
                </Box>
            </Box>
        </Box>
    </Box>
    );
}
import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverData.style';
import { CustomButton } from '../customButton/customButton';
import { button } from '../../utils/customButton/customButtonHelper';
import { Caregiver } from '../crudCaregiver/crudCaregiver';

type Props = {
    onClick: () => void;
    caregiver: Caregiver;
}

export const CaregiverData = (props: Props) => {
    const caregiver = props.caregiver;
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box >
        <Box className={classes.box}>
        <Typography className={classes.titleTypography}>
            My info
        </Typography>
        <CustomButton text={'Edit'} onClick={props.onClick} style={button}/>
        </Box>
        <Typography className={classes.typography}>
            address : {caregiver.adress}
        </Typography>
        <Typography className={classes.typography}>
            phone number : {caregiver.phoneNumber}
        </Typography>
        <Typography className={classes.typography}>
            email : {caregiver.email}
        </Typography>
        <Typography className={classes.typography}>
            Employment Date : {caregiver.employmentdate}
        </Typography>
    </Box>
    );
}
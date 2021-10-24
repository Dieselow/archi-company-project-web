import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './crudManager.style';
import { UserType } from '../../userLogin/userLogin';
import { CrudPatient } from '../crudPatient/crudPatient';
import { details } from '../../login/login';

type Props = {
    userType: UserType;    
}

export const CustomForm = (props: Props) => {
    const classes = useStyles();

    const renderSwitch = () => {
        switch (props.userType) {
            case 'patient':
                return <CrudPatient/>
                break;

            case 'caregiver':
                return <h1>crud caregiver</h1>
                break;

            case 'secretary':
                return <h1>crud secretary</h1>
                break;
        }
    }

    return (
        <Box>
            {renderSwitch()}
        </Box>
    );
}


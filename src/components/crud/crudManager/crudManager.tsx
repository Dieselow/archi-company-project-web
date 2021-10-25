import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './crudManager.style';
import { UserType } from '../../userLogin/userLogin';
import { CrudPatient } from '../crudPatient/crudPatient';
import { details } from '../../login/login';
import { CrudCaregiver } from '../../Caregiver/crudCaregiver/crudCaregiver';
import { CrudSecretary } from '../../Secretary/crudSecretary/crudSecretary';

type Props = {
    userType: UserType;
}

export const CrudManager = (props: Props) => {
    const classes = useStyles();
    const renderSwitch = () => {
        console.log(props.userType);
        switch (props.userType) {
            case 'patient':
                return <CrudPatient />
                break;

            case 'caregiver':
                return <CrudCaregiver />
                break;

            case 'secretary':
                return <CrudSecretary />
                break;
        }
    }

    return (
        <Box>
            {renderSwitch()}
        </Box>
    );
}


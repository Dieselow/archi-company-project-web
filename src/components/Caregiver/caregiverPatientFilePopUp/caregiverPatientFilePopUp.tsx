import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './caregiverPatientFilePopUp.style';
import { CustomButton } from '../../customButton/customButton';
import { button } from '../../../utils/customButton/customButtonHelper';
import { Login } from '../../login/login';
import { CustomForm } from '../../customForm/customForm';
import { subButton } from '../../../utils/customButton/customButtonHelper';
import { formPopUp } from '../../../utils/customForm/customFormHelper';
import { UserType } from '../../userLogin/userLogin';

type Props = {
    onClick: (value: any) => void;
}

export type Treatment = {
    name: string;
}

const getCaregivers = () => {

}

export type HealthFile = {
    name: string;
    condition: string;
}

export type ListForm = {
    value: string;
}

export const HealthFilePopUp = (props: Props) => {
    const [name, setName] = React.useState<string>('');
    const [condition, setCondition] = React.useState<string>();
    const styleProps = {
    }

    const classes = useStyles(styleProps);

    const onChangeName = (name: string) => {
        console.log(name);
        setName(name);
    }


    const onChangeCondition = (condition: string) => {
        console.log(condition);
        setCondition(condition);
    }
    return (<Box className={classes.box}>

        <Typography className={classes.typography}>
            Create a Health File
        </Typography>

        <CustomForm text={'Patient name'} style={formPopUp} onChange={onChangeName} formType={'textfield'} />

        <CustomForm text={'Enter the condition'} style={formPopUp} onChange={onChangeCondition} formType={'textfield'} />

        <CustomButton text='Create' onClick={() => props.onClick(
            {
                name: name,
                condition : condition,
            }
        )} style={button} />
    </Box>
    );
}
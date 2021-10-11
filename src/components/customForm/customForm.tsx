import React from 'react';
import { TextField, Typography, Box } from '@material-ui/core';
import { useStyles } from './customForm.style';

export type Style = {
    backgroundColor: string;
    color: string;
    fontSize: number;
    margin: number;
    fontFamily : string;
}

type Props = {
    text: string;
    onChange: (value: string) => void;
    style: Style;
}

export const CustomForm = (props: Props) => {
    const classes = useStyles(props.style);

    return (
        <Box>
            <Typography className={classes.typography}>
                {props.text}
            </Typography>

            <TextField
                onChange={(event) => props.onChange(event.target.value)}
                label=''
                variant='outlined' />
        </Box>
    );
}
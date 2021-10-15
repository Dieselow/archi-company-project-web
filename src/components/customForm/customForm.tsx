import React from 'react';
import { TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from './customForm.style';

export type FormType = 'textfield' | 'list' | 'date';

export type Style = {
    backgroundColor: string;
    color: string;
    fontSize: number;
    margin: number;
    fontFamily: string;
}

type Props = {
    text: string;
    onChange: (value: string) => void;
    style: Style;
    formType: FormType;
    list?: any;
}

export const CustomForm = (props: Props) => {
    const classes = useStyles(props.style);

    const renderSwitch = () => {
        switch (props.formType) {
            case 'date':
                return <TextField
                    label=''
                    type='date'
                    defaultValue='2017-05-24'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                break;

            case 'list':
                return <FormControl >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                break;

            case 'textfield':
                return <TextField
                    onChange={(event) => props.onChange(event.target.value)}
                    label=''
                    variant='outlined' />
                break;
        }
    }

    return (
        <Box className={classes.box}>
            <Typography className={classes.typography}>
                {props.text}
            </Typography>

            {renderSwitch()}

        </Box>
    );
}


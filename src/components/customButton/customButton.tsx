import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './customButton.style';

export type Style = {
    backgroundColor : string;
    color: string;
    fontSize : number;
    margin : number;
}

type Props = {
    text: string;
    onClick: () => void;
    style : Style;
}

export const CustomButton = (props: Props) => {    
    const classes = useStyles(props.style);

    return (
        <Button className={classes.button}
            onClick={() => props.onClick()}>
            <Typography className ={classes.typography}>
                {props.text}
            </Typography>
        </Button>
    );
}
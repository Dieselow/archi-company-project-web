import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './customButton.style';

type Props = {
    text: string;
    onClick: () => void;
}

export const CustomButton = (props: Props) => {    
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
        <Button className={classes.button}
            onClick={() => props.onClick()}>
            <Typography className ={classes.typography}>
                {props.text}
            </Typography>
        </Button>
    );
}
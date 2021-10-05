import React from 'react';
import { Button, Typography, Box} from '@material-ui/core';
import { useStyles } from './banner.style';

type Props = {
    onClick: (variable : any) => void;
    textButton : string; 
    textTypography?: string;
}

export const Banner = (props: Props) => {    
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography>{props.textTypography}</Typography>
        <Button onClick={props.onClick}>{props.textButton}</Button>
    </Box>
    );
}
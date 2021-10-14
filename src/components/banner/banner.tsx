import React from 'react';
import { Button, Typography, Box} from '@material-ui/core';
import { useStyles } from './banner.style';

export type Props = {
    onClick: (variable : any) => void;
    textButton : string; 
    textTypography?: string;
}

export type Style = {
    
}
export const Banner = (props: Props) => {    
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (<Box className={classes.box}>
        <Typography className={classes.typography}>{props.textTypography}</Typography>
        <Button onClick={props.onClick} className={classes.button}>{props.textButton}</Button>
    </Box>
    );
}
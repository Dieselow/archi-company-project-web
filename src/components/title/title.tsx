import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { useStyles } from './title.style';

type Props = {
    text: string;
    fontSize: number;
}

export const Title = (props: Props) => {
    const text = props.text;
    const styleProps = {
        fontSize : props.fontSize,
        backgroundColor : 'green',
    }
    const classes = useStyles(styleProps);

    return (
        <Box>
            <Typography className={classes.typography}>
                {text}
            </Typography>
        </Box>
    );
}
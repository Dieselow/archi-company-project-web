import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { useStyles } from './userLogin.style';

type Props = {
}

export const UserLogin = (props: Props) => {
    const styleProps = {
    }
    const classes = useStyles(styleProps);

    return (
        <Box>
            <Typography className={classes.typography}>
                Connect to your account ! 
            </Typography>
        </Box>
    );
}
import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import {useStyles} from './welcomePage.style';

type Props = {
}

export const WelcomePage = (props: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
        <h1 className={classes.title}>
            Welcome Page
        </h1>
    </Box>
  );
}
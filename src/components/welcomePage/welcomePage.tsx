import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import {useStyles} from './welcomePage.style';
import { Title } from '../title/title';

type Props = {
}

export const WelcomePage = (props: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
        <Title fontSize ={34} text = {'Welcome Page !'}/>
    </Box>
  );
}
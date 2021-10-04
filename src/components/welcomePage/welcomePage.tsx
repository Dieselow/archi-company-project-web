import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { useStyles } from './welcomePage.style';
import { Title } from '../title/title';
import { Header } from '../header/header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


type Props = {
}

export const WelcomePage = (props: Props) => {
  const classes = useStyles();

  return (
        <Header/>
    // <Router>
    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/patient">
    //         <Title fontSize={34} text={'Welcome Page Patient !'} />
    //       </Route>
    //       <Route path="/doctor">
    //         <Title fontSize ={34} text = {'Welcome Page Doctor !'}/>
    //       </Route>
    //     </Switch>
    // </Router>
  );
}
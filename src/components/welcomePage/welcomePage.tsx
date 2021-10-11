import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { useStyles } from './welcomePage.style';
import { Title } from '../title/title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPatient } from '../loginPatient/loginPatient';
import { UserLogin } from '../userLogin/userLogin';


type Props = {
}
const isPossible = true;

export const WelcomePage = (props: Props) => {
  const classes = useStyles();

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path='/'>
          <LoginPatient />
        </Route>
        {isPossible &&
          <Route path='/caregiver'>
            <UserLogin type={'caregiver'}/>
          </Route>}
        {isPossible &&
          <Route path='/secretary'>
            <UserLogin type={'secretary'}/>
          </Route>}
        <Route path='/login'>
          <UserLogin type={'patient'}/>
        </Route>
      </Switch>
    </Router>
  );
}
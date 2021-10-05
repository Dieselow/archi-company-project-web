import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { useStyles } from './welcomePage.style';
import { Title } from '../title/title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPatient } from '../loginPatient/loginPatient';
import { UserLogin } from '../userLogin/userLogin';
import { CrudPatient } from '../crudPatient/crudPatient';
import { Patient } from '../crudPatient/crudPatient';

const patient : Patient = {
  firstname : 'Toto',
  lastname : 'Doe',
  adress: '779 rue huard',
  phoneNumber: '0999',
  email: 'toto@gmail.com'
}

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
          <Route path='/doctor'>
            <UserLogin/>
          </Route>}
        <Route path='/login'>
          <UserLogin />
        </Route>          
        <Route path='/crudpatient'> 
          <CrudPatient patient={patient} />
        </Route>
      </Switch>
    </Router>
  );
}
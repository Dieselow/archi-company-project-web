import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { useStyles } from './welcomePage.style';
import { Title } from '../title/title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPatient } from '../loginPatient/loginPatient';
import { UserLogin } from '../userLogin/userLogin';
import { CrudPatient } from '../crudPatient/crudPatient';
import { Patient } from '../crudPatient/crudPatient';

const patient: Patient = {
  firstname: 'Toto',
  lastname: 'Doe',
  adress: '779 rue huard',
  phoneNumber: '0999',
  email: 'toto@gmail.com',
  id: 1,
}

type Props = {
}
const isPossible = true;

export const WelcomePage = (props: Props) => {
  const [isPossible, setIsPossible] = React.useState<boolean>(false);
  const classes = useStyles();

  const onChange = () => {
    setIsPossible(true);
  }

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path='/'>
          <LoginPatient />
        </Route>
        <Route path='/caregiver'>
          <UserLogin onChange={onChange} type={'caregiver'} />
        </Route>
        <Route path='/secretary'>
          <UserLogin onChange={onChange} type={'secretary'} />
        </Route>
        <Route path='/login'>
          <UserLogin onChange={onChange} type={'patient'} />
        </Route>
        {isPossible &&
          <Route path='/crud/patient'>
            <CrudPatient patient={patient} />
          </Route>}
      </Switch>
    </Router>
  );
}

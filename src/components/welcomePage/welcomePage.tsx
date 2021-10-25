import React from 'react';
import { Avatar, Box } from '@material-ui/core';
import { useStyles } from './welcomePage.style';
import { Title } from '../title/title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LoginPatient } from '../loginPatient/loginPatient';
import { UserLogin, UserType } from '../userLogin/userLogin';
import { CrudPatient } from '../crud/crudPatient/crudPatient';
import { CrudManager} from '../crud/crudManager/crudManager';
import { Caregiver, CrudCaregiver } from '../Caregiver/crudCaregiver/crudCaregiver';
import { CrudSecretary } from '../Secretary/crudSecretary/crudSecretary';
import { UserInfo } from '../userInfo/userInfo';
import { updateFunctionDeclaration } from 'typescript';
import { RoomInfo } from '../roomInfo/roomInfo';


const onChange=() => {

}
type Props = {
}
const isPossible = true;

export const WelcomePage = (props: Props) => {
  const [isPossible, setIsPossible] = React.useState<boolean>(false);
  const [type, setType] = React.useState<UserType>('patient');
  const classes = useStyles();

  const onChange = (userType: UserType) => {
    setIsPossible(true);
    setType(userType);
  }

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/caregiver/view/:id'  key={Math.random()}>
          <UserInfo userType ='caregiver' />
        </Route>
        <Route path='/patient/view/:id' render={(props) => <UserInfo userType ='patient' key={Math.random()} />}/>
        <Route path='/room/view/:id' render={(props) => <RoomInfo key={Math.random()} />}/>
        <Route path='/secretary/view/:id' render={(props) => <UserInfo userType ='secretary' key={Math.random()} />}/>
        <Route path='/caregiver/view/:id' render={(props) => <UserInfo userType ='caregiver' key={Math.random()} />}/>
        <Route exact path='/'>
          <LoginPatient />
        </Route>
        <Route path='/caregiver'>
          <UserLogin onChange={() => onChange('caregiver')} type={'caregiver'} />
        </Route>
        <Route path='/secretary'>
          <UserLogin onChange={() => onChange('secretary')} type={'secretary'} />
        </Route>
        <Route path='/login'>
          <UserLogin onChange={() => onChange('patient')} type={'patient'} />
        </Route>
       
        {isPossible &&
          <Route path='/crud'>
            <CrudManager userType={type}/>
          </Route>}
      </Switch>
    </Router>
  );
}

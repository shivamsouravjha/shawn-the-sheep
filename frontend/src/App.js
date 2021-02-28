import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initialpage';
import Attendee_register from './attendee/attendee_register';
import Get_Attendee from '../src/attendee/get_attendee';
import Events_Work from './events/events';
import Admin_login from '../src/admin/admin_login';
import Create_Events from '../src/events/new_event';
import Admin_Command from '../src/admin/admin_commands';
import Delete_Event from '../src/events/deleteevent';
const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial" exact>
      <Initialpage />
    </Route>
    <Route path="/admin" exact>
      <Admin_login />
    </Route>
    <Route path="/admin/newevents" exact>
      <Create_Events />
    </Route>
    <Route path="/newattendee" exact>
      <Attendee_register />
    </Route>
    <Route path="/registerevent" exact>
      <Events_Work />
    </Route>
    <Route path="/getattendee" exact>
      <Get_Attendee />
    </Route>
    <Route path="/attendeecommand" exact>
      <Admin_Command />
    </Route>
    <Route path="/deleteevent" exact>
      <Delete_Event />
    </Route>

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;

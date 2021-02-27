import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initialpage';
import Attendee_Work from '../src/attendee/user_work';
import Admin_Commands from '../src/admin/admin_commands';
import Events_Work from './events/events';
import Admin_login from '../src/admin/admin_login';
import Create_Events from '../src/events/new_event';
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
      <Attendee_Work />
    </Route>
    <Route path="/register" exact>
      <Events_Work />
    </Route>

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;

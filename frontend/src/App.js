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
import Events_Work from './events/event_list';
const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial" exact>
      <Initialpage />
    </Route>
    <Route path="/admin" exact>
      <Admin_Commands />
    </Route>
    <Route path="/newevents" exact>
      <Events_Work />
    </Route>
    <Route path="/newattendee" exact>
      <Attendee_Work />
    </Route>

    <Redirect to="/"/>
    </Switch>
  </Router>
  );
}

export default App;

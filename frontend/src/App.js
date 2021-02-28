import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initialpage';
import Attendee_register from './attendee/attendee_register';
import Operation_Success from './common/sucess';
import Get_Attendee from '../src/attendee/get_attendee';
import Events_Work from './events/events';
import Events_ID from './events/events_id';
import Admin_login from '../src/admin/admin_login';
import Create_Events from '../src/events/new_event';
import Admin_Command from '../src/admin/admin_commands';
import Delete_Event from '../src/events/deleteevent';
import Operation_Fail from '../src/common/fail';
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
    <Route path="/fail" exact>
      <Operation_Fail />
    </Route>
    <Route path="/admincommand" exact>
      <Admin_Command />
    </Route>
    <Route path="/deleteevent" exact>
    <Events_ID />

      <Delete_Event />
    </Route>
    <Route path="/success" exact>
      <Operation_Success />
    </Route>

    <Redirect to="/initial"/>
    </Switch>
  </Router>
  );
}

export default App;

import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Initialpage from './common/initialpage';
const App= ()=> {
  return(
  <Router>
    <Switch>
    <Route path="/initial">
      <Initialpage />
    </Route>
    <Redirect to="/"/>
    </Switch>
  </Router>
  );
}

export default App;

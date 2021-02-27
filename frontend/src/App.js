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
    <Route path='/'>
      <Initialpage />
    </Route>
  </Router>
  );
}

export default App;

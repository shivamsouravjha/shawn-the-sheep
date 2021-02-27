import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
const  main_page = ()=> {
  return(
  <div>
    <h1> DEFINE YOURSELF</h1>
    <ul className="header">
      <li><a href="/">Attendee</a></li>
      <li><a href="/admin_commands">Admin</a></li>
    </ul>
    <div className="content">
       
    </div>
  </div>
  );
}

export default main_page;

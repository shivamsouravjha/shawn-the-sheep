import React, { useState, useCallback } from 'react';
import Event_item from './event_item';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
const  Events_list = props=> {
  if(props.items.length===0)
  {
    return(
      <div>
        <h1>No events as of now!</h1>
      </div>
    );
  }
  return(
    
  );
}

export default Events_list;

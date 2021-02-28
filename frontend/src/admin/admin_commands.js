import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const  Admin_Command = ()=> {
  return(

  <div>

    <h1 className="pageheader"> DEFINE YOURSELF</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/admin/newevents`}> <button className="admin_div" >Add Event</button></Link></li>
      <li> <Link to={`/deleteevent`}> <button className="user_div" >Delete Event</button></Link></li>
      <li> <Link to={`/getattendee`}> <button className="user_div" >View Attendee</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Admin_Command;
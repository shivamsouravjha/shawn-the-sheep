import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const  Admin_Command = ()=> {
  return(

  <div>

    <h1 className="pageheader"> Operation Successful!</h1>
   
   <center> <ul className="header">
      <li> <Link to={`/initial`}> <button className="admin_div" >Headback to Homepage</button></Link></li>
    </ul></center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Admin_Command;
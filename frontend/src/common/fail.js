import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const  Admin_Command = ()=> {
  return(

  <div>

    <h1 className="success_head"> Operation Failed!</h1>
   
   <center>
       <Link to={`/initial`}> <button className="headback_btn" >Headback to Homepage</button></Link>
  </center>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Admin_Command;
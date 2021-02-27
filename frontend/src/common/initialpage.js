import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const  main_page = ()=> {
  return(

  <div>

    <h1> DEFINE YOURSELF</h1>
    <ul className="header">
      <li> <Link to={`/admin`}> <h1>Admin</h1></Link></li>
      <li> <Link to={`/user`}> <h1>User</h1></Link></li>
    </ul>
    <div className="content">
       
    </div>
  </div>
  );
}

export default main_page;

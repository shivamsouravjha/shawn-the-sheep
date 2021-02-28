import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const  Events_item = props=> {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
        
    if(isLoggedIn){
        return(
        <li className="Events_ID_item">
        <div className="Events_ID_info">
            <div className="Events_Name">
                 <h1>{props.events_id} </h1>
            </div>
           
        </div>
        
        </li>);}
    else{

        window.location="/initial";

    }

}

export default Events_item;

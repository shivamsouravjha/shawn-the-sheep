import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
const  Events_item = props=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
        
    if(isLoggedIn){
        return(
        <li className="Events_item">
        <Link to={`/initial`}>
        <div className="Events_info">
            <div className="Events_Name">
                 <h1>{props.event_name} </h1>
            </div>
           <div className="Events_Date">
                <h1> {props.event_date}</h1>
           </div>
        </div>
        </Link>
        </li>);}
    else{
        return (
        <li className="Events_item">
                <Link to={`/admin`}>
            <div className="Events_info">
                <div className="Events_Name">
                    <h1>{props.event_name} </h1>
                </div>
                <div className="Events_Date">
                    <h1> {props.event_date}</h1>
                </div>
                
            </div>
            </Link>
            
        </li>);
    }

}

export default Events_item;

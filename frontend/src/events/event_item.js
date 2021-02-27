import React, { useState, useCallback } from 'react';
const  Events_item = props=> {
  return(
        <li className="Events_item">
            <div className="Events_info">
                <div className="Events_Name">
                    <h1>{props.event_name} </h1>
                </div>
                <div className="Events_Date">
                    <h1> {props.event_date}</h1>
                </div>
                
            </div>
        </li>
  );
}

export default Events_item;

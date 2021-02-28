import React from 'react';
import Attendee_each from './attendee_each';
const  Attendee_list = props => {
  if(!props.items.length)
  {
    return(
      <div>
        <h1>No events as of now!</h1>
      </div>
    );
  }
  return(
    <ul>
      {props.items.map(events=>(
      <Attendee_each key={events.attendee_id}
       attendee_id={events.attendee_id}
      event_date={events.event_date}
      />))}
    </ul>
  );
}

export default Attendee_list;

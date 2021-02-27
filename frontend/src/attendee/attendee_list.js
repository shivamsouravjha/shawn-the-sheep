import React from 'react';
import Attendee_each from './attendee_each';
const  Events_list = props => {
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
      <Attendee_each key={events.events_id}
      id={events.events_id} event_name={events.event_name}
      event_date={events.event_date}
      />))}
    </ul>
  );
}

export default Events_list;

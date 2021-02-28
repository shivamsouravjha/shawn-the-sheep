import React from 'react';
import Events_ID_item from './event_id_item';
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
      <Events_ID_item key={events.events_id}
      events_id={events.events_id}
      />))}
    </ul>
  );
}

export default Events_list;

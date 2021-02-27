import React from 'react';
import Events_item from './event_item';
const  Events_list = props => {
  if(props.items.length === 0)
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
      <Events_item key={events.events_id}
      id={events.events_id} event_name={events.event_name}
      event_date={events.event_date}
      />))}
    </ul>
  );
}

export default Events_list;

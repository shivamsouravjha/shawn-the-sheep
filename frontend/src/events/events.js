import React from 'react';
import Events_list from './event_list';
const Events = ()=>{
    const events=[{events_id:"1", event_name:"sufeast",event_date:"11-2-12"}];
    const lol=[];
    return <Events_list items={events}/>;
};
export default Events;
import React,{useEffect,useState} from 'react';
import Events_list from './event_list';
const Events = ()=>{
    const [loadedevents,setloadedevents] = useState('');
    const get_events = async ()=>{
        try{
            const response = await fetch("/admin/events")
            const jsonData = await response.json()
            setloadedevents(jsonData);
        }catch(err)
        {
            console.log('issues');
        }
    };
    useEffect(()=>{
        get_events();
    },[]);
    const lol=[];
    console.log(loadedevents);

    return <Events_list items={loadedevents}/>;
};
export default Events;
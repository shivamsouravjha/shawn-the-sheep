import React,{useEffect,useState} from 'react';
import Events_list from './event_list';
const Events = ()=>{
    const [Loadedevents,setloadedevents] = useState();
    const get_events = async ()=>{
        try{
            const response = await fetch("http://localhost:5000/api/admin/events")
            const jsonData = await response.json()
            setloadedevents(jsonData);
            return <Events_list items={jsonData}/>;

        }catch(err)
        {
            console.log('issues');
        }
    };
    useEffect(()=>{
        get_events();
    },[]);
    const lol=[];
    
       
    return (<h1></h1>);
};
export default Events;
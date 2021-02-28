import React,{useEffect,useState} from 'react';
import Events_ID_list from './event_id_list';
const Events_ID = ()=>{
    const [loadedevents,setloadedevents] = useState('');
    const get_events = async ()=>{
        try{
            const response = await fetch("http://localhost:5000/api/admin/events")
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

    return <Events_ID_list items={loadedevents}/>;
};
export default Events_ID;
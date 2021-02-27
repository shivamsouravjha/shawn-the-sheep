import React,{useEffect,useState} from 'react';
import Attendee_list from './attendee_list';
const Get_Attendee = ()=>{
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

    return <Attendee_list items={loadedevents}/>;
};
export default Get_Attendee;
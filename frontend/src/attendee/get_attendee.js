import React,{useEffect,useState} from 'react';
import Attendee_list from '../events/event_item';
const Get_Attendee = ()=>{
    const [loadedattende,setloadedattende] = useState('');
    const get_events = async ()=>{
        try{
            const response = await fetch("http://localhost:5000/api/admin/")
            const jsonData = await response.json()
            setloadedattende(jsonData);
        }catch(err)
        {
            console.log('issues');
        }
    };
    useEffect(()=>{
        get_events();
    },[]);
    const lol=[];
    console.log(loadedattende);

    return <Attendee_list items={loadedattende}/>;
};
export default Get_Attendee;
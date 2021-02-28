import React,{useEffect,useState} from 'react';
import Attendee_list from './attendee_list';
const Get_Attendee = ()=>{
    const [loadedattende,setloadedattende] = useState('');
    const get_events = async ()=>{
        try{
            const response = await fetch("/api/admin/")
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
      const lol=[{attendee_id:"2",event_date:"12-21-1"}];
    console.log(lol);

    return <Attendee_list items={lol}/>;
};
export default Get_Attendee;
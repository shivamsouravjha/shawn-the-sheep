import React, { useEffect, useState } from 'react';
import './new_events.css';
 
const  Delete_Event = ()=>{
   
    const [events_id,setevents_id]=useState("");

    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const body={events_id};
            
            const response = await fetch("http://localhost:5000/api/newevents",{
                method:"DELETE",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/success";
        }catch(err){
            console.log('Error')
        }
    }
    return (   
     <div className="event_form_div">
		<h1 className="form_heading">
			Create a New Event </h1>
		
  <center>
	<form  action="/initial" id="event_form"  name="event_form" onSubmit={onSubmitform}>
			<label for="event_name" className="labels">Event ID <span > * </span> </label><br/>
				<input type="text" name="event_name" className="inputs" value={events_id} 
                placeholder="Event" onChange={e =>setevents_id(e.target.value)} required />  <br/><br/>

       

        
  		
		<button type="submit" className="confirm_btns" >Delete Event</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Delete_Event;
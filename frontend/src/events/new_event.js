import React, { useEffect, useState } from 'react';
import './new_events.css';
 
const  Create_Events = ()=>{
   
    const [event_name,setName]=useState("");
    const [event_date,setDate]=useState("");

    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const body={event_name,event_date};
            
            const response = await fetch("http://localhost:5000/api/newevents",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/newevents";
            console.log(response);
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
			<label for="event_name" className="labels">Event Name <span > * </span> </label><br/>
				<input type="text" name="event_name" className="inputs" value={event_name} 
                placeholder="Event" onChange={e =>setName(e.target.value)} required />  <br/><br/>

        <label for="date" className="labels"> Date of the event <span > * </span> </label><br/>
    		<input type="date" name="date" className="inputs" value={event_date} onChange={e =>setDate(e.target.value)} required /> <br/><br/>

        
  		
		<button type="submit" className="confirm_btns" >Create Event</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Create_Events;
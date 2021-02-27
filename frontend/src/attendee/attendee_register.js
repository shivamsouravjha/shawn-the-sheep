import React, { useEffect, useState } from 'react';
import './attendee_register.css';
 
const  Form = ()=>{
    const [attendee_Name,setName]=useState("");
    const [attendee_Age,setAge]=useState("");
    const [attendee_Email,setEmail]=useState("");
    const [attendee_Number,setContact]=useState("");
    const [attendee_Address,setAddress]=useState("");
    const [events_id,setevents_id]=useState("7");
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const body={attendee_Name,attendee_Age,attendee_Number,attendee_Email,attendee_Address,events_id};
            
            const response = await fetch("http://localhost:5000/api/newattendee",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/initial";
            console.log(response);
        }catch(err){
            console.log('Error')
        }
    }
    return (   
     <div className="attendee_form_div">
		<h1 className="form_head">
			Attendee Registration Form </h1>
		<p className="form_des">Thankyou for your interest towards attending this event. Kindly fill the details to confirm your attendance for the event.</p>
  <center>
	<form  action="/initial" id="attendee_form"  name="attendee_form" onSubmit={onSubmitform}>
			<label for="name" className="label_field">Name <span > * </span> </label><br/>
				<input type="text" name="name" className="input_field" value={attendee_Name} 
                placeholder="Name" onChange={e =>setName(e.target.value)} required />  <br/><br/>

        <label for="age" className="label_field"> Your Age <span > * </span> </label><br/>
    		<input type="number" name="age" className="input_field" value={attendee_Age} onChange={e =>setAge(e.target.value)} required /> <br/><br/>

        <label for="contact" className="label_field"> Your contact number (Don't start with 0) <span > * </span> </label><br/>
    		<input type="text" name="contact" className="input_field"  required placeholder="your 10-digit number" 
            value={attendee_Number} onChange={e =>setContact(e.target.value)}
            /> <br/><br/>

		<label for="email" className="label_field"> Email <span > * </span> </label><br/>
    		<input type="email" className="input_field" name="email" 
            value={attendee_Email} onChange={e =>setEmail(e.target.value)} required /> <br/><br/>

     	<label for="address" className="label_field"> Residential address <span > * </span> </label><br/>
     		<input type="text" name="address" required className="input_field" 
             value={attendee_Address} onChange={e =>setAddress(e.target.value)} required/> <br/><br/>
     
  		
		<button type="submit" className="confirm_button" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Form;
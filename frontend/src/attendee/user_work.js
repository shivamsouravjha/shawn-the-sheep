import React, { Component } from "react";
import './user_work.css';
 
const  Form = ()=>{
  
    return (   
     <div className="attendee_form_div">
		<h1 className="form_head">
			Attendee Registration Form </h1>
		<p className="form_des">Thankyou for your interest towards attending this event. Kindly fill the details to confirm your attendance for the event.</p>
  <center>
	<form  id="attendee_form" action="" method="POST" name="attendee_form"/>
			<label for="name" className="label_field">Name <span > * </span> </label><br/>
				<input type="text" className="input_field" name="name" placeholder="Name" required />  <br/><br/>
        <label for="age" className="label_field"> Your Age <span > * </span> </label><br/>
    		<input type="number" className="input_field" name="age" required /> <br/><br/>
        <label for="contact" className="label_field"> Your contact number (Don't start with 0) <span > * </span> </label><br/>
    		<input type="text" name="contact" className="input_field" pattern="[1-9]{1}[0-9]{9}" required placeholder="your 10-digit number" /> <br/><br/>
		<label for="email" className="label_field"> Email <span > * </span> </label><br/>
    		<input type="email" className="input_field" name="email" required /> <br/><br/>
     	<label for="address" className="label_field"> Residential address <span > * </span> </label><br/>
     		<input type="text" name="address" required className="input_field" /> <br/><br/>
     
  		
		<button type="submit" className="confirm_button" value="submit">Confirm</button></center>




    </div>
    );
  
};
 
export default Form;
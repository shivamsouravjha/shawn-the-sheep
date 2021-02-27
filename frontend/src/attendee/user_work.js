import React, { Fragment, useState } from 'react';
import './user_work.css';
 
const  Form = ()=>{
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const [contact,setContact]=useState("");
    const [address,setAddress]=useState("");
    const onSubmitform = async e=>{
        e.preventDefault();
        try{
            const body={name,age,email,contact,address};
            console.log(name);
            console.log(body);
        }catch(err){
            console.log('Error')
        }
    }
    return (  
        <Fragment> 
     <div className="attendee_form_div">
		<h1 className="form_head">
			Attendee Registration Form
         </h1>
		<p className="form_des">
            Thankyou for your interest towards attending this event. Kindly fill the details to confirm your attendance for the event.
        </p>
  <center>
	<form  id="attendee_form"  name="attendee_form" onSubmit={onSubmitform}>
			<label for="name" className="label_field">Name <span > * </span> </label><br/>
				<input type="text" name="name" className="input_field" value={name} 
                placeholder="Name" onChange={e =>setName(e.target.value)} required />  <br/><br/>

        <label for="age" className="label_field"> Your Age <span > * </span> </label><br/>
    		<input type="number" name="age" className="input_field" value={age} onChange={e =>setAge(e.target.value)} required /> <br/><br/>

        <label for="contact" className="label_field"> Your contact number (Don't start with 0) <span > * </span> </label><br/>
    		<input type="text" name="contact" className="input_field" pattern="[1-9]{1}[0-9]{9}" required placeholder="your 10-digit number" 
            value={contact} onChange={e =>setContact(e.target.value)}
            /> <br/><br/>

		<label for="email" className="label_field"> Email <span > * </span> </label><br/>
    		<input type="email" className="input_field" name="email" 
            value={email} onChange={e =>setEmail(e.target.value)} required /> <br/><br/>

     	<label for="address" className="label_field"> Residential address <span > * </span> </label><br/>
     		<input type="text" name="address" required className="input_field" 
             value={address} onChange={e =>setAddress(e.target.value)} required/> <br/><br/>
     
  		
		<button className="confirm_button" >Confirm</button>
        </form>

        </center>
     </div>
    </Fragment>
    );
  
};
 
export default Form;
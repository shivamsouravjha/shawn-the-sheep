import React, { useEffect, useState } from 'react';
import './admin_login.css';
const  Admin_login = ()=>{
    const [password,setPassword]=useState("");
    
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const body={password};
            
            const response = await fetch("http://localhost:5000/api/admin/login",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(response);
        }catch(err){
            console.log('Error')
        }
    }
    return (   
     <div className="admin_form_div">
		<h1 className="form_header">
			Hey Admin! </h1>
	
  <center>
	<form  action="/initial" id="admin_form"  name="admin_form" onSubmit={onSubmitform}>
			<label for="password" className="label">Enter the password first! </label><br/>
				<input type="password" name="password" className="input" value={password} 
                onChange={e =>setPassword(e.target.value)} required />  <br/><br/>

  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Admin_login;
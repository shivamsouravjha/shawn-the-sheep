import React, { useEffect, useState } from 'react';
import './admin_login.css';
const  Admin_login = ()=>{
    const [admin_password,setPassword]=useState('');
    const [admin_name,setadmin_name]=useState('');
    const onSubmitform = async e =>{
        e.preventDefault();
        try{
            const body={admin_password,admin_name};

            const response = await fetch("/admin/login",{
                method:"POST",headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            const datainjson = await response.json();
            const numtocheck = datainjson[0].count.toString();
            if(numtocheck.localeCompare("0")){
                window.location="/admincommand"
            }
           
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
    <label for="name" className="label">Enter your name! </label><br/>
				<input type="text" name="name" className="input" value={admin_name} 
                onChange={e =>setadmin_name(e.target.value)} required />  <br/><br/>
			<label for="password" className="label">Enter the password! </label><br/>
				<input type="password" name="password" className="input" value={admin_password} 
                onChange={e =>setPassword(e.target.value)} required />  <br/><br/>

  		
		<button type="submit" className="confirm_btn" >Confirm</button>
        </form> 
        </center>




    </div>
    );
  
};
 
export default Admin_login;
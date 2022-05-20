import React from "react";
import bgimg from "../../Assets/bg.jpg";
import './PasswordReset.css'

import {Link} from 'react-router-dom';



function PasswordReset(){
    return(<>
 <div className="Login_page"   style={{
            backgroundSize:"cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("${bgimg}")`,
            backgroundPosition:"center",
            objectFit:"contain"}}>
 
  <form className="passwordReset">
     <h3>Password reset</h3>

     <label for="username">User ID</label>
   <input  className="login-input" type="text" placeholder="Email or Phone" id="username"></input>
     
 <label for="reset-password">New Password</label>
   <input  className="login-input" type="Password" placeholder="New Password" id="new_password"></input>

 <label for="confirm-password">Password</label>
   <input className="login-input" type="password" placeholder=" Confirm Password" id="password"></input>
   
  <Link  style={{ textDecoration: 'none'}} to="/LoginPage"> <button className="login-btn " id="white-button">Reset</button></Link>

  </form>
          


 </div>
    
    
    
    </>)}


export default PasswordReset;
import React from "react";
import bgimg from "../../Assets/bg.jpg";
import './signup.css';
import {Link} from 'react-router-dom';



function signup(){
    return(<>
 <div className="HeroPage"   style={{
            backgroundSize:"cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("${bgimg}")`,
            backgroundPosition:"center",
            objectFit:"contain"}}>
 
  <form className="singup login">
     <h3>Sign up </h3>
     
   <div className="signup-inputs">
  <div>
  <label for="username">User ID</label>
   <input  className="login-input" type="text" placeholder="Email or Phone" id="username"></input></div> 

   <div>
  <label for="confirmPassword">Confirm Password</label>
   <input  className="login-input" type="password" placeholder="Email or Phone" id="username"></input></div> 
   <div>
  <label for="newpassword">New password</label>
   <input  className="login-input" type="password" placeholder="Email or Phone" id="username"></input></div> 
   <div>
  <label for="username">OTP</label>
   <input  className="login-input" type="numeric" placeholder="Email or Phone" id="username"></input></div></div>
  <Link style={{ textDecoration: 'none'}} to="/Home"> <button className="sgup-btn " id="white-button">Sign Up</button></Link>
  <Link style={{ textDecoration: 'none'}} to="/HOme"><p className="sg-up"><span style={{ textDecoration: 'none' }} className="sign-up-link">Skip</span></p></Link>

</form>


 </div>
    
    
    
    </>)}


export default signup;
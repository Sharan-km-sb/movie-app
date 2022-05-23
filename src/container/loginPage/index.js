import React from "react";
import bgimg from "../../Assets/bg.jpg";
import './LoginPage.css';
import {Link, Navigate} from 'react-router-dom';
import { login } from "../../loginhandler";



function loginPage(){


  function onlogin(){
    login();
    Navigate('/Home')
  }
    return(<>
 <div className="Login_page"   style={{
            backgroundSize:"cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("${bgimg}")`,
            backgroundPosition:"center",
            objectFit:"contain"}}>
 
  <form className="login" onSubmit={onlogin}>
     <h3>Login Here</h3>
     
 <label for="username">User ID</label>
   <input  className="login-input" type="email" placeholder="Email" id="username" required></input>

 <label for="password">Password</label>
   <input className="login-input" type="password" placeholder="Password" id="password" required></input>
   <p className="sg-up">Forgot password <Link style={{ textDecoration: 'none'}} to="/PasswordReset"> <span className="sign-up-link ">Reset</span></Link></p>
   <button type="submit" className="login-btn " id="white-button">Log In</button>
<p className="sg-up">Don't Have a Account   <Link  style={{ textDecoration: 'none'}} to="/signup"><span className="sign-up-link ">Sign Up</span></Link></p>
  </form>
          


 </div>
    
    
    
    </>)}


export default loginPage;
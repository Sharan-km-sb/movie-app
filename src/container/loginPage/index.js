import React from "react";
import bgimg from "../../Assets/bg.jpg";
import './LoginPage.css';
import {Link} from 'react-router-dom';



function loginPage(){
    return(<>
 <div className="Login_page"   style={{
            backgroundSize:"cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("${bgimg}")`,
            backgroundPosition:"center",
            objectFit:"contain"}}>
 
  <form className="login">
     <h3>Login Here</h3>
     
 <label for="username">Username</label>
   <input  className="login-input" type="text" placeholder="Email or Phone" id="username"></input>

 <label for="password">Password</label>
   <input className="login-input" type="password" placeholder="Password" id="password"></input>
  <Link to="/Home"> <button className="login-btn">Log In</button></Link>
  <p className="sg-up">Don't Have a Account <span className="sign-up-link">Sign Up</span></p>
  </form>
          


 </div>
    
    
    
    </>)}


export default loginPage;
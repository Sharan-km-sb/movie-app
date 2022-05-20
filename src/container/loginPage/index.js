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
     
 <label for="username">User ID</label>
   <input  className="login-input" type="text" placeholder="Email or Phone" id="username"></input>

 <label for="password">Password</label>
   <input className="login-input" type="password" placeholder="Password" id="password"></input>
   <p className="sg-up">Forgot password <Link style={{ textDecoration: 'none'}} to="/PasswordReset"> <span className="sign-up-link ">Reset</span></Link></p>
  <Link  style={{ textDecoration: 'none'}} to="/Home"> <button className="login-btn " id="white-button">Log In</button></Link>
<p className="sg-up">Don't Have a Account   <Link  style={{ textDecoration: 'none'}} to="/signup"><span className="sign-up-link ">Sign Up</span></Link></p>
  </form>
          


 </div>
    
    
    
    </>)}


export default loginPage;
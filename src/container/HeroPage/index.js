import React from "react";
import { Link } from "react-router-dom";
import bgimg from '../../Assets/bg.jpg';
import './HeroPage.css';



function HeroPage(){
    return(<>
    <div className="HeroPage"   style={{
            backgroundSize:"cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url("${bgimg}")`,
            backgroundPosition:"center",
            objectFit:"contain"}}>
  <div className="welcome-card">
  <h1 className="heroheading">Welcome To The Movie DataBase</h1>
 
  <div className="hero-btns"> <Link to='/LoginPage'><button className="login-btn">LOG In</button></Link>
  <Link to='/LoginPage'><button className="login-btn">Sign UP</button></Link></div>
  </div>
  
    
  </div>
  
    
    </>)


}

export default HeroPage;
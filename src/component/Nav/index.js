import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import { logout } from '../../loginhandler';
import './Nav.css'


function Nav(){

     function onlogout(){
          logout();
          Navigate('/LoginPage')
        }
    return (<>
    <nav>
       <div className="nav">
    <ul className='nav-buttons'>
              <li className='buttons'><Link to="/Home" ><button className='nav-btn'>Home</button></Link></li>
                <h1 id='logo'>. TMDB .</h1>
                <li className='buttons'><Link to="/Search" ><button className='nav-btn'>Search</button></Link></li>
                <form onSubmit={onlogout}><Link to="/LoginPage"><li className='buttons'><button  type="submit" className='nav-btn'>Sign out</button></li></Link></form> 
            </ul>
    </div>
    </nav>
   
    

         </>)
}

export default Nav;
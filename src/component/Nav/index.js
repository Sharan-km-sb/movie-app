import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'


function Nav(){
    return (<>
    <nav>
         <div className="nav">
    <ul className='nav-buttons'>
                <li className='buttons'><Link to="/" ><button>HOME</button></Link></li>
                <li className='buttons'><Link to="/Search" ><button>SEARCH</button></Link></li>
            </ul>
    </div>
    </nav>
   
    

         </>)
}

export default Nav;
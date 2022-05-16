import React from "react";


import './Nav.css';
import { Link } from 'react-router-dom';



               
function Nav() {
    return (

        <nav className="nav">
            <ul>
                <li><Link to="/Home" ><button>HOME</button></Link></li>
                <li><Link to="/Search" ><button>Search</button></Link></li>
            </ul>
        </nav>
    );

}

export default Nav;
import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
const Navbar=()=>
{
    return(
        <div className="navbar">
        <div className="container">
            <div className="logo">
                <span>ultra profile</span>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">About</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
    )
}  
export default Navbar
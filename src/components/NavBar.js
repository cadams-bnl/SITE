import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.css';

function NavBar() {
    return(
        <div class="navbar-container text-center">
            <div class="row" style={{backgroundColor:"#292929"}}>
                <div class="col">
                    <Link to="/" class="text-light">Home</Link>  
                </div >                    
                <div class="col">
                    <Link to="/page2" class="text-light">Portfolio</Link>
                </div >
                <div class="col">
                   <Link to="/services" class="text-light">Services</Link>
                </div >
                <div class="col">
                    <Link to="/about" class="text-light">About</Link>
                </div >
            </div >
        </div>
    )
}

export default NavBar;
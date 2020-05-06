import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap-css-only/css/bootstrap.css';


function NavBar() {
    return(
        <div class="container">
            <div class="row" class="navbar" style={{backgroundColor:"#292929"}}>
                <div class="col-2 text-center">
                    <Link to="/" class="text-light">Home</Link>  
                </div >                    
                <div class="col-2 text-center">
                    <Link to="/page2" class="text-light">Page2</Link>
                </div >
                <div class="col-2 text-center">
                    <Link to="/wasabi" class="text-light">Wasabi</Link>
                </div >
                <div class="col-2 text-center">
                    <Link to="/notes" class="text-light">Notes</Link>
                </div >
            </div >
        </div>
    )
}

export default NavBar;
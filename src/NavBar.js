import React from 'react';
import { Link, Route } from 'react-router-dom';
import './bootstrap-css-only/css/bootstrap.min.css';
import './bootstrap-css-only/css/bootstrap.min.css';



function NavBar() {
    return(
        <div>
            <ul class="list-unstyled" style={{backgroundColor:"#292929"}}>
                <li>
                    <Link to="/" class="text-light">Home</Link>  
                </li>                    <li>
                     <Link to="/page2" class="text-light">Page 2</Link>
                </li>
                <li>
                    <Link to="/wasabi" class="text-light">Wasabi</Link>
                </li>
                <li>
                    <Link to="/notes" class="text-light">Notes</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
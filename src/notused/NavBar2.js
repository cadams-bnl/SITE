import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap-css-only/css/bootstrap.css';

function NavBar2() {
    return (
        <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler navbar-dark" type="button"
                data-toggle="collapse">
                    <span class="navbar-togglericon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-navigation">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="text-light">Home</Link>  
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar2;
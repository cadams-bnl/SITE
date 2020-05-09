import React from 'react';
import NavBar from './NavBar';
import '../css/bootstrap.css';
import '../css/main.css';


function Header() {
    return(
        <div class="container-fluid">
            <div class="row header">

                <div class="col">
                    <img class="home-head-img" src="https://bnlconsulting.com/images/bnl-logo.47c3fb5e.svg" alt={'Not working'}></img>
                </div>

                <div class="col">
                    <NavBar />
                </div>

            </div>
        </div>
    )
}

export default Header;
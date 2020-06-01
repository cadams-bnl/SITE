import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/main.css';

// not sure how to move text of navbar over to right

function NavBar() {
    return(
        <nav class="navbar navbar-expand-md navbar-dark my-navbar">
            <Link class="navbar-brand" to="/">
                <img class="navbar-img" src="https://bnlconsulting.com/images/bnl-logo.47c3fb5e.svg" 
                    alt={'Not working'} />
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navID" aria-controls="navID"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navID">

                <ul class="nav navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/portfolio" style={{color:"#9ea0a0"}}>PORTFOLIO</Link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                            style={{color:"#9ea0a0"}}>
                            SERVICES
                        </a>
                        <div class ="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" style={{color:"#9ea0a0"}}>Data Analytics</a>
                            <a class="dropdown-item" href="#" style={{color:"#9ea0a0"}}>Data Visualization</a>
                            <a class="dropdown-item" href="#" style={{color:"#9ea0a0"}}>Enterprise Integration</a>
                            <a class="dropdown-item" href="#" style={{color:"#9ea0a0"}}>Cyclops Scheduler</a>
                            <a class="dropdown-item" href="#" style={{color:"#9ea0a0"}}>About</a>
                        </div>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/about" style={{color:"#9ea0a0"}}>ABOUT</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/blog" style={{color:"#9ea0a0"}}>BLOG</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/contact" style={{color:"#9ea0a0"}}>CONTACT</Link>
                    </li>
                </ul>
    
            </div>
        </nav>





    )
}

export default NavBar;



/*


 <div class="navbar-container text-center">
    <div class="row" style={{backgroundColor:"#292929"}}>
        <div class="col">
            <Link to="/" class="text-light">Home</Link>  
        </div >                    
        <div class="col">
            <Link to="/portfolio" class="text-light">Portfolio</Link>
        </div >
        <div class="col">
            <Link to="/services" class="text-light">Services</Link>
        </div >
        <div class="col">
            <Link to="/about" class="text-light">About</Link>
        </div >
    </div >
</div>
        
*/
     
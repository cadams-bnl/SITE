import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/page2">Page 2</Link>
        </li>
        <li>
            <Link to="/page3">Page 3</Link>
        </li>
        <li>
            <Link to="/notes">Notes</Link>
        </li>
    </ul>
    )
}

export default NavBar;
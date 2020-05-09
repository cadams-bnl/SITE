import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import { Route } from 'react-router-dom';
import '../css/bootstrap.css';


function Page() {
    return (
        <div >
            <Route exact path="/" component={ Home } />
            <Route exact path="/portfolio" component={ Portfolio }/>
            <Route exact path="/services" component={ Services }/>
            <Route exact path="/notes" component={ About }/>
        </div>
    )
}

export default Page;


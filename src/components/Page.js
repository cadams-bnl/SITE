import React from 'react';

import Home from './Home';

import Portfolio from './Portfolio';
import Services from './Services';
import About from './About';
import Blog from './Blog';
import Contact from './Contact'


import { Route } from 'react-router-dom';
import '../css/bootstrap.css';


function Page() {
    return (
        <div >
            <Route exact path="/" component={ Home } />
            <Route exact path="/portfolio" component={ Portfolio }/>
            <Route exact path="/services" component={ Services }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/blog" component={ Blog }/>
            <Route exact path="/contact" component={ Contact }/>
        </div>
    )
}

export default Page;


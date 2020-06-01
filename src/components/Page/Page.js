import React from 'react';

import Home from '../../containers/Home/Home';

import Portfolio from '../../containers/Portfolio/Portfolio';
import Services from '../../containers/Services/Services';
import About from '../../containers/About/About';
import Blog from '../../containers/Blog/Blog';
import Contact from '../../containers/Contact/Contact'


import { Route } from 'react-router-dom';


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


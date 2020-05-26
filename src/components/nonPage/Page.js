import React from 'react';

import Home from '../../containers/page/Home';

import Portfolio from '../../containers/page/Portfolio';
import Services from '../../containers/page/Services';
import About from '../../containers/page/About';
import Blog from '../../containers/page/Blog';
import Contact from '../../containers/page/Contact'


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


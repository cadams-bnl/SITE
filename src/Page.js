import React from 'react';
import Home from './components/Home';
import Notes from './components/Notes';
import Page2 from './components/Page2';
import Wasabi from './components/Wasabi';
import { Route } from 'react-router-dom';
import './bootstrap-css-only/css/bootstrap.css';


function Page() {
    return (
        <div >
            <Route exact path="/" component={ Home } />
            <Route exact path="/page2" component={ Page2 }/>
            <Route exact path="/wasabi" component={ Wasabi }/>
            <Route exact path="/notes" component={ Notes }/>
        </div>
    )
}

export default Page;


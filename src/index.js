import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Page2 from './Page2'
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/Page2' component={Page2} />
    </Switch>
  </BrowserRouter>,
  rootEl
);

serviceWorker.unregister();

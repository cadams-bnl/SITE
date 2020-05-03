import React from 'react';
import './css/App.css';
import NavBar from './NavBar';
import Page from './Page';
import './bootstrap-css-only/css/bootstrap.min.css';
import './bootstrap-css-only/css/bootstrap.min.css';


function App() {
  return (
    <div class="container">
        <div class="row justify-content-end text-center"> 
          <div class="col-3">
            <NavBar />
          </div>
        </div>
        <div class="text-center" >
          <Page /> 
        </div>
    </div>
  );
}

export default App;
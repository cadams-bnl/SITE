import React from 'react';
import NavBar from './NavBar';
import Page from './Page';
import './bootstrap-css-only/css/bootstrap.css';


function App() {
  return (
    <div class="container-xl">
        <div class="row justify-content-end text-center"> 
          <div >
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
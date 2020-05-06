import React from 'react';
import NavBar from './NavBar';
import Page from './Page';
import './bootstrap-css-only/css/bootstrap.css';


function App() {
  return (
    <div class="container">
      <div class="row"> 
        <div class="col">
          Header
        </div>
        <div class="col">
          <NavBar />
        </div>
      </div>
      <div class="text-center">
        <Page />
      </div>
    </div>
  );
}

export default App;
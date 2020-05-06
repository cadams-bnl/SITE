import React from 'react';
import { Route } from 'react-router-dom';
import '../bootstrap-css-only/css/bootstrap.css';

function Home() {
  return (
    <div class="container">
      <div >
        <div class="text-light" style={{height:"100px", backgroundColor:"#292929"}}>
          Opening Header
        </div>
      </div>
      <div>
        <p>
          A bunch of writing...
        </p>
      </div>
    </div>  
  );
}

export default Home;
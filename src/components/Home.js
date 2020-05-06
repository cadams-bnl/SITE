import React from 'react';
import '../bootstrap-css-only/css/bootstrap.css';

function Home() {
  return (
    <div class="container">
      <div >
        <div class="text-light" style={{height:"300px", backgroundColor:"#292929"}}>
          Intro
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
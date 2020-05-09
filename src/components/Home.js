import React from 'react';
import '../css/bootstrap.css';
import '../css/main.css';

function Home() {
  return (
    <div>
      <div class="intro intro-container">
          Intro
      </div>

      <div class="container-fluid">

        <div class="row">

          <div class="col-md-4 sec-1">
            <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" 
              alt={'Not working'}>
            </img>
            <div>Description</div>
            <button class="btn btn-light btn-outline-dark my-button" type="link">
              Analytics services
            </button>
          </div>

          <div class="col-md-4 sec-1">
            <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Data-Visualization-Icon.bdda0ef9.png"
              alt={'Not working'}>
            </img>
            <div>Description</div>
            <button class="btn btn-light btn-outline-dark my-button" type="link">
              Visualization strategies
            </button>
          </div>

          <div class="col-md-4 sec-1">
            <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Enterprise-Integration-Icon.ef5f0a70.png"
              alt={'Not working'}></img>
            <div>Description</div>
            <button class="btn btn-light btn-outline-dark my-button" type="link">
              Integration solutions
            </button>
          </div>

        </div>
        

        <div class="row sec-2a">
          <div class="col-md-3">
            <img class="home-sq-img" src="https://bnlconsulting.com/images/intro/Capitol-Icon.9fe0c40c.png" 
              alt={'Not working'}>
            </img>
          </div>
          <div class="col-md-9">
            <p>Description</p>
          </div>
        </div>

        <div class="row sec-2b">
          <div class="col-md-3 offset-md-9">
            <img class="home-sq-img" src="https://bnlconsulting.com/images/intro/Pulse-Icon.6d11c744.png" 
                alt={'Not working'}>
            </img>
          </div>
          <div class="col-md-9">
            <p>Description</p>
          </div>  
        </div>

        <div class="row sec-2a">
          <div class="col-md-3">
            <img class="home-sq-img" src="https://bnlconsulting.com/images/intro/Play-Icon.9955321b.png" 
              alt={'Not working'}>
            </img>
          </div>
          <div class="col-md-9">
            <p>Description</p>
          </div>
        </div>

      </div> 
    </div>
  );
}

export default Home;
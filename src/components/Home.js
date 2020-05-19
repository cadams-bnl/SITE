import React from 'react';
import '../css/bootstrap.css';
import '../css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
      <div>
        <script src="https://kit.fontawesome.com/f0a0f9a214.js" crossorigin="anonymous"></script>
        <div class="intro intro-container">
            Intro Animation
        </div>
  
        <div class="container-fluid">
  
          <div class="row">
  
            <div class="col-md-4">
              <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" 
                alt={'Not working'}>
              </img>
              <h3>Data Analytics</h3>
              <div>
                There are questions that need to be answered to unlock your data's value. 
                First, how do you gather high-quality data? Then how do you organize it? 
                And most importantly, how do you use it to reach your goals? 
                We utilize industry-leading tools like SAS and R to find precisely the 
                right data that tells you where you are and how to get where you want to go.
              </div>
              <div >
                <button class="btn home-btn" type="link">
                  Data Analytics &nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
            </div>
  
            <div class="col-md-4">
              <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Data-Visualization-Icon.bdda0ef9.png"
                alt={'Not working'}>
              </img>
              <h3 >Data Visualization</h3>
              <div >
                When is the last time you took a good look at your organization? 
                Chances are, you never have—not the way we can present it. 
                We extract the most meaningful data and present it in intuitive visual 
                representations like charts and graphs, so you have up-to-the-minute 
                information at a glance. With our visualizations you can make smarter 
                decisions faster.
              </div>
              <div >
                <button class="btn home-btn" type="link">
                  Visualization strategies &nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
            </div>
  
            <div class="col-md-4">
              <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Enterprise-Integration-Icon.ef5f0a70.png"
                alt={'Not working'}></img>
              <h3>Enterprise Integration</h3>
              <div>
                Having all the information you need to run your organization is important. 
                Making that information work seamlessly throughout your organization is even more vital.
                At BNL Consulting, we bring together cutting-edge database systems, reporting tools, 
                and enterprise software systems, such as SAS, to make sure everyone has everything they
                need all the time.
              </div>
              <div >
                <button class="btn home-btn" type="link">
                  Integration Solutions &nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
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
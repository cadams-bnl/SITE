import React from 'react';
import '../../css/main.css';
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
  
          <div class="row p1-cont">
  
            <div class="col-lg-4">
                <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Data-Analytics-Icon.e044888c.png" 
                  alt={'Not working'}>
                </img>
                <h3>Data Analytics</h3>
                <p class="p1-box">
                  There are questions that need to be answered to unlock your data's 
                  value. First, how do you gather high-quality data? Then how do you 
                  organize it? And most importantly, how do you use it to reach your goals? 
                  We utilize industry-leading tools like SAS and R to find precisely the 
                  right data that tells you where you are and how to get where you want 
                  to go.
                </p>
                <div class="spacer-15"></div>
                <div >
                  <button class="btn home-btn" type="link">
                    Analytics Services &nbsp;
                    <FontAwesomeIcon icon={faCaretRight} />
                  </button>
                </div>
                <div class="line-solid"></div>
            </div>
  
            <div class="col-lg-4">
              <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Data-Visualization-Icon.bdda0ef9.png"
                alt={'Not working'}>
              </img>
              <h3 >Data Visualization</h3>
              <p class="p1-box">
                When is the last time you took a good look at your organization? 
                Chances are, you never have—not the way we can present it. 
                We extract the most meaningful data and present it in intuitive visual 
                representations like charts and graphs, so you have up-to-the-minute 
                information at a glance. With our visualizations you can make smarter 
                decisions faster.
              </p>
              <div class="spacer-15"></div>
              <div >
                <button class="btn home-btn" type="link">
                  Visualization strategies &nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
              <div class="line-solid"></div>
            </div>
  
            <div class="col-lg-4">
              <img class="home-circ-img" src="https://bnlconsulting.com/images/intro/Enterprise-Integration-Icon.ef5f0a70.png"
                alt={'Not working'}></img>
              <h3>Enterprise Integration</h3>
              <p class="p1-box">
                Having all the information you need to run your organization is 
                important. Making that information work seamlessly throughout your 
                organization is even more vital. At BNL Consulting, we bring together 
                cutting-edge database systems, reporting tools, and enterprise software 
                systems, such as SAS, to make sure everyone has everything they need 
                all the time.
              </p>
              <div class="spacer-15"></div>
              <div >
                <button class="btn home-btn" type="link">
                  Integration Solutions &nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
              
            </div>
  
          </div>
        </div>
  
        <div class="sec-margin"></div>
  

        <div class="container-fluid">

          <div class="row featurette">
          
            <div class="col-lg-3 col-override">
              <img class="home-sq-img" src="https://bnlconsulting.com/images/intro/Capitol-Icon.9fe0c40c.png" 
                alt={'Not working'}>
              </img>
            </div>
            <div class="col-lg-9 sec2-1 col-override">
              <h3> Public Sector</h3>
              <p class="p2-box">
                BNL Consulting is proud to be one of the largest professional services 
                providers to SAS in the public sector, and we cherish the relationships 
                we have cultivated with our federal partners. So whether you require 
                modernization of your SAS systems and processes, seamless integration of 
                heterogeneous enterprise systems (such as Oracle, SAS, and MicroStrategy),
                or a full-feature, self-service analytics platform custom-made for use 
                by your decision-makers and non-technical staff, we can make it happen 
                without the red tape.
              </p>
            </div>
          
          </div>
  
          <div class="row featurette">
        
            <div class="col-lg-3 order-lg-2">
              <img class="home-sq-img" src="https://bnlconsulting.com/images/intro/Pulse-Icon.6d11c744.png" 
                  alt={'Not working'}>
              </img>
            </div>
            <div class="col-lg-9 sec2-2">
              <h3 class="order-lg-1">Health &amp; Medical</h3>
              <p class="p2b-box order-lg-1">
                The landscape of the healthcare, medical, and pharmaceutical industries is 
                dramatically changing and doing so rapidly. Whether you want to manage your
                costs by accurately identifying super-utilizers, ensure your organization’s
                accountability by monitoring for both compliance and fraud, and empower your
                non-technical staff to make smarter decisions by developing systems with 
                intuitive visualizations and highly-customizable workflows, our offerings can 
                make sure your organization remains healthy and productive.
              </p>
            </div> 
           
          </div>
  
          <div class="row featurette">
          
            <div class="col-lg-3">
              <img class="home-sq-img" src="https://bnlconsulting.com/images/intro/Play-Icon.9955321b.png" 
                alt={'Not working'}>
              </img>
            </div>
            <div class="col-lg-9 sec2-1">
              <h3>Sport &amp; Entertainment</h3>
              <p class="p2-box">
                It’s no secret that advanced analytics are taking the sports world by storm, 
                but all aspects of the entertainment industry could benefit from the big data 
                revolution. Whether you want to assemble a championship team using a comprehensive
                analytics console with integrated roster and scouting management, boost ticket 
                sales for your shows with a customized social media brand impression dashboard, 
                or optimize your programming by integrating robust, real-time sentiment tracking,
                BNL Consulting can help you come out on top.
              </p>
            </div>
          
          </div>

        </div>
      </div>
  
        
      
    );
  }

export default Home;
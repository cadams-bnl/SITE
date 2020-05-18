import React from 'react';
import NavBar from './components/NavBar'
import Page from './components/Page';
import './css/bootstrap.css';


function App() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div class="text-center">
        <Page />
      </div>
    </div>
  );
}

export default App;
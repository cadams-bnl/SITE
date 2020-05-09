import React from 'react';
import Header from './components/Header';
import Page from './components/Page';
import './css/bootstrap.css';


function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="text-center">
        <Page />
      </div>
    </div>
  );
}

export default App;
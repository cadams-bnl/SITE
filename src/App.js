import React from 'react';
import NavBar from './containers/NavBar/NavBar'
import Page from './components/Page/Page';


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
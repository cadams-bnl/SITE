import React from 'react';
import NavBar from './containers/page/NavBar'
import Page from './components/nonPage/Page';


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
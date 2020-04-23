import React from 'react';
import './css/App.css';
import Home from './components/Home';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Notes from './components/Notes';
import NavBar from './NavBar';
// import Notes from './components/Notes';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={ Home }/>
      <Route exact path="/page2" component={ Page2 }/>
      <Route exact path="/page3" component={ Page3 }/>
      <Route exact path="/notes" component={ Notes }/>
    </div>
  );
}

export default App;
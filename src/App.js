import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h>BNL for now...</h>
      <Link to="/page2"><button>Page 2</button></Link>
    </div>
  );
}

export default App;

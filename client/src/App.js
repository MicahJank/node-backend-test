import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';



function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(res => {
        console.log("TCL: App -> res", res)
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <button>
         Send Request
       </button>
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import axiosWithFirebase from './utils/axiosWithFirebase.js';
import firebase from 'firebase';



function App() {
  const [data, setData] = useState('No data yet...');
  const [auth, setAuth] = useState('No Auth Status...');

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(authUser => {
  //     authUser ? setAuth(authUser) : setAuth(null);
  //   })
  // }, [])

  const handleSendRequest = (e) => {
    e.preventDefault();
      if(firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(true)
          .then(idToken => {
            return axios.get('http://localhost:5000/api', {headers: { Authorization: idToken }})
          })
          .then(res => {
            setData(res.data.message);
          })
          .catch(err => {
            setData(err.response.data.message);
          })
      } else {
        axios.get('http://localhost:5000/api')
          .then(res => {
            setData(res.data.message);
          })
          .catch(err => {
            setData(err.response.data.message);
          });
      }
    } 
    
      

  // sends the request to the firebase to log in with the provided email and password
  // right now i am hardcoding but ideally i would be passing in form information there
  const handleSignIn = (e) => {
    e.preventDefault();
    firebase.auth()
      .signInWithEmailAndPassword('dummy@gmail.com', 'password123')
      .then(() => {
        setAuth('Logged in');
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleSignOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        setAuth('Logged Out');
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{auth}</h3>
        <button onClick={handleSignIn}>Sign In</button>
       <button onClick={handleSendRequest}>
         Send Request
       </button>
       <button onClick={handleSignOut}>Sign Out</button>
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;

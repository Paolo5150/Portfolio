import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import ChatBox from './components/ChatBox';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>


    <Home></Home>
    
    <ChatBox></ChatBox>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

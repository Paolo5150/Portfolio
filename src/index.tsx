import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import ChatBox from './components/ChatBox';
import Home from './components/Home';

function startKeepAlive() {

    setInterval(function() {
        fetch('https://pf-portfolio-backend.herokuapp.com/checking-in', {
            method: 'POST'
        }).then((res) => { 
          return res.text()
        })
        .then((jsonData) => {
          console.log()

        })
        .catch((err) => {
          console.error(err);
        });
    }, 15* 60 * 1000); // load every 20 minutes
}

startKeepAlive();

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

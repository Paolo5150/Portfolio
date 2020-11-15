import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import ChatBox from './components/ChatBox';
import Home from './components/Home';

var http = require('http'); //importing http

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'https://pf-portfolio.herokuapp.com/',
            port: 80,
            path: '/'
        };
        http.get(options, function(res:any) {
            res.on('data', function(chunk:any) {
                try {
                } catch (err) {
                }
            });
        }).on('error', function(err:any) {
        });
    }, 20 * 60 * 1000); // load every 20 minutes
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

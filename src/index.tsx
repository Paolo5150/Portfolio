import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import {
  BrowserRouter, Route, Switch,
} from "react-router-dom";
import ChatBox from './ChatBox';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route path="/fun">
          <p>Fun</p>
          </Route>
        <Route path="/">
        <p>Home</p>
          </Route>
        <Route path="/home">
        <p>Home</p>
          </Route>          
          </Switch>

    </BrowserRouter>
    <ChatBox></ChatBox>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

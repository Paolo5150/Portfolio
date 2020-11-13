import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import ChatBox from './components/ChatBox';
import Home from './components/Home';
import Fun from './components/Fun';
import { Parallax } from 'react-parallax';
import home2 from './images/home2.jpg'


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>

    <Parallax
      bgImage={home2}
      bgImageAlt="the cat"     
      strength={500}>
      <Navigation></Navigation>
      <div style={{ height:'800px'}}>
      </div>
    </Parallax>
    <Switch>
      <Route path="/fun">
        <Fun></Fun>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>          
    </Switch>
    <ChatBox></ChatBox>
W
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

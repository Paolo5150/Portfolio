import React from 'react';
import logo from './logo.svg';
import './App.css';

let texttt = '';

let address = process.env.dialogFlow || 'https://pf-chatbot.herokuapp.com/dialogflow-in';

export class App extends React.Component {

  setQuery = (text:string) => 
  {
    texttt = text;
  }

  test = () => 
  {
    const req = {
      queryInput: {
       /* event: {
          "name": 'Welcome',
          "languageCode": 'en-US'
        },*/
        text: {          
          text: texttt,
          languageCode: 'en-US',          
        },
      },
    };


    fetch(address, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
  }).then((res) => { 
    return res.text()
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    // handle error for example
    console.error(err);
  });
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p >
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input type="text" onChange={event => this.setQuery(event.target.value)}></input>
          <button style={{width: '100px', height: '100px'}} onClick={this.test}>Click</button>

        </header>
      </div>
    );
  }

}

export default App;

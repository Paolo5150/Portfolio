import React from 'react';
import { Widget, addResponseMessage, toggleWidget, isWidgetOpened, deleteMessages  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import avtr from './avtr.svg';

let address = process.env.dialogFlow || 'https://pf-chatbot.herokuapp.com/dialogflow-in';

export class ChatBox extends React.Component {
    
    openWidgetIfClose = ()=>{
        if(!isWidgetOpened()) {
            toggleWidget();
        }
    }

    closeWidgetIfOpen = ()=>{
        if(isWidgetOpened()) {
            toggleWidget();
        }
    }

    sendReq = (req:object) =>{
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
            addResponseMessage(jsonData);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    sendEventToBot = (eventName:string) => {

        const req = {
            queryInput: {
              event: {
                "name": eventName,
                "languageCode": 'en-US'
              },
            },
          };
          this.sendReq(req);       
    }

    sendMessageToBot = (message:string) => {

        const req = {
            queryInput: {
              text: {          
                text: message,
                languageCode: 'en-US',          
              },
            },
          };

          this.sendReq(req); 

    }

    handleNewUserMessage = (newMessage:string) => {
        this.sendMessageToBot(newMessage);

      };

    componentDidMount(){
        this.closeWidgetIfOpen();        
        deleteMessages(0);
        
        setTimeout(() => {
        this.sendEventToBot('Welcome');
            
        }, 2000);

      }

    render() {
        return (
            <Widget 
            profileAvatar={avtr}
            handleNewUserMessage={this.handleNewUserMessage}
            title="PATONZ"
            fullScreenMode={false}
            subtitle="Your decently trained bot"/>
      
        )
    }
}

export default ChatBox

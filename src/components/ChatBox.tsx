import React from 'react';
import { Widget, addResponseMessage, toggleWidget, isWidgetOpened, deleteMessages  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import avtr from './avtr.svg';
import '../css/chatbot.css'

let address = process.env.dialogFlow || 'https://pf-portfolio-backend.herokuapp.com/dialogflow-in';

interface IState {
  botTitle:string,
  botSubtitle: string
}

interface IProps {

}

export class ChatBox extends React.Component<IProps, IState> {

  constructor(props:any)
  {
    super(props);
    this.state = {
      botTitle: 'Loading...',
      botSubtitle: ''
    }
  }


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

    sendReq = (req:object, onSuccess:()=>void) =>{
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
            onSuccess();
            addResponseMessage(jsonData);
            this.openWidgetIfClose()      

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
          this.sendReq(req, ()=>{
            this.setState({
              botTitle: 'Bot-Man',
              botSubtitle: 'The perfect job interview substitute'
            })

          });       
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

          this.sendReq(req, ()=>{}); 

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
            title={this.state.botTitle}
            fullScreenMode={false}
            subtitle={this.state.botSubtitle}/>
      
        )
    }
}

export default ChatBox

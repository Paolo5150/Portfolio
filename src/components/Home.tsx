import React, {createRef} from 'react';

import {Parallax} from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/index.css';
import '../css/projects.css';
import home2 from '../images/home2.jpg'
import home from '../images/home.jpg'
import Fun from './Fun';
import Navigation from './Navigation';



export class Home extends React.Component {

   

    private myFunRef = createRef<HTMLDivElement>();
    private myContactsRef = createRef<HTMLDivElement>();

   
    

    onNavigationClick = (tab:string):void =>{
        if(tab === 'fun')
            this.myFunRef.current?.scrollIntoView({behavior: 'smooth'});

        if(tab === 'contacts')
            this.myContactsRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    detectScreenSize = ()=>{
        if(window.innerWidth <= 760)
        {
            return 0;
        }
        else
        {
            return 500;
        }
    }
    render() {
        return (
            <div >  
                <Navigation
                navClick={this.onNavigationClick}
                ></Navigation>     
           
  
                <div className="content-section" style={{marginTop: '50px'}}>
                    <Container >
                        <Row >
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                            Hi, name's Paolo.
                            
                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left', fontSize: '0.4em', fontFamily: 'basic', marginTop: '50px',  marginBottom: '50px'}}>
                            I'm a coffee drinker who sits in front of a PC all day. <br/>
                            Oh, I also write code.<br/>
                            Please, talk to the chatbot to know more about me!
                            </Col>
                        </Row>
                    </Container>
                </div>    
                <Parallax
                bgImage={home2}
                bgImageAlt="h1"     
                strength={this.detectScreenSize()}>
                <div style={{ height:'700px'}}/>
                </Parallax>
                <div ref={this.myFunRef}>
                    <Fun></Fun>
                </div>
                <Parallax
                    bgImage={home}
                    bgImageAlt="h1"     
                    strength={this.detectScreenSize()}>
                    <div style={{ height:'700px'}}/>
                </Parallax>
                <div ref={this.myContactsRef}>
                <footer  style={{padding: '20px', backgroundColor: '#aabbbb'}}>
                <Container >
                        <Row >
                            <Col xs="4" lg="6" style={{textAlign: 'center'}}>
                            <p className="fa fa-copyright" >
                                    <span style={{fontFamily: 'free', fontSize: '1.7em'}}> 2020. Paolo Ferri.</span><br/>
                                    <span style={{fontFamily: 'basic', fontSize: '1.2em'}}> paoloferri5150@gmail.com</span>
                                </p>
                            </Col>
                            <Col xs="8" lg="6" style={{textAlign: 'center'}}>
                                <a className="btn btn-social-icon btn-linkedin navLink" href="https://www.linkedin.com/in/paolo-ferri-18aa3680/" target="_blank" rel="noreferrer">
                                    <span className="fa fa-linkedin fa-lg"></span>
                                </a>
                                <a className="btn btn-social-icon btn-github navLink" href="https://github.com/Paolo5150" target="_blank" rel="noreferrer">
                                    <span className="fa fa-github fa-lg"></span>
                                </a>
                            </Col>
                    </Row>
                    </Container>
                </footer>
                </div>
               
            </div>
        )
    }
}

export default Home

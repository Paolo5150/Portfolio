import React from 'react';
import home from '../images/home.jpg'

import {Parallax} from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/index.css';



export class Home extends React.Component {

    mySyle = {
        height: '150px', 
        width: '150px',
        backgroundPosition: 'absolute'
    }

    sttle = {
        height: '150px', 
        width: '150px',
    }
 
    render() {
        return (
            <div >               

               <div className="content-section" style={{height:'500px', position: 'relative'}}>
                    <Container>
                        <Row >
                            <Col xs="12" lg="6" style={{ textAlign: 'center'}} >
                            What's this?
                            </Col>
                            <Col xs="12" lg="6" style={{textAlign: 'center'}}>
                            Another IT site
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Parallax
                bgImage={home}
                bgImageAlt="h1"     
                strength={500}>
                <div style={{ height:'800px'}}/>
                </Parallax>
            </div>
        )
    }
}

export default Home

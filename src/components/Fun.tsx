import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

import ProjectThumb from './ProjectThumb';



export class Fun extends React.Component {

 
    render() {
        return (
            <div style={{marginTop: '100px'}}>
                 <Container fluid>
                <h1 style={{fontFamily: 'Historich', textAlign: 'center', marginBottom: '100px', fontSize: '4em'}} >SOME OF MY WORK</h1>
                        <Row >
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb
                                width={500}
                                height={500}
                                title="3D shooter - Uni project"
                                description="<ul style='list-style-type:none; font-family: free; font-size: 1.5em'><li>C++</li> <li>OpenGL</li></ul>"
                                imgSrc={p1}
                                bckndColor='#aabbbb'
                                ></ProjectThumb>
                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                width={500}
                                height={500}
                                bckndColor='#00000000'
                                title="Virtual instruments trainer"
                                description="<ul style='list-style-type:none; font-family: free; font-size: 1.5em'><li>Unity</li> <li>HTML/CSS</li><li>PhP</li></ul>"
                                imgSrc={p2}></ProjectThumb>
                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                width={300}
                                height={200}
                                bckndColor='#aabbbb'
                                title="Chat bot!"
                                description="<ul style='list-style-type:none; font-family: free; font-size: 1.5em'><li>React</li> <li>Node.js backend</li><li>Dialogflow</li></ul>"
                                imgSrc={p3}></ProjectThumb>
                            </Col>
                        </Row>
                    </Container>         
                
            </div>
        )
    }
}

export default Fun

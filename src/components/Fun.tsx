import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import 'reactjs-popup/dist/index.css';
import ProjectThumb from './ProjectThumb';

import {getIcon} from './TechIcons'


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
                                imgSrc={p1}
                                bckndColor='#aabbbb'
                                techStack={[getIcon('c++','#aabbbb'),getIcon('opengl','#00000000')]}
                                ></ProjectThumb>
                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                width={500}
                                height={500}
                                bckndColor='#00000000'
                                title="Virtual instruments trainer"
                                techStack={[
                                    getIcon('unity','#00000000'),
                                    getIcon('c#','#00000000'),
                                    getIcon('php','#00000000'),
                                    getIcon('html','#00000000'),
                                    getIcon('css','#00000000'),
                                    getIcon('sql','#00000000') ]}
                           
                                imgSrc={p2}></ProjectThumb>
                            </Col>
         
                        </Row>
                    </Container>         
                
            </div>
        )
    }
}

export default Fun

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../css/index.css';
import {getIcon} from './TechIcons'


export class Project_GameEngine extends React.Component {


    render() {
        return (
                <div>
                    <h1>3D Game Engine</h1>

                   <Row>
                       <Col lg="6" xs="12">
                        <div style={{maxWidth: '640px', maxHeight: '480px'}}>
                        <ReactPlayer
                            width="100%"
                            url="https://youtu.be/dvZpJafve2o"/>
                        </div>
                       </Col>
                       <Col lg="6" xs="12">
                       <h2>Tech stack:
                           {getIcon('c++','#00000000')}
                           {getIcon('opengl','#00000000')}
                           </h2>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nihil consectetur distinctio unde dolorem sit asperiores a fuga provident ipsam quibusdam dolor quis iusto porro numquam ab laborum ratione sunt.
                        </Col>
                   </Row>        
                </div>
        )
    }
}

export default Project_GameEngine

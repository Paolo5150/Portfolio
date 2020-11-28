import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../css/index.css';
import '../css/projects.css'

import {getIcon} from './TechIcons'


export class ProjectGameEngine extends React.Component {


    render() {
        return (
                <div>
                    <h1 className="project-modal-title">3D Game Engine</h1>

                   <Row>
                       <Col lg="6" xs="12">
                       <div className="project-video-container" >
                            <div className="project-video" >
                                <ReactPlayer
                                    width="100%"
                                    url="https://youtu.be/dvZpJafve2o"/>
                            </div>
                        </div>
                       </Col>
                       <Col lg="6" xs="12">
                       <h2>Tech stack:
                           {getIcon('c++','#00000000')}
                           {getIcon('opengl','#00000000')}
                           {getIcon('lua','#00000000')}

                           </h2>
                           <p className="modal-project-description">
                               One of our university projects, this is a 3D game engine developed from scratch...with a game on top. <br/>
                               The whole thing was built in C++ and OpenGL 4.3. Additionally, we integrated some Lua scripting to speed things up a little. <br/><br/>
                               One of my favourite things to do is to write shaders, and in this project I had quite a bit of fun writing the water shader. Still not 
                               super perfect, but looks decent.<br/>
                               Other features include A* pathfinding, based on a grid of nodes, state machine AI, entity component system for the engine and scene management.

                           </p>
                        </Col>
                   </Row>        
                </div>
        )
    }
}

export default ProjectGameEngine

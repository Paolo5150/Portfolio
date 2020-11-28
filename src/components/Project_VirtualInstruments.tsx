import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../css/index.css';
import '../css/projects.css'

import {getIcon} from './TechIcons'

export class ProjectVirtualInstruments extends React.Component {

    

    render() {
        return (
                <div>
                    <h1 className="project-modal-title">Virtual Instruments Trainer</h1>

                   <Row>
                       <Col lg="6" xs="12">
                           <div className="project-video-container" >
                            <div className="project-video" >
                                <ReactPlayer
                                    width="100%"
                                    url="https://www.youtube.com/watch?v=30whZemRvF8&feature=youtu.be"/>
                            </div>
                           </div>
                        
                       </Col>
                       <Col lg="6" xs="12">
                           <h2>Tech stack:
                           {getIcon('unity','#00000000')}
                           {getIcon('c#','#00000000')}
                           {getIcon('php','#00000000')}
                           {getIcon('html','#00000000')}
                           {getIcon('css','#00000000')}
                           {getIcon('sql','#00000000')}
                           {getIcon('javascript','#00000000')}

                           </h2>
                           <p className="modal-project-description">
                               Another interesting university project. <br/>
                               This was a group project that would require us to deliver a "real world" application to a real client. <br/>
                               Our client was the College of Veterinary Medicine at Murdoch University. <br/>
                               In summary, the app is a simple simulation that aims to train students to recognize surgical instruments.
                               <br/><br/>
                               The project consists of 2 major components: the simulation, created in Unity, and the website, made with all the most classic web technologies.
                               Users can play the game in different scenarios: Select By Name, Select By Purpose and Instrument Positioning.
                               The three modes have specific training goals and, while in "Training mode", students can try as many times as they want.
                               While playing, the application collects information about the performance of the students, primarily checking how many errors are made.
                               A full report is then visible online, on the website.
                               Regular users can use the simulation app and view their results online, they have no admin priviliges.
                               <br/>
                               Administratos users, on the other hand, can also do some extra things, including creating new accounts, collect the full database data (for analysis purpose)
                               they can view results of students, provided that "Assessment mode" was enabled: in this mode, students will have to go through all 3 scenarios and will get a single attempt.
                               Results will be available on the website for them, as well as for lecturers.
                               
                               

                           </p></Col>
                   </Row>        
                </div>
        )
    }
}

export default ProjectVirtualInstruments

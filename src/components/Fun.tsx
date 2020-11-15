import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import 'react-responsive-modal/styles.css';
import '../css/index.css'

import ProjectThumb from './ProjectThumb';
import {getIcon} from './TechIcons'
import { Modal } from 'react-responsive-modal';
import Project_VirtualInsturments from './Project_VirtualInstruments'
import Project_GameEngine from './Project_GameEngine'

interface IProps {
}

interface State {
    open:boolean,
    projectID:string
}

export class Fun extends React.Component<IProps,State> {       
    constructor(props:any) {
        super(props)
        this.state = { open: false, projectID:'' };
    }

    //Reset state when closing modal
    closeModal = (op:boolean) => {
        this.setState({ open: op, projectID: '' });
      };

      //Custom Modal style, CSS styling wouldn't work
      modalStyle = {
          backgroundColor: '#aabbbbff',
          width: window.innerWidth * 0.9,
          maxWidth: window.innerWidth,
          borderRadius: '5px'
      }

      overlayStyle = {
        backgroundColor: '#222222ee'
      }

      //Update project id to be rendered in modal
    projectClicked = (id:string)=>{
        this.setState({ open: true, projectID:id});       
    }

    getPRojectComponent = ()=>{
        if(this.state.projectID === 'p1')
        {
            return <Project_GameEngine></Project_GameEngine>
        }
        else if(this.state.projectID === 'p2')
        {
           return <Project_VirtualInsturments>
               </Project_VirtualInsturments>
        }
    }

    render() {
        return (
            <div style={{marginTop: '50px'}}>

            <Modal styles={{
                modal: this.modalStyle,    
                overlay: this.overlayStyle            
                }}

                center
                open={this.state.open} onClose={() => this.closeModal(false)}>
               <Container fluid>
                    <div style={{fontFamily: 'basic'}}>
                         {
                             this.getPRojectComponent()
                         }
                    </div>
                    </Container>
            </Modal>
                    
                 <Container fluid>
                 
                <h1 style={{fontFamily: 'Historich', textAlign: 'center', marginBottom: '50px', fontSize: '4em'}} >SOME OF MY WORK</h1>
                        <Row >
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>                          
                            
                                <ProjectThumb
                                id="p1"
                                clickCallback = {this.projectClicked}
                                width={400}
                                height={400}
                                title="3D shooter - Uni project"
                                imgSrc={p1}
                                description="A 3D FPS game developed from scratch in C++ and OpenGL. Lots of shader programming going on!"
                                bckndColor='#aabbbb'
                                techStack={[getIcon('c++','#aabbbb'),getIcon('opengl','#00000000')]}>
                                </ProjectThumb>

                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                id="p2"
                                clickCallback = {this.projectClicked}
                                width={500}
                                height={500}
                                bckndColor='#00000000'
                                description="A simulation that aims to train veterinary students to recognize surgrical instruments. Developed for the medical school at university"

                                title="Virtual instruments trainer - Uni project"
                                techStack={[
                                    getIcon('unity','#00000000'),
                                    getIcon('c#','#00000000'),
                                    getIcon('php','#00000000'),
                                    getIcon('html','#00000000'),
                                    getIcon('css','#00000000'),
                                    getIcon('sql','#00000000'),
                                    getIcon('javascript','#00000000') ]}
                           
                                imgSrc={p2}></ProjectThumb>
                            </Col>
         
                        </Row>
                    </Container>         
                    
                
            </div>
        )
    }
}

export default Fun

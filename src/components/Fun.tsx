import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../images/p1/p1.png'
import p2 from '../images/p2/p2.png'
import p3 from '../images/p3/p3_6.png'
import p4 from '../images/p4/p4_2.png'
import 'react-responsive-modal/styles.css';
import '../css/index.css'

import ProjectThumb from './ProjectThumb';
import {getIcon} from './TechIcons'
import { Modal } from 'react-responsive-modal';
import ProjectVirtualInstruments from './Project_VirtualInstruments'
import ProjectGameEngine from './Project_GameEngine'
import ProjectAndroidOpenGL from './Project_AndroidOpenGL'
import ProjectStocktaking from './Project_Stocktake'

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
            return <ProjectGameEngine></ProjectGameEngine>
        }
        else if(this.state.projectID === 'p2')
        {
           return <ProjectVirtualInstruments>
               </ProjectVirtualInstruments>
        }
        else if(this.state.projectID === 'p3')
        {
           return <ProjectStocktaking>
               </ProjectStocktaking>
        }
        else if(this.state.projectID === 'p4')
        {
           return <ProjectAndroidOpenGL>
               </ProjectAndroidOpenGL>
        }
    }

    render() {
        return (
            <div style={{marginTop: '20px'}}>

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
                    
                 <Container >
                 
                <h1 style={{fontFamily: 'Historich', textAlign: 'center', marginBottom: '50px', fontSize: '4em'}} >The fun part</h1>
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
                                techStack={[getIcon('c++','#aabbbb'),getIcon('opengl','#00000000'),getIcon('lua','#00000000')]}>
                                </ProjectThumb>

                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                id="p2"
                                clickCallback = {this.projectClicked}
                                width={500}
                                height={500}
                                bckndColor='#aabbbb'
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
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                id="p3"
                                clickCallback = {this.projectClicked}
                                width={150}
                                height={150}
                                bckndColor='#aabbbb'
                                description="A simple stocktaking application"

                                title="Stocktaking App"
                                techStack={[
                                    getIcon('java','#00000000'),
                                    getIcon('android','#00000000'),
                                    getIcon('sql','#00000000')  ]}                           
                                imgSrc={p3}></ProjectThumb>
                            </Col>
                            <Col xs="12" lg="12" style={{textAlign: 'left'}}>
                                <ProjectThumb 
                                id="p4"
                                clickCallback = {this.projectClicked}
                                width={500}
                                height={500}
                                bckndColor='#aabbbb'
                                description="Small personal project, I wanted to experience creating a simple 3D renderer in Java, on Android."

                                title="OpenGL renderer"
                                techStack={[
                                    getIcon('java','#00000000'),
                                    getIcon('android','#00000000'),
                                    getIcon('opengl','#00000000')]}                           
                                imgSrc={p4}></ProjectThumb>
                            </Col>
         
                        </Row>
                    </Container>         
                    
                
            </div>
        )
    }
}

export default Fun

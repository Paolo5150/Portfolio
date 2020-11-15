import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import 'react-responsive-modal/styles.css';
import '../css/index.css'

import ProjectThumb from './ProjectThumb';
import {getIcon} from './TechIcons'
import { Modal } from 'react-responsive-modal';

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
          backgroundColor: 'red',
          width: window.innerWidth,
          maxWidth: window.innerWidth
      }

      //Update project id to be rendered in modal
    projectClicked = (id:string)=>{
        this.setState({ open: true, projectID:id});       
    }

    getPRojectComponent = ()=>{
        if(this.state.projectID === 'p1')
        {
            return <div>P1</div>
        }
        else if(this.state.projectID === 'p2')
        {
            return <div>P2</div>
        }
    }

    render() {
        return (
            <div style={{marginTop: '50px'}}>

            <Modal styles={{
                modal: this.modalStyle
                }}
                center
                open={this.state.open} onClose={() => this.closeModal(false)}>
                    <h1>{this.state.projectID}</h1>
                    <div>
                         {
                             this.getPRojectComponent()
                         }
                    </div>
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

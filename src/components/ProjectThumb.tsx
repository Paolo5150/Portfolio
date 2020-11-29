import React, { createRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/index.css'

interface Props {
    id: string,
    title: string,
    imgSrc: string,
    width: number,
    height: number,
    bckndColor: string,
    techStack: Array<Element>
    description: string
    clickCallback: (id:string)=>void
}

export class ProjectThumb extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.state = {
            renderDescription: false,
        };
      }

      private buttonRef = createRef<HTMLDivElement>();

      renderIcons = ()=>{
          return (
          <div>
              {
                this.props.techStack.map( (icon, index) =>(

                    <span key={index}>{icon}</span>
                ) )
              }
          </div>)
      }

      btnStyle = {
          width : '100%'
      }

    render() {
        return (
            <ScrollAnimation    delay={5}
            animateIn="slideInUp">
            <div className="project-thumb-container" style={{padding: '10px', margin: '15px', borderRadius: '20px'}}> 
               <Container fluid>
                        <Row >
                            <Col xs="12" lg="12" >
                                <div style={{width: this.props.width, maxWidth: '100%', margin: 'auto'}} >
                                    <img src={this.props.imgSrc} width='100%' alt="Thumb" style={{objectFit: 'contain'}}></img>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ fontFamily: 'basic'}}>
                        <h3 style={{textAlign: 'center',marginTop: '20px', marginBottom: '20px', fontWeight: 'bold', width: '100%'}}>{this.props.title}</h3>

                        </Row>
                        <Row>
                        <Col xs="12" lg="12" style={{textAlign: 'left', fontFamily: 'basic'}}>
                                <div style={{margin: 'auto', textAlign: 'center'}}>
                                {
                                    this.renderIcons()
                                }
                                </div>
                                <p style={{fontSize: '1.3em', paddingTop: '20px', paddingBottom: '20px', marginBottom: '30px'}}>{this.props.description}</p>
                                <div style={{textAlign: 'center'}} ref={this.buttonRef}>
                                    <button   onClick={()=>{this.props.clickCallback(this.props.id)}}
                                        style={{ bottom: 0, width: '80px', height: '30px', borderRadius: '20px'}}>View</button>

                                </div>

                            </Col>
                        </Row>
                           
                
                    </Container>      
            </div>
            </ScrollAnimation>
        )
    }
}

export default ProjectThumb

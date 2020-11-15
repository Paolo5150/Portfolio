import React from 'react';
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


      renderIcons = ()=>{
          return (
          <div>
              {
                this.props.techStack.map( (icon) =>(
                    <span>{icon}</span>
                ) )
              }
          </div>)
      }

    render() {
        return (
            <div className="project-thumb-container" style={{padding: '50px', margin: '0',backgroundColor: this.props.bckndColor}} > 
               <Container fluid>
                        <Row >
                            <Col xs="12" lg="6" style={{textAlign: 'left'}}>
                                <div style={{width: this.props.width, maxWidth: '100%', margin: 'auto'}} onClick={()=>{console.log('asd')}}>
                                    <img src={this.props.imgSrc} width='100%'></img>
                                </div>
                            </Col>
                            <Col xs="12" lg="6" style={{textAlign: 'left', fontFamily: 'basic'}}>
                                <h1>{this.props.title}</h1>
                                {
                                    this.renderIcons()
                                }
                                <p style={{fontSize: '1.3em', paddingTop: '20px', paddingBottom: '20px'}}>{this.props.description}</p>
                                <button onClick={()=>{this.props.clickCallback(this.props.id)}}
                                style={{position: 'absolute', bottom: 0, width: '80px', height: '30px'}}>View</button>

                            </Col>
                        </Row>
                    </Container>      
            </div>
        )
    }
}

export default ProjectThumb

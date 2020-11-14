import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/index.css'
var HtmlToReactParser = require('html-to-react').Parser;

interface Props {
    title: string,
    imgSrc: string,
    description: string,
    width: number,
    height: number,
    bckndColor: string
}

interface MyState {
    renderDescription: boolean,
  }

  var htmlToReactParser = new HtmlToReactParser()

export class ProjectThumb extends React.Component<Props, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            renderDescription: false,
        };
      }

    render() {
        return (
            <div className="project-thumb-container" style={{padding: '50px', margin: '0',backgroundColor: this.props.bckndColor}} > 
               <Container fluid>
                        <Row >
                            <Col xs="12" lg="6" style={{textAlign: 'left'}}>
                                <div style={{width: this.props.width, maxWidth: '100%', margin: 'auto'}}>
                                    <img src={this.props.imgSrc} width='100%'></img>
                                </div>
                            </Col>
                            <Col xs="12" lg="6" style={{textAlign: 'left', fontFamily: 'basic'}}>
                                <h1>{this.props.title}</h1>
                                <div style={{fontSize: '1.2em'}}>
                                    {htmlToReactParser.parse(this.props.description)}

                                </div>
                            </Col>
                        </Row>
                    </Container>      
            </div>
        )
    }
}

export default ProjectThumb

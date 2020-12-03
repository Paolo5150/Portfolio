import React, { createRef } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/index.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

interface Props {
    id: string,
    title: string,
    imgSrc: string,
    width: number,
    height: number,
    bckndColor: string,
    techStack: Array<Element>
    description: string
    slideIn: string
    clickCallback: (id:string)=>void
}

export class ProjectThumb extends React.Component<Props> {

    sliderRef:any = null;
    constructor(props: any) {
        super(props);
        this.sliderRef = React.createRef()

        this.state = {
            renderDescription: false,
        };
      }



      images = [
        {
          original: this.props.imgSrc,
        },
        {
            original: this.props.imgSrc,
        }

      ];

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
            animateIn={this.props.slideIn}>
            {/*<div className="project-thumb-container" style={{padding: '10px', margin: '15px', borderRadius: '20px'}} 
            onMouseOver={()=>{this.sliderRef.current.play()}}
            onMouseLeave={()=>{this.sliderRef.current.pause()}}> */}
            <div className="project-thumb-container" style={{padding: '10px', margin: '15px', borderRadius: '20px'}}>
               <Container fluid>
                        <Row >
                            <Col xs="12" lg="12" >
                                <div style={{width: this.props.width, maxWidth: '100%', margin: 'auto'}} >
                                    <ImageGallery
                                    slideInterval={1000}
                                    ref = {this.sliderRef}
                                    items={this.images} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showBullets={false} showNav={false}/>
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
                                <div style={{textAlign: 'center'}}>
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

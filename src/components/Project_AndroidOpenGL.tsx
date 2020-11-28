import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/index.css';
import '../css/projects.css'
import ImageGallery from 'react-image-gallery';
import {getIcon} from './TechIcons'
import "react-image-gallery/styles/css/image-gallery.css";

import p1 from '../images/p4/p4_1.png'
import p2 from '../images/p4/p4_2.png'
import p3 from '../images/p4/p4_3.png'
import p4 from '../images/p4/p4_4.png'

export class ProjectAndroidOpenGL extends React.Component {

    images = [
        {
          original: p1,
          thumbnail: p1
        },
        {
            original: p2,
            thumbnail: p2
        },
        {
            original: p4,
            thumbnail: p4
        },
       
      ];

    render() {
        return (
                <div>
                    <h1 className="project-modal-title">OpenGL renderer</h1>

                   <Row>
                       <Col lg="6" xs="12">
                        <ImageGallery items={this.images} showFullscreenButton={false} showPlayButton={false}/>
                       </Col>
                       <Col lg="6" xs="12">
                           <h2>Tech stack:
                           {getIcon('java','#00000000')}
                           {getIcon('android','#00000000')}  
                           {getIcon('opengl','#00000000')}      


                           </h2>
                           <p className="modal-project-description">
                               This small personal project was just a way to satisfy my curiosity.<br/><br/>
                               As a passionate graphics programmer, I wanted to explore different approaches into writing a 3D renderer, so I tried creating one in Java, for the Android platform.
                               <br/>
                               All this was done way before the Android NDK becaome what it is now, and my goal was really to experiment writing a small graphics engine in Java. <br/>
                               I found it much different from my usual working environment when it comes to graphics (that being C++), and I still much prefer using lower level technologies 
                               when it comes to building real time rendering applications.
                               <br/>
                               Because of the nature of graphics programming, you often find yourself dealing with "bytes" directly, so languanges such as C and C++ fell much more suitable for the job.
                               <br/><br/>
                               Still, my curiosity was indeed satisfied.
                               <br/>
                               Nowadays, I'm turning my attention to what I believe is going to be the next big thing in graphics (which has already started really): Vulkan.
                               <br/>
                               One of my TODO experiment in a hopefully-not-too-far-future is to create a 3D renderer, for Android, in Vulkan, only this time, using the Android NDK, so I cna take full advantage
                               of C++ which, as I said, it's the best choice, in my opinion, for coding graphics.
                           </p></Col>
                   </Row>        
                </div>
        )
    }
}

export default ProjectAndroidOpenGL

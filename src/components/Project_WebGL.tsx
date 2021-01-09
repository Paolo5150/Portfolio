import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/index.css';
import '../css/projects.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import {getIcon} from './TechIcons'

import p1 from '../images/p5/p5_1.png'
import p2 from '../images/p5/p5_2.png'
import p3 from '../images/p5/p5_3.png'
import p4 from '../images/p5/p5_4.png'
import p5 from '../images/p5/p5_5.png'

export class ProjectStocktake extends React.Component {

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
            original: p3,
            thumbnail: p3
        },
        {
            original: p4,
            thumbnail: p4
        },
        {
            original: p5,
            thumbnail: p5
        }       
      ];

    render() {
        return (
                <div>
                    <h1 className="project-modal-title">WebGL PBR Renderer</h1>

                   <Row>
                       <Col lg="6" xs="12">
                        <ImageGallery items={this.images} showFullscreenButton={true} showPlayButton={false}/>
                       </Col>
                       <Col lg="6" xs="12">
                           <h2>Tech stack:
                           {getIcon('javascript','#00000000')}
                           {getIcon('opengl','#00000000')}  
                           {getIcon('html','#00000000')}
                           </h2>
                           <br/>
                           <h3>Link to app: <a target="_blank" href="https://paolo5150.github.io/WebGLRenderer.github.io/">here!</a></h3>

                           <p className="modal-project-description">
                            I'm very passionate about computer graphics, you know, vertices, shaders, lighting and so on.
                            Nowadays, one of the most popular techniques used in computer graphics is physically based rendering, or PBR for short.
                            <br/>
                            <br/>
                            Well, that's probably debateable...ray tracing is quickly making all this obsolete.
                            <br/>
                            <br/>       
                            Still, I wanted to try my own implementation of a PBR renderer to 'wow' myself with fantasitc, realistic graphics.
                            <br/>
                            <br/>
                            I like the result: I'm particularly happy with the look of the metal sphere, especially when the HDR background is loaded and you can see the reflections of the surrouding
                            lights (sampled from the environment).
                            I was also quite curious to see what WebGL could do, as I normally code OpenGL in C++.
                            Well, I was very pleased with the web version of the graphics API, and it pairs well with javascript
                            <br/>
                            <br/>
                            Some of the features in the app:
                            <ul>
                                    <li>Directional light</li>
                                    <li>Point light</li>
                                    <li>Shadows (from both directional and point light)</li>
                                    <li>Model loading (courtesy of Babylon.js)</li>
                                    <li>PBR materials, using albedo, normal, roughness, metallic and ambient occlusion maps</li>
                                    <li>Image based lighting, using HDR format for environment</li>
                                    <li>Tone mapping</li>
                                    <li>Bloom post processing</li>
                                </ul>


                           </p></Col>
                   </Row>        
                </div>
        )
    }
}

export default ProjectStocktake

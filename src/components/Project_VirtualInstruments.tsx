import React, { Props } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import '../css/index.css';


export class Project_VirtualInstruments extends React.Component {


    render() {
        return (
                <div>
                    <h1>Virtual Instruments Trainer</h1>

                   <Row>
                       <Col lg="6" xs="12">
                        <div style={{maxWidth: '640px', maxHeight: '480px'}}>
                        <ReactPlayer
                            width="100%"
                            url="https://www.youtube.com/watch?v=30whZemRvF8&feature=youtu.be"/>
                        </div>
                       </Col>
                       <Col lg="6" xs="12">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nihil consectetur distinctio unde dolorem sit asperiores a fuga provident ipsam quibusdam dolor quis iusto porro numquam ab laborum ratione sunt.
                        </Col>
                   </Row>        
                </div>
        )
    }
}

export default Project_VirtualInstruments

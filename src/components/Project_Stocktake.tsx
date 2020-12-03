import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/index.css';
import '../css/projects.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import {getIcon} from './TechIcons'

import p1 from '../images/p3/p3_1.png'
import p2 from '../images/p3/p3_2.png'
import p4 from '../images/p3/p3_4.png'
import p5 from '../images/p3/p3_5.png'
import p6 from '../images/p3/p3_6.png'
import p7 from '../images/p3/p3_7.png'
import p8 from '../images/p3/p3_8.png'
import p9 from '../images/p3/p3_9.png'
import p10 from '../images/p3/p3_10.png'

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
            original: p4,
            thumbnail: p4
        },
        {
            original: p5,
            thumbnail: p5
        },
        {
            original: p6,
            thumbnail: p6
        },
        {
            original: p7,
            thumbnail: p7
        },
        {
            original: p8,
            thumbnail: p8
        },
        {
            original: p9,
            thumbnail: p9
        },
        {
            original: p10,
            thumbnail: p10
        }
      ];

    render() {
        return (
                <div>
                    <h1 className="project-modal-title">Simple Stocktaking App</h1>

                   <Row>
                       <Col lg="6" xs="12">
                        <ImageGallery items={this.images} showFullscreenButton={false} showPlayButton={false}/>
                       </Col>
                       <Col lg="6" xs="12">
                           <h2>Tech stack:
                           {getIcon('java','#00000000')}
                           {getIcon('android','#00000000')}  
                           {getIcon('sql','#00000000')}      


                           </h2>
                           <p className="modal-project-description">
                               My very first "real world" project. <br/>
                               Also, my first experience in OOP. <br/>
                               This is a small application I worked on a while ago, and really, looking back at the code now it's a little....cringy. And yes, it's definitely not the prettiest app you'll ever see.
                               After all, this was my introduction to Android development. <br/>
                               <br/>
                               At the time, I was working in a restaurant, and I noticed something interesting: every Sunday, the duty manager in charge on that day, had to do the stock take of all the drinks available on premise. <br/>
                               This would require them to count every bottle, can or barrel of whatever drinks, in the different locations (the restaurant, the bar, the cellar and so on), and at the end, do a full count of each item and calculate the amount to order for the rest of the week. <br/>
                                <br/>
                               The whole process would normally take a full day.
                               <br/>
                               <br/>
                               I then came up with this simple app: users can enter items very quickly, populating a database, selecting different locations, units of measure of the particular drink (eg. litres, cans, bottles). For each item, it's possible to edit all the properties, including the "top stock" value: how much of that item we should keep on premise.
                               <br/>
                               The app can then show you a full list of all the drinks entered (in a printable PDF), the total amount (displayed by location or category) and the amount required to order.
                               <br/>
                               Simple and efficient.
                               <br/>
                               <br/>
                                When I had a demoable version, testing was quite successful: the stock taking process only required 2 hours.
                               <br/>
                               <br/>
                                Other features include:
                                <br/>
                                <ul>
                                    <li>Ability to share the database</li>
                                    <li>Load items from external file</li>
                                    <li>Edit all items properties in the database (name, unit of measure, price, top stock and so on)</li>
                                    <li>Ability to open previously generated PDF</li>
                                    <li>Add/update users and location properties</li>
                                </ul>

   
                               
                               

                           </p></Col>
                   </Row>        
                </div>
        )
    }
}

export default ProjectStocktake

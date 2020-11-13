import React from 'react';
import { Parallax } from 'react-parallax';
import home2 from '../images/home2.jpg'



export class Fun extends React.Component {

 
    render() {
        return (
            <div >               
                
                <div style={{height:'500px'}}>
                    Write here
                </div>
                <Parallax
                bgImage={home2}
                bgImageAlt="the cat"     
                strength={500}>
                <div style={{ height:'800px'}}/>
                </Parallax>
            </div>
        )
    }
}

export default Fun

import React from 'react';
import home from './images/home.jpg'

import {Parallax} from 'react-parallax';


export class Home extends React.Component {

 
    render() {
        return (
            <div >               

                <div style={{height:'500px'}}>
                    Write here
                </div>
                <Parallax
                bgImage={home}
                bgImageAlt="the cat"     
                strength={500}>
                <div style={{ height:'800px'}}/>
                </Parallax>
            </div>
        )
    }
}

export default Home

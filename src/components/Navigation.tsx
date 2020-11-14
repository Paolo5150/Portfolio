import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../css/index.css';
import '../css/navigation.css';

interface Props {
    navClick: (tab:string) =>void;
}




export class Navigation extends React.Component<Props> {

    navigationClick = (ev:any) =>{
    }
 
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#77777700'}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto" style={{ flex: 1}}>
                        <p className="navLink" onClick={ ()=>{this.props.navClick('home')} } >Home</p> 
                        <p className="navLink" onClick={ ()=>{this.props.navClick('fun')} } >Fun</p> 
                        <p className="navLink" onClick={ ()=>{this.props.navClick('contacts')} } >Contacts</p> 

                        </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation

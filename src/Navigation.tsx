import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './index.css';
import './navigation.css';



export class Navigation extends React.Component {

 
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#77777700'}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto justify-content-center" style={{ flex: 1}}>
                        <Link className="navLink" to="/" >Home</Link> 
                        <Link className="navLink" to="/fun">Fun</Link>
                        <Link className="navLink" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation

import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


export class Navigation extends React.Component {

 
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#777777aa'}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="navLink" to="/">Home</Link> 
                        <Link className="navLink" to="/fun">Fun</Link>
                        <Link className="navLink" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation

import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";


function HeaderNav() {

    const navStyle = {
        color: "#fff", 
        textDecoration: "none"
    }

    return (
        <div>
            <Navbar className="header" variant="dark" fixed="top">
            <Navbar.Brand className="headerlogo"> Keeper </Navbar.Brand>
            <Nav>
                <Nav.Link className="navlink"> <NavLink style={navStyle} exact to="/add"> Add Notes</NavLink> </Nav.Link>
                <Nav.Link className="navlink"> <NavLink style={navStyle} exact to="/all"> All Notes</NavLink> </Nav.Link>
                <Nav.Link className="navlink"> <NavLink style={navStyle} exact to="/about"> About </NavLink> </Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default HeaderNav;
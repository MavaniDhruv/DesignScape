import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Tb360View } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home" ><div className='logo'><Tb360View />DesignScape</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Design Tools" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Pricing</Nav.Link>
          <NavDropdown title="Inspiration" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing"><div className='bussined-word'>Bussiness</div></Nav.Link>
          <NavDropdown title="Resources" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">DesignScape App</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link><div className='notification-icon'><MdOutlineNotificationsNone /></div></Nav.Link>
          <Nav.Link><div  className='user-icon'><FaUser /></div></Nav.Link>
          <Nav.Link href="#deets"><div className='header-btn-1'>Marketplace</div></Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <div className='header-btn-2'>
            <span class="rotate-text">Get Started</span>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header;
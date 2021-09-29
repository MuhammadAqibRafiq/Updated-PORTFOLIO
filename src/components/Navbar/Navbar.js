import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./Navbar.css";
import Logo from './logo.png'


const Navba = () => {

  return (
    
    <Navbar collapseOnSelect expand="lg"  className='pa' sticky="top"  data-aos="fade-up">

      <Navbar.Brand style={{ marginLeft: "20px" }} id='one' >
      {/* <h1 className='navright'> AQIB '</h1> */}
      <Nav.Link  href="/">  <img src={Logo} width='100px' alt=''/></Nav.Link>

      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav three" >
        <Nav className="justify-content-end a" style={{ width: "100%" }}>
          <Nav.Link  href="#Home">HOME</Nav.Link>
          <Nav.Link  href="#About" >ABOUT</Nav.Link>
          <Nav.Link  href="#Project" >PROJECT</Nav.Link>
          <Nav.Link  href="#Contact" >CONTACT</Nav.Link>
          <Nav.Link  href="#Skills" >SKILLS</Nav.Link>

        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default Navba
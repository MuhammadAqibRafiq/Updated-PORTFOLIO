import React from 'react';
import HomeRight from './home-right.png'
import { Container, Row, Col, Button } from "react-bootstrap"
import "./home.css";
import Pdf from './Resume.pdf'

export default function Home() {
  return (
    <div className='home' id='Home'>
      <Container>
        <Row>

          <Col >
            <h3 className='home-title pt-5'>HELLO</h3>
            <h1 className='home-desc'>I am Aqib Rafiq</h1>
            <h5 className='home-job'>REACT JS DEVELOPER</h5>
            <Button className='hire-bt' style={{ marginLeft: "10px" }} href='#Contact'>Hire Me</Button>
            <Button style={{ marginLeft: "10px" }} variant="outline-secondary" href={Pdf} target="_blank" >Get CV</Button>


          </Col>

          <Col className='colhome'> <img src={HomeRight} alt='' className="d-flex justify-content-center" style={{ width: "100%"}} /></Col>

        </Row>
      </Container>
    </div>
  )
}

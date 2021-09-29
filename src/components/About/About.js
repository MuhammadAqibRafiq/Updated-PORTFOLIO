import React from 'react'

import { Container, Row, Col, Button } from "react-bootstrap"
import AboutLeft from './aboutleft.png'
import './about.css'
import Pdf from './resume.pdf'


function About() {
   
    return (
        <div id='About' >
            <Container data-aos="flip-up">
                <Row>
                    <Col className='colabout'> <img src={AboutLeft} style={{ width: "100%" }} alt=''/></Col>

                    <Col>
                        <h3 className='about-title pt-5'>LET’S INTRODUCE ABOUTMYSELF</h3>

                        <p className='about-desc pt-3'>Hi, my name is Muhammad Aqib Rafiq I'm a front end developer.
                            I describe myself as a passionate developer who loves coding ❤️
                            and ready to work on good project with passion</p>

                        <Button className="abhire-btn" style={{ marginLeft: "10px" }} href={Pdf} target="_blank" >Get CV</Button>

                    </Col>

                </Row>
            </Container>
        </div>

    )
}
export default About
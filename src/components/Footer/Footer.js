import React from 'react'
import { Container, Col } from "react-bootstrap"
import './footer.css'
import Logo from './logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const footer = () => {
    return (
        <div id='Contact'>
            <Container>
                <Col>
                    <div className="d-flex justify-content-center mt-4"> <img src={Logo} width='150px' alt=''/> </div>
                    <h4 className="d-flex justify-content-center mt-4">FOLLOW ME</h4>


                    <section className="d-flex justify-content-center mt-4">

                        <a className="btn btn-outline-secondary btn-floating m-2" href="https://www.linkedin.com/in/aqib-rafiq-2a3b65213/" target="_blank" rel="noreferrer" role="button">
                            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "18px", marginTop: "7px" }} />
                        </a>

                        <a className="btn btn-outline-secondary btn-floating m-2" href="https://github.com/MuhammadAqibRafiq" target="_blank"  rel="noreferrer" role="button">
                            <FontAwesomeIcon  icon={faGithub} style={{ fontSize: "24px", paddingTop: "7px" }} />
                        </a>

                        <a className="btn btn-outline-secondary btn-floating m-2" href="https://www.facebook.com/aqibrafiq11" target="_blank"  rel="noreferrer" role="button">
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "18px", marginTop: "7px" }} />
                        </a>
                    </section>

                    <p className="d-flex justify-content-center mt-4 mb-4">Copyright ©2021 All rights reserved </p>
                </Col>
            </Container>
        </div>
    )
}

export default footer

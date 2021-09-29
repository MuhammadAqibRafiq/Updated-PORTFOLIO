import React from 'react';
import { Container } from 'react-bootstrap';
import Skill from './skills.png'
// import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer'


export default function Skills() {
    return (
        <div id='Skills'  data-aos="flip-down">
        
            <Container  className='mt-3 mb-5'>
                <img src={Skill} width='100%' alt='' />
                <h5>
                    <ul style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center" }}>
                        <li>JAMSTACK</li>
                        <li>HEADLESS CMS</li>
                        <li>Progressive Web App</li>
                        <li>NETLIFY</li>
                        <li>NETLIFY FUNCTION</li>
                        <li>REDUX</li>
                        <li>GATSBY</li>
                        <li>REACT JS</li>
                        <li>FIREBASE</li>
                        <li>FAUNADB</li>
                        <li>GRAPHQL</li>
                        <li>BOOTSTRAP</li>
                        <li>CSS</li>
                    </ul>
                </h5>
            </Container>
         


        </div>
    )
}

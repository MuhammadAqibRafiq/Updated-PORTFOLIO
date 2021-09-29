import React, { useState } from 'react'
import { Container, Row, Card, Button } from "react-bootstrap"
import Covid from './images/Covid-tracker-app.jpg'
import Quiz from './images/quiz.png'
import Blog from './images/blog.png'
import Bookmark from './images/bookmark.png'
import Lolly from './images/lolly.png'
import Todo from './images/todo.png'
import Form from './images/form.png'
import './project.css'



const Project = () => {

const [show, setShow] = useState(false);

  return (
    <div className='mt-5'>
      <Container id='Project' >
        <h2 className='mt-2 mb-1'>RECENTLY DONE PROJECT</h2>

        <Row xs={1} md={3} className="g-4 row">

          <Card className="cards" >
            <a href='https://bootcamp2020.netlify.app/' target="_blank" rel="noreferrer" >
              <Card.Img className='cardimg' src={Blog} />
            </a>
            <Card.Body>
              <Card.Title className="cardtitle" >BLOG</Card.Title>
              <Card.Text>
                <a href='https://youtu.be/raXWhg4F_5M'>DEMO VIDEO</a>
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className="cards">
            <a href='https://appbookmark.netlify.app/' target="_blank" rel="noreferrer">
              <Card.Img className='cardimg' src={Bookmark} />
            </a>
            <Card.Body>
              <Card.Title className="cardtitle" >BOOKMARK APP</Card.Title>
              <Card.Text >
                <a href='https://youtu.be/rmFw9SNuZFo'>DEMO VIDEO</a>
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className="cards">
            <a href='https://lollyapp.netlify.app/' target="_blank" rel="noreferrer">
              <Card.Img className='cardimg' src={Lolly} />
            </a>
            <Card.Body>

              <Card.Title className="cardtitle" >VIRTUALL LOLLY</Card.Title>

              <Card.Text >
                <a href='https://www.youtube.com/watch?v=iKydTwHxGDI'>DEMO VIDEO</a>
              </Card.Text>
            </Card.Body>
          </Card>


          {show ? <>
            <Card className="cards">
              <a href='https://apptodoss.netlify.app/' target="_blank" rel="noreferrer">
                <Card.Img className='cardimg' src={Todo} />
              </a>
              <Card.Body>
                <Card.Title className="cardtitle" >TODO APP</Card.Title>
                <Card.Text>
                  <a href='https://youtu.be/_MjiP_OXxrQ'>DEMO VIDEO</a>
                </Card.Text>
              </Card.Body>
            </Card>


            <Card className="cards">
              <a href='https://signup-login-form.surge.sh/' target="_blank" rel="noreferrer">
                <Card.Img className='cardimg' src={Form} />
              </a>
              <Card.Body>
                <Card.Title className="cardtitle" >FORM</Card.Title>
                <Card.Text>
                  <a href='https://youtu.be/Bb3CiyuZPwE'>DEMO VIDEO</a>
                </Card.Text>
              </Card.Body>
            </Card>


            <Card className="cards">
              <a href='https://pwa-quiz.netlify.app/' target="_blank" rel="noreferrer">
                <Card.Img className='cardimg' src={Quiz} />
              </a>
              <Card.Body>
                <Card.Title className="cardtitle" >FORM</Card.Title>
                <Card.Text>
                  {/* <a href='https://youtu.be/Bb3CiyuZPwE'>DEMO VIDEO</a>  */}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card className="cards">
              <a href='https://muhammadaqibrafiq.github.io/covid-19-tracker-react/' target="_blank" rel="noreferrer">
                <Card.Img className='cardimg' src={Covid} />
              </a>
              <Card.Body>
                <Card.Title className="cardtitle" >FORM</Card.Title>
                <Card.Text>
                  {/* <a href='https://youtu.be/Bb3CiyuZPwE'>DEMO VIDEO</a>  */}
                </Card.Text>
              </Card.Body>
            </Card>




          </> : null
          }


        </Row>
        <div className='d-flex justify-content-center mt2'>
          <Button variant="outline-secondary" onClick={() => setShow(!show)} >See More</Button>
        </div>
      </Container>

    </div>




  )
}

export default Project

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WebDev from '../assets/Web Dev.png'
import Graphic from '../assets/Graphic Design Illustration.png'
import DB from '../assets/DBmgmt.png'
import UI from '../assets/ui ux design.png'
import linux from '../assets/linux.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Skills() {
  return (
    <div style={{marginTop: 65}}>
    <h6 style={{textAlign: 'center'}}>Skills</h6>
    <Container style={{marginTop: 30}}>
    <Row>
      <Col>
      <Card style={{ width: '10rem' , height: '5rem'}}>
      <Card.Img variant="top" src={WebDev} />
      <Card.Body>
        <Card.Title> <span style={{fontSize: '14px', fontWeight: 'bold'}}>Front-End Developer</span></Card.Title>
        <Card.Text><span style={{fontSize: '11px'}}>
         (HTML, CSS, Javascript, Bootsrap, React)
         </span></Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '10rem' , height: '5rem'}}>
      <Card.Img variant="top" src={Graphic} />
      <Card.Body>
        <Card.Title><span style={{fontSize: '14px', fontWeight: 'bold'}}>Graphic Design</span></Card.Title>
        <Card.Text><span style={{fontSize: '11px'}}>
         (Photoshop, Canva)
         </span></Card.Text>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </Container>
    <div>
      <Container style={{marginTop: 250}}>
        <Row>
          <Col>
            <Card style={{ width: '10rem' , height: '5rem'}}>
          <Card.Img variant="top" src={UI} />
          <Card.Body>
            <Card.Title> <span style={{fontSize: '14px', fontWeight: 'bold'}}>UI/UX Design</span></Card.Title>
            <Card.Text><span style={{fontSize: '11px'}}>
            (Figma)
            </span></Card.Text>
          </Card.Body>
        </Card>
          </Col>
          <Col>
          <Card style={{ width: '10rem' , height: '5rem'}}>
          <Card.Img variant="top" src={DB} />
          <Card.Body>
            <Card.Title><span style={{fontSize: '14px', fontWeight: 'bold'}}>Database Management</span></Card.Title>
            <Card.Text><span style={{fontSize: '11px'}}>
            (HTML, CSS, Javascript, Bootsrap, React)
            </span></Card.Text>
          </Card.Body>
        </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <div>
    <Container style={{marginTop: 250}}>
      <Row>
        <Col>
          <Card style={{ width: '10rem' , height: '5rem'}}>
        <Card.Img variant="top" src={linux} />
        <Card.Body>
          <Card.Title> <span style={{fontSize: '14px', fontWeight: 'bold'}}>Linux Proficiency</span></Card.Title>
          <Card.Text><span style={{fontSize: '11px'}}>
          (Kali, Ubuntu etc.)
          </span></Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

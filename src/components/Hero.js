import React from 'react'
import '../App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pic from '../assets/img2.jpg'


export default function Hero() {
  return (
    <div>
      <Container>
      <Row className="row desktop-layout" style={{marginTop: '6rem', color: '#002265'}}>
        <Col>
          <div className='hero-txt'>
            Hi!<br/>
            <h5><b>I'm Osei Tutu Karikari,
            a Bsc Computer Science Graduate</b></h5>
            <p>based in Accra, Ghana.</p>
          </div>
        </Col>
        <Col>
          <Image src={pic} className='hero-image' roundedCircle style={{ width: '10rem', height: '13rem' }}/>
        </Col>
      </Row>
    </Container>
    </div>
  )
  
}

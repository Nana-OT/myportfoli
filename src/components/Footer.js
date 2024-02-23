import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Git from '../assets/Git.png'
import whatsapp from '../assets/WhatsApp.png'
import email from '../assets/Email.png'
import wave from '../assets/footer.png'

export default function Footer() {
  return (
    <div id='contacts' className='footer' style={{marginTop: 100}}>
        <h5 style={{textAlign: 'center'}}><span style={{color: '#000080'}}><b>Contact</b></span><span style={{color: '#032174'}}> Me</span></h5>
        <Container style={{marginTop: '25px', marginBottom: '5px', justifyContent: 'center'}}>
            <Row className='socials'>
                <Col className='git'>
                    <a href='https://github.com/Nana-OT'>
                    <img src={Git} style={{width: '70px'}}/>
                    </a>
                </Col>
                <Col>
                    <a href='mailto:nanaot2002@gmail.com'>
                    <img src={email} style={{width: '70px'}}/>
                    </a>
                </Col>
                <Col className='whatsapp'>
                    <a href='https://wa.me/233598714871'>
                    <img src={whatsapp} style={{width: '70px'}}/>
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <div style={{position: 'sticky'}}>  
    <Navbar expand="lg" className="bg-body-tertiary" style={{boxShadow: '1px 3px 9px #4166f5', height: '4rem', overflow: 'hidden', position: 'fixed', top: '0', width: '100%', zIndex: '1000'}}>
      <Container>
        <Navbar.Brand href="#home"><span className='centu' style={{color: '#0047ab'}}><b>Centu</b></span><span style={{color: '#4166f5'}}>rion</span></Navbar.Brand>
          <Nav style={{display: 'flex', flexDirection: 'row'}}>
            <Nav.Link href="#home" style={{marginRight: '15px'}}>About</Nav.Link>
            <Nav.Link href="#link" style={{marginRight: '10px'}}>Skills</Nav.Link>
            <Nav.Link href="#link"><button style={{background: '#4166f5', color: '#fff', borderRadius: '9px'}}>Contact Me</button></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

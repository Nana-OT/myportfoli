import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
};


  return (
    <div style={{position: 'sticky'}}>  
    <Navbar expand="lg" className="bg-body-tertiary" style={{position: 'fixed', top: '0', width: '100%', zIndex: '1000'}}>
      <Container>
        <Navbar.Brand href="#home"><span className='centu' style={{color: '#0047ab'}}><b>Centu</b></span><span style={{color: '#4166f5'}}>rion</span></Navbar.Brand>
          <Nav style={{display: 'flex', flexDirection: 'row', overflow: 'auto'}}>
            <Nav.Link href='#/skills' onClick={() => navigateToSection('skills')} style={{marginRight: '15px', color: '#212121'}}>Skills</Nav.Link>
            <Nav.Link href="#Hero" onClick={() => navigateToSection('projects')} style={{marginRight: '10px', color: '#212121'}}>Projects</Nav.Link>
            <Nav.Link href="#link"><button onClick={() => navigateToSection('contacts')} style={{background: '#608AF5', color: '#fff', borderRadius: '9px', border: 'none', textAlign: 'center'}}><b>Contact Me</b></button></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

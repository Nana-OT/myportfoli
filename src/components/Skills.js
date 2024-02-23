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
    <div id='skills' className='skills-sec'>
      <div style={{marginTop: '3rem'}}>
      <h5 style={{textAlign: 'center', color: '#14279B'}}>Skills</h5>
      <div className='skills-card'>
      <Row style={{marginLeft: '10px', zIndex: '-1'}}>
      <Col>
      <div class="card" style={{marginTop: '2rem', width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #0047ab', zIndex: '-1'}}>
    <img src={WebDev} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Web</b> Development</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(HTML, CSS, React, Bootstrap, Javascript, Wordpress)</p>
    </div>
    </div>
    </Col>
    <Col>
      <div class="card graphic" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #0047ab', zIndex: '-1'}}>
    <img src={Graphic} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Graphic</b> Design</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(Photoshop, Canva)</p>
    </div>
    </div>
    </Col>
    </Row>
    <Row style={{marginLeft: '10px'}} className='linux-db'>
      <Col>
      <div class="card linux" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #0047ab', zIndex: '-1'}}>
    <img src={linux} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Linux</b> Proficiency</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(Kali, Ubuntu etc.)</p>
    </div>
    </div>
    </Col>
    <Col>
      <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #0047ab', zIndex: '-1'}}>
    <img src={DB} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Database </b>Management</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(MySQL, Oracle, SQLServer etc.)</p>
    </div>
    </div>
    </Col>
    </Row>
    </div>
      </div>
  </div>
  )
}

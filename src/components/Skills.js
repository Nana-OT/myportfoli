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
    <div style={{marginTop: 85}}>
    <h6 style={{textAlign: 'center', color: '#0047ab', fontWeight: 'bold'}}>Skills</h6>
    <Row style={{marginLeft: '10px'}}>
    <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '17rem'}}>
  <img src={WebDev} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Front-End Web Developer</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(HTML, CSS, React, Bootstrap, Javascript)</p>
  </div>
  </div>
  </Col>
  <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '17rem'}}>
  <img src={Graphic} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Graphic Design</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(Photoshop, Canva)</p>
  </div>
  </div>
  </Col>
  </Row>
  <Row style={{marginLeft: '10px'}}>
    <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '17rem'}}>
  <img src={linux} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Linux Proficiency</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(Kali, Ubuntu etc.)</p>
  </div>
  </div>
  </Col>
  <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '17rem'}}>
  <img src={DB} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">Database Management</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(MySQL, Oracle, SQLServer etc.)</p>
  </div>
  </div>
  </Col>
  </Row>
  <Row style={{marginLeft: '10px'}}>
    <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem'}}>
  <img src={UI} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title">UI/UX Design</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(Figma)</p>
  </div>
  </div>
  </Col>
  </Row>
    </div>
  )
}

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
    <div style={{marginTop: '5rem'}}>
    <h6 style={{textAlign: 'center', color: '#14279B', fontWeight: 'bold'}}>Skills</h6>
    <Row style={{marginLeft: '10px'}}>
    <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 9px #4166f5'}}>
  <img src={WebDev} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"><b>Front-End</b> Web Developer</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(HTML, CSS, React, Bootstrap, Javascript)</p>
  </div>
  </div>
  </Col>
  <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 9px #4166f5'}}>
  <img src={Graphic} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"><b>Graphic</b> Design</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(Photoshop, Canva)</p>
  </div>
  </div>
  </Col>
  </Row>
  <Row style={{marginLeft: '10px'}}>
    <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 9px #4166f5'}}>
  <img src={linux} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"><b>Linux</b> Proficiency</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(Kali, Ubuntu etc.)</p>
  </div>
  </div>
  </Col>
  <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 9px #4166f5'}}>
  <img src={DB} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"><b>Database </b>Management</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(MySQL, Oracle, SQLServer etc.)</p>
  </div>
  </div>
  </Col>
  </Row>
  <Row style={{marginLeft: '10px'}}>
    <Col>
    <div class="card" style={{marginTop: 30, width: '10rem', height: '12rem', boxShadow: '1px 3px 9px #4166f5'}}>
  <img src={UI} style={{width: '7rem', marginLeft: '1.2rem', marginTop: '0.6rem'}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-title"><b>UI/UX</b> Design</h6>
    <p class="card-text" style={{fontSize: '0.6rem'}}>(Figma)</p>
  </div>
  </div>
  </Col>
  </Row>
    </div>
  )
}

import React from 'react'
import WebDev from '../assets/Web Dev.png'
import Graphic from '../assets/Graphic Design Illustration.png'
import DB from '../assets/DBmgmt.png'
import linux from '../assets/linux.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

export default function Skills() {
  return (
    <div id='skills' className='skills-sec bg-body-tertiary z-1 p-2'>
      <div style={{marginTop: '2rem'}}>
      <h5 style={{textAlign: 'center', color: '#14279B'}}>Skills</h5>
      <div className='skills-card'>
      <Row style={{marginLeft: '8px'}}>
      <Col>
      <div class="card" style={{marginTop: '2rem', width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #b9bbb6'}}>
    <img src={WebDev} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Web</b> Development</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(HTML, CSS, React, Bootstrap, Javascript, Wordpress)</p>
    </div>
    </div>
    </Col>
    <Col>
      <div class="card graphic" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #b9bbb6'}}>
    <img src={Graphic} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Graphic</b> Design</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(Photoshop, Canva)</p>
    </div>
    </div>
    </Col>
    </Row>
    <Row style={{marginLeft: '8px'}} className='linux-db'>
      <Col>
      <div class="card linux" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #b9bbb6'}}>
    <img src={linux} style={{width: '7rem', marginLeft: '1.1rem'}} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 class="card-title"><b>Linux</b> Proficiency</h6>
      <p class="card-text" style={{fontSize: '0.6rem'}}>(Kali, Ubuntu etc.)</p>
    </div>
    </div>
    </Col>
    <Col>
      <div class="card" style={{marginTop: 30, width: '10rem', height: '14rem', boxShadow: '1px 3px 5px #b9bbb6'}}>
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

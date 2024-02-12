import React from 'react'
import Zobo1 from '../assets/Zobo 1-Design.jpg'
import Zobo3 from '../assets/Zobo 3-Design.jpg'
import Zobo2 from '../assets/Zobo 2-Design.jpg'
import Zobo10 from '../assets/Zobo 10-Design.jpg'
import Zobo15 from '../assets/Zobo 15-Design.jpg'
import VitalLife1 from '../assets/Vital Life 1- Design.jpg'
import VitalLife5 from '../assets/Vital Life 5- Design.jpg'
import VitalLife10 from '../assets/Vital Life 10- Design.jpg'
import Scan from '../assets/Scan & Order(WhatsApp).jpg'

export default function Projects() {
 
    return (
        <div>
            <h5 style={{textAlign: 'center', marginTop: '4rem', color: '#14279B'}}>My Projects</h5>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{marginTop:'2rem'}}>
            <div class="carousel-inner">
                <div class="carousel-item">
                <img src={Zobo1} class="w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={Zobo2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={Zobo3} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={Zobo10} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={Zobo15} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={Zobo10} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={VitalLife1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={VitalLife5} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item active">
                <img src={VitalLife10} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={Scan} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>   
  )
}
  
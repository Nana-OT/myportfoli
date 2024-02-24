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
import { useState, useEffect } from 'react'

const images = [
    Zobo1,
    Zobo2,
    Zobo3,
    Zobo10,
    Zobo15,
    VitalLife1,
    VitalLife5,
    VitalLife10,
    Scan,
  ];

export default function Projects() {
    const [isGalleryView, setIsGalleryView] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          setIsGalleryView(window.innerWidth >= 992);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup to prevent memory leaks
        return () => window.removeEventListener('resize', handleResize);
      }, []);
 
    return (
        <div id='projects'>
            <h5 style={{textAlign: 'center', marginTop: '4rem', color: '#14279B'}}>My Design Projects</h5>
            {isGalleryView ? (
                <div className="row row-cols-3 g-3">
                {images.map((image, index) => (
                    <div  key={index} className="col">
                    <img src={image} className="img-fluid" alt={`Project ${index + 1}`} />
                    </div>
                ))}
                </div>
            ) :
            (
                <div className='caro'>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{marginTop:'2rem'}}>
                <div class="carousel-inner"  style={{zIndex: '-1'}}>
                <div class="carousel-item">
                <img src={Zobo1} class="w-100" alt="Zobo"/>
                </div>
                <div class="carousel-item">
                <img src={Zobo2} class="d-block w-100" alt="Zobo"/>
                </div>
                <div class="carousel-item">
                <img src={Zobo3} class="d-block w-100" alt="Zobo"/>
                </div>
                <div class="carousel-item">
                <img src={Zobo10} class="d-block w-100" alt="Zobo"/>
                </div>
                <div class="carousel-item">
                <img src={Zobo15} class="d-block w-100" alt="Zobo"/>
                </div>
                <div class="carousel-item">
                <img src={Zobo10} class="d-block w-100" alt="Zobo"/>
                </div>
                <div class="carousel-item">
                <img src={VitalLife1} class="d-block w-100" alt="VitalLife"/>
                </div>
                <div class="carousel-item">
                <img src={VitalLife5} class="d-block w-100" alt="VitalLife"/>
                </div>
                <div class="carousel-item active">
                <img src={VitalLife10} class="d-block w-100" alt="VitalLife"/>
                </div>
                <div class="carousel-item">
                <img src={Scan} class="d-block w-100" alt="VitalLife"/>
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
            )}
    </div>   
  )
}
  
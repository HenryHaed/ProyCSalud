import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import caru1 from '../assets/img/hospitalmadrisd.webp'
import caru2 from '../assets/img/bannerhospital.jpg'
import caru3 from '../assets/img/hosp.webp'

export const ImageCarousel = () => {
  return (
    <Container>
    <div>
    <Carousel>
      <Carousel.Item className = "c-item">
        <img className="d-bloc k w-100  c-img" src={caru1} alt="Primera imagen" />
        {/* Resto del código para esta imagen */}
      </Carousel.Item >
      <Carousel.Item className = "c-item">
        <img className="d-block w-100  c-img"  src={caru2}  alt="Segunda imagen" />
        {/* Resto del código para esta imagen */}
      </Carousel.Item>
      <Carousel.Item className = "c-item">
        <img className="d-block w-100  c-img" src={caru3} alt="Otra imagen"/>
        {/* Resto del código para esta imagen */}
      </Carousel.Item>
      {/* Agregar más imágenes con la misma estructura si es necesario */}
    </Carousel>
    </div>

    
     <div className='footer-main'>
     <footer>
     © 2023 Copyright:
       <a className='text-dark' href='https://mdbootstrap.com/'>
         HenryHaed Associations in to American
       </a>
       <font color="white" >
       <h4>Centro de Salud Alto Obrajes "Al servicio de su Salud"</h4></font>
     </footer>
      
     </div>
     </Container>
  )
}

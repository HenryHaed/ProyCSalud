import React from 'react'
import { Container } from 'react-bootstrap'
import '../assets/css-medi2/style.css'
import '../assets/css-medi2/normalize.css'
import cont1 from '../assets/img/maps.png'


export const Contactos = () => {
  return (
    
    <Container>
        <section id = "contact" class = "contact py">
            <div class = "container grid">
                <div class = "contact-left">
                   <img src={cont1} alt='' width="600" height="450"/>  
                </div>
                <div class = "contact-right text-white text-center bg-blue">
                    <div class = "contact-head">
                        <h2 class = "lead">CONTACTANOS</h2>
                        <p class = "text text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.</p>
                    </div>
                    <form>
                        <div class = "form-element">
                            <input type = "text" class = "form-control" placeholder="INGRESE SU NOMBRE"/>
                        </div>
                        <div class = "form-element">
                            <input type = "email" class = "form-control" placeholder="INGRESE SU CORREO ELECTRONICO"/>
                        </div>
                        <div class = "form-element">
                            <textarea rows = "5" placeholder="SUGERENCIAS" class = "form-control"></textarea>
                        </div>
                        <button type = "submit" class = "btn btn-white btn-submit">
                            <i class = "arrow-right"></i> Envia tu Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </Container>
  )
}

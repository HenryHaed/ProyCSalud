import React from 'react'
import { Container } from 'react-bootstrap';
import som1 from '../assets/images-medi/element-img-1.png'
import som2 from '../assets/images-medi/banner-image.png'

export const Somos = () => {
  return (
    <Container>
    <header class = "header">
        <div class="element-one">
            <img src = {som1} alt = ""/>
        </div>

        <div class="banner">
            <div class="container">
                <div class="banner-content">
                    <div class="banner-left">
                        <div class="content-wrapper">
                            <h1 class="banner-title">Atención Médica Virtual Para Ti</h1>
                            <p class="text text-white">Medimoor provides progressive, and affordable healthcare, accessible on mobile and onnline for everyone</p>
                        </div>
                    </div>

                    <div class = "banner-right d-flex align-items-center justify-content-end">
                        <img src = {som2} alt = ""/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </Container>
  )
}

export default Somos;
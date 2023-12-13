import React from 'react'
import '../assets/css-medi/main.css';
import '../assets/css-medi/utilities.css';
import nov1 from '../assets/images-medi/element-img-3.png'
import nov2 from '../assets/images-medi/element-img-5.png'
import nov3 from '../assets/images-medi/person-image.png'
import { Container } from 'react-bootstrap';

export const Novedades = () => {
  return (
    <Container>
    <section class = "sc-feedback">
    <div class="container">
        <div class = "feedback-content">
            <div class = "feedback-element">
                <img src = {nov1} alt=''/>
            </div>
            <div class="feedback-element-2">
                <img src = {nov2} alt=''/>
            </div>
            <div class = "title-box text-center">
                <div class = "content-wrapper">
                    <h3 class = "title-box-name text-white">Lo Que Dicen Nuestros Pacientes</h3>
                    <div class = "title-separator mx-auto"></div>
                </div>
            </div>

            <div class = "feedback-list feedback-slider owl-carousel owl-theme">
                <div class = "feedback-item d-grid">
                    <div class = "item-left d-flex align-items-center">
                        <div class = "item-img">
                            <img src = {nov3} alt = ""/>
                        </div>
                        <div class = "item-info text-white">
                            <p class = "fw-7 name">Edward Aguirre</p>
                            <span class = "designation fw-4">Founder Circle</span>
                        </div>
                    </div>
                    <div class = "item-right">
                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                    </div>
                </div>

                <div class = "feedback-item d-grid">
                    <div class = "item-left d-flex align-items-center">
                        <div class = "item-img">
                            <img src = {nov3} alt = ""/>
                        </div>
                        <div class = "item-info text-white">
                            <p class = "fw-7 name">Edward Villalobos</p>
                            <span class = "designation fw-4">Founder Circle</span>
                        </div>
                    </div>
                    <div class = "item-right">
                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                    </div>
                </div>

                <div class = "feedback-item d-grid">
                    <div class = "item-left d-flex align-items-center">
                        <div class = "item-img">
                            <img src = {nov3} alt = ""/>
                        </div>
                        <div class = "item-info text-white">
                            <p class = "fw-7 name">Simon Paul</p>
                            <span class = "designation fw-4">Founder Circle</span>
                        </div>
                    </div>
                    <div class = "item-right">
                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                    </div>
                </div>

                <div class = "feedback-item d-grid">
                    <div class = "item-left d-flex align-items-center">
                        <div class = "item-img">
                            <img src = {nov3} alt = ""/>
                        </div>
                        <div class = "item-info text-white">
                            <p class = "fw-7 name">John Perez</p>
                            <span class = "designation fw-4">Founder Circle</span>
                        </div>
                    </div>
                    <div class = "item-right">
                        <p class = "text text-white">"Our dedicated patient engagement app and web portal allow you to access information instantaneoulsy (no tedeous form, long calls, or administrative hassle) and securely"</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</Container>
 )
}


export default Novedades;
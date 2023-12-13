import React from 'react'
import '../assets/css-medi/main.css';
import '../assets/css-medi/utilities.css';
import serv1 from '../assets/images-medi/curve-shape-1.png'
import serv2 from '../assets/images-medi/service-icon-1.png'
import serv3 from '../assets/images-medi/service-icon-2.png'
import serv4 from '../assets/images-medi/service-icon-4.png'
import serv5 from '../assets/images-medi/service-icon-5.png'
import serv6 from '../assets/images-medi/service-icon-6.png'
import serv7 from '../assets/images-medi/service-icon-3.png'
 
export const Servicios = () => {
  return (
    <div><section class = "sc-services">
    <div class = "services-shape">
        <img src = {serv1} alt = ""/>
    </div>
    <div class="container">
        <div class = "services-content">
            <div class="title-box text-center">
                <div class = "content-wrapper">
                    <h3 class = "title-box-name">Nuestros Servicios</h3>
                    <div class = "title-separator mx-auto"></div>
                    <p class = "text title-box-text">Le brindamos las mejores opciones para usted. Ajústalo a tus necesidades de salud y asegúrate de realizar un tratamiento con nuestros médicos altamente calificados puedes consultar con nosotros qué tipo de servicio es el adecuado para tu salud.</p>
                </div>
            </div>

            <div class = "services-list">
                <div class = "services-item">
                    <div class = "item-icon">
                        <img src={serv2} alt = "service icon"/>
                    </div>
                    <h5 class = "item-title fw-7">Buscar medico</h5>
                    <p class = "text">Choose your doctor form thousands of specialist, general and trusted hospitals.</p>
                </div>

                <div class = "services-item">
                    <div class = "item-icon">
                        <img src = {serv3} alt = "service icon"/>
                    </div>
                    <h5 class = "item-title fw-7">farmacia en línea</h5>
                    <p class = "text">Buy your medicines with our mobile application with a simple delivery system</p>
                </div>

                <div class = "services-item">
                    <div class = "item-icon">
                        <img src = {serv7} alt = "service icon"/>
                    </div>
                    <h5 class = "item-title fw-7">Consulta</h5>
                    <p class = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
                </div>

                <div class = "services-item">
                    <div class = "item-icon">
                        <img src = {serv4} alt = "service icon"/>
                    </div>
                    <h5 class = "item-title fw-7">Details info</h5>
                    <p class = "text">Free consultation with our trusted doctors and get the best recommendations.</p>
                </div>

                <div class = "services-item">
                    <div class = "item-icon">
                        <img src = {serv5} alt = "service icon"/>
                    </div>
                    <h5 class = "item-title fw-7">Emergency care</h5>
                    <p class = "text">You can get 24/7 urgent care for yourself or your children and your lovely family.</p>
                </div>

                <div class = "services-item">
                    <div class = "item-icon">
                        <img src = {serv6} alt = "service icon"/>
                    </div>
                    <h5 class = "item-title fw-7">Tracking</h5>
                    <p class = "text">Track and save your mental history and health data</p>
                </div>
            </div>

            <div class = "d-flex align-items-center justify-content-center services-main-btn">
                <button type = "button" class = "btn btn-primary-outline">Learn more</button>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

import React from 'react'
import '../assets/css-medi/main.css';
import '../assets/css-medi/utilities.css';
import inf1 from '../assets/images-medi/curve-shape-2.png'
import inf2 from '../assets/images-medi/element-img-2.png'
import inf3 from '../assets/images-medi/article-img-1.png'
import inf4 from '../assets/images-medi/article-img-2.png'
import inf5 from '../assets/images-medi/article-img-3.png'

export const InfoPac = () => {
  return (
<div class = "sc-articles">
  <div class = "articles-shape">
    <img src = {inf1} alt = ""/>
  </div>

  <div class = "container">
    <div class = "articles-content">
      <div class = "articles-element">
          <img src = {inf2} alt = ""/>
      </div>
      <div class = "title-box text-center">
          <div class = "content-wrapper">
              <h3 class = "title-box-name">Mira Nuestro Último Artículo</h3>
              <div class = "title-separator mx-auto"></div>
          </div>
      </div>
      
      <div class = "articles-list d-flex flex-wrap justify-content-center">
          <article class = "articles-item">
            <div class = "item-img">
                <img src = {inf3} alt=''/>
            </div>
            <div class = "item-body">
                <div class = "item-title">Detección de enfermedades, chequeo en el laboratorio.</div>
                <p class = "text">In this case, the role of the health laboratory is very important to do a disease detection ...</p>
                    <span class = "item-link-text">Read more</span>
                    <span class = "item-link-icon">
                        <i class = "fas fa-arrow-right"></i>
                    </span>
            </div>
          </article>

          <article class = "articles-item">
              <div class = "item-img">
                  <img src = {inf4} alt=''/>
              </div>
              <div class = "item-body">
                  <div class = "item-title">Medicamentos a base de hierbas que son seguros para el consumo.</div>
                  <p class = "text">Herbal medicine is very widely used at this time because of its very good for your health ...</p>
                      <span class = "item-link-text">Read more</span>
                      <span class = "item-link-icon">
                          <i class = "fas fa-arrow-right"></i>
                      </span>
              </div>
          </article>

          <article class = "articles-item">
              <div class = "item-img">
                  <img src = {inf5} alt=''/>
              </div>
              <div class = "item-body">
                  <div class = "item-title">Cuidado natural para una piel facial sana.</div>
                  <p class = "text">A healthy lifestyle should start from now and also for your skin health ...</p>
                      <span class = "item-link-text">Read more</span>
                      <span class = "item-link-icon">
                          <i class = "fas fa-arrow-right"></i>
                      </span>
              </div>
          </article>
      </div>
    </div>
  </div>
</div>
)
}

export default InfoPac;
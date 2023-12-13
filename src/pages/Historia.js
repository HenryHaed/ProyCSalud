import React from 'react'
import { Container } from 'react-bootstrap'
import hist1 from '../assets/images-medi2/about-img.png'

export const Historia = () => {
  return (
    <Container>
        <section id = "about" class = "about py">
            <div class = "about-inner">
                <div class = "container grid">
                    <div class = "about-left text-center">
                        <div class = "section-head">
                            <h2>Historia</h2>
                            <div class = "border-line"></div>
                        </div>
                        <p class = "text text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias delectus facilis, temporibus eum consectetur, a debitis exercitationem quae distinctio aliquid ea ipsam vitae esse amet soluta maxime dolorem? Inventore ut maiores illo ipsum nisi, nulla eligendi unde reiciendis quod voluptas velit sit voluptate perferendis cum pariatur molestiae tenetur repellat!</p>
                    </div>
                    <div class = "about-right flex">
                        <div class = "img">
                            <img src = {hist1} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
  )
}

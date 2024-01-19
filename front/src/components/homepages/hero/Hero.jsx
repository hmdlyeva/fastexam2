import React from 'react'
import './Hero.scss'
const Hero = () => {
  return (
    <section id='hero'>
      <div className="hero">
        <div className="container">
          <div className="my_hero">

            <div className="box_left">
              <ul>
                <li className='orange'>01.</li>
                <li>02.</li>
                <li>03.</li>
              </ul>
            </div>

            <div className="midd">
              <div className='df'>
                 <h1>Food and more</h1>
                <div className="box"></div>

                </div>
              <p>By Chef Francis Smith</p>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
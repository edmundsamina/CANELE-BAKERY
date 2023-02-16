import React from 'react'
import '../styles/home.css'
function Home() {
  return (
    <div className='home-container'>
    <section className='hero-section'>
    <div className='hero-section-text'>
    <h1>Maître Canelé</h1>
    <p className='hero-section-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ligula sit amet nibh tincidunt, id imperdiet elit fermentum. Nunc eget leo non est rhoncus aliquam id sed nulla. Etiam non eros ut erat ultrices commodo. </p>
    <div  className='button-container'>
    <button className='button button-discover'>Discover</button>
    <button  className='button button-shop'>Shop</button>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Home

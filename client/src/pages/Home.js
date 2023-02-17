import React from 'react'
import aboutImage from '../assets/images/about-image.png'
import thyme from '../assets/images/thyme.png'
import '../styles/home.css'
function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-section-text">
          <h1>Maître Canelé</h1>
          <p className="hero-section-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            cursus ligula sit amet nibh tincidunt, id imperdiet elit fermentum.
            Nunc eget leo non est rhoncus aliquam id sed nulla. Etiam non eros
            ut erat ultrices commodo.{" "}
          </p>
          <div className="button-container">
            <button className="button button-discover">Discover</button>
            <button className="button button-shop">Shop</button>
          </div>
        </div>
      </section>
      <section className="about-section">
        <img
          className='about-image'
          src={aboutImage}
          alt="woman wearing chefs white coat and piping macarons"
        ></img>
        <div className="about-text-container">
          <h2 className='about-title'>Our Story</h2>
          <p className='about-text'>
            Welcome to our charming French bakery, where we specialize in
            creating delicious pastries, breads, and desserts using traditional
            techniques and high-quality ingredients. Our talented bakers are
            dedicated to crafting treats that will transport you straight to the
            streets of Paris. From our flaky croissants to our buttery quiches,
            every item on our menu is made with care and attention to detail. We
            offer a variety of both sweet and savory options, including delicate
            macarons, indulgent eclairs, delectable fruit tarts, and savory
            quiches that will satisfy any craving. In addition to our baked
            goods, we serve premium coffee and tea to pair with your treats.
            Whether you're stopping by for a quick morning pastry or a leisurely
            afternoon snack, we have something for everyone. We take pride in
            providing the most authentic French baking experience in town, and
            we can't wait to share our passion for baking with you. Come visit
            us and experience the delicious taste of our bakery today!
          </p>          
        </div>
      </section>
    </div>
  );
}

export default Home

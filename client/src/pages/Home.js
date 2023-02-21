import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/images/about-image.png";
import pastries from "../assets/images/home-pastry.png";
import sweettreats from "../assets/images/home-sweet.png";
import breads from "../assets/images/home-bread.png";
import logo from "../assets/images/logo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-section-text">
          <h1>Maître Canelé</h1>
          <p className="hero-section-paragraph">
            Our French bakery is a culinary paradise, where every treat is a
            work of art. We use the finest ingredients and traditional
            techniques to create exquisite pastries, breads, and desserts that
            will transport you to the streets of Paris. Come experience our
            delicious and decadent creations today!{" "}
          </p>
          <div className="button-container">
            <button
             //scroll to section
              className="button button-discover"
            >
              Discover
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="button button-shop"
            >
              Shop
            </button>
          </div>
        </div>
      </section>
      <section className="about-section">
        <img
          className="about-image"
          src={aboutImage}
          alt="woman wearing chefs white coat and piping macarons"
        />
        <div className="about-text-container">
          <h2 className="about-title">Our Story</h2>
          <p className="about-text">
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
            afternoon snack, we have something for everyone.
          </p>
        </div>
      </section>
      <section className="discover-section">
        <div className="discover-text-container">
          <h3 className="discover-text-title">
            FlAVOURS
            <br />
            OF
            <br />
            FRANCE
          </h3>
          <p className="discover-text-paragraph">
            Paris is a melting pot, as our food can attest. Take a bite and
            savor la vie délicieuse!
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="discover-text-button"
          >
            Order Now
          </button>
        </div>

        <div className="discover-pastries">
          <img
            className="discover-image"
            src={pastries}
            alt="basket will with delicious pastries sprinkled with powdered sugar"
          />
          <h4 className="discover-image-subtitle">MOUTHWATERING PASTRIES</h4>
        </div>

        <div className="discover-breads">
          <img
            className="discover-image"
            src={breads}
            alt="dark morrish rye bread on a chopping board, with some slices laying around it"
          />
          <h4 className="discover-image-subtitle">WHOLESOME BREADS</h4>
        </div>

        <div className="discover-sweet-endings">
          <img
            className="discover-image"
            src={sweettreats}
            alt="a croissant with chocolate drizzle next to a chai latte, on a table scattered with coffee beans"
          />
          <h4 className="discover-image-subtitle">SWEET ENDINGS</h4>
        </div>
      </section>

      <section className="footer-image-section">
        <div className="footer-image">
          <img
            className="footer-logo"
            src={logo}
            alt="curly logo in the shape of a heart"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

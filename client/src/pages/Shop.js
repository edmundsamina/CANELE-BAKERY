import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import Card from "../components/Card/Card";
import gif from '../assets/loader g-i-f.gif'
function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [allButtonState, setAllButtonState] = useState(true)
  const [breadButtonState, setBreadButtonState] = useState(false)
  const [pastryButtonState, setPastryButtonState] = useState(false);
  const [cakesButtonState, setCakesButtonState] = useState(false);


  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "https://projectcanelebakery.onrender.com/products"
      );
      const data = await response.json();
      const shuffledData = data.payload.sort(() => Math.random() - 0.5);

      setProducts(shuffledData);
      setTimeout(() => {
        setLoading(true);
      }, 2000)
    }
    getProducts();
  }, []);

  async function filterProducts(category) {
    const response = await fetch(
      `https://projectcanelebakery.onrender.com/products/${category}`
    );
    const data = await response.json();
    const shuffledData = data.payload.sort(() => Math.random() - 0.5);

      setProducts(shuffledData);
    setTimeout(() => {
      setLoading(true);
    }, 2000)
  

  }

 

  return (
    <section className="shop-section-container">
      <div className="filtering-button-container">
        <button
          onClick={() => {
            filterProducts(" ");
            setBreadButtonState(false);
            setAllButtonState(true);
            setPastryButtonState(false);
            setCakesButtonState(false);
            setLoading(false)
          }}
          className={allButtonState ? "btn-active" : "btn-inactive"}
        >
          ALL
        </button>
        <button
          onClick={() => {
            filterProducts("bread");
            setBreadButtonState(true);
            setAllButtonState(false);
            setPastryButtonState(false);
            setCakesButtonState(false);
            setLoading(false);

          }}
          className={breadButtonState ? "btn-active" : "btn-inactive"}
        >
          BREADS
        </button>
        <button
          onClick={() => {
            filterProducts("pastry");
            setBreadButtonState(false);
            setAllButtonState(false);
            setPastryButtonState(true);
            setCakesButtonState(false);
            setLoading(false)

          }}
          className={pastryButtonState ? "btn-active" : "btn-inactive"}
        >
          PASTRIES
        </button>
        <button
          onClick={() => {
            filterProducts("cake");
            setBreadButtonState(false);
            setAllButtonState(false);
            setPastryButtonState(false);
            setCakesButtonState(true);
            setLoading(false);
          }}
          className={cakesButtonState ? "btn-active" : "btn-inactive"}
        >
          CAKES
        </button>
      </div>

      {
        loading ? <div className="shop-card-container">
        {products.filter((one, index) => index < 8)
          .map((one) => {
            return <Card id={one._id} img={one.image} title={one.name} price={one.price} />;
          })}
      </div> : <div className="loader-container"><img className="gif" src={gif} alt="gif"/>
</div>
      }
      
    </section>
  );
}

export default Shop;

import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import Card from "../components/Card/Card";

function Shop() {
  const [products, setProducts] = useState([]);
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
      console.log(data);
      setProducts(data.payload);
    }
    getProducts();
  }, []);

  async function filterProducts(category) {
    const response = await fetch(
      `https://projectcanelebakery.onrender.com/products/${category}`
    );
    const data = await response.json();
    console.log(data);
    setProducts(data.payload);
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
          }}
          className={cakesButtonState ? "btn-active" : "btn-inactive"}
        >
          CAKES
        </button>
      </div>
      <div className="shop-card-container">
        {products
          .filter((one, index) => index < 8)
          .map((one) => {
            return <Card img={one.image} title={one.name} price={one.price} />;
          })}
      </div>
    </section>
  );
}

export default Shop;

import React from "react";
import '../styles/basket.css';
import BasketItem from "../components/BasketItem/BasketItem";

function Basket() {
  return (
    <section className="basket-container">
      <div className="basket-items-container">
      <h3 className="basket-title">Shopping Cart</h3>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>


      </div>
      <div className="subtotal-checkout-container">
      <p className="subtotal">Subtotal <span>£3.50</span></p>
    <button className="checkout-button">Checkout</button>
    </div>
    </section>
  );
}

export default Basket;

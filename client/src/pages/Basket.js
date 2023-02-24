import React, { useState, useEffect } from "react";
import "../styles/basket.css";
import BasketItem from "../components/BasketItem/BasketItem";
import { useShoppingCart } from "../ShoppingCartContext/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

function Basket() {
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);

  const { cartItems } = useShoppingCart();

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "GBP",
    style: "currency",
  });

  useEffect(() => {
    function subtotal(cartItems) {
      if (cartItems !== 0) {
        let cost = 0;
        for (let i = 0; i < cartItems.length; i++) {
          cost = cost + cartItems[i].price * cartItems[i].quantity;
        }
        setTotalCost(cost);
      } else {
        setTotalCost(0);
      }
    }
    subtotal(cartItems);
  }, [cartItems]);

  return (
    <section className="basket-container">
      <div className="basket-items-container">
        <h3 className="basket-title">Shopping Cart</h3>
        {cartItems.length !== 0 ? (
          cartItems.map((item) => {
            return (
              <BasketItem
                key={item.id}
                title={item.title}
                quantity={item.quantity}
                img={item.img}
                price={CURRENCY_FORMATTER.format(item.price)}
                id={item.id}
                totalPrice={CURRENCY_FORMATTER.format(
                  item.price * item.quantity
                )}
              />
            );
          })
        ) : (
          <div className="basket-item">
            <h4 className="no-items-text">You have nothing in your shopping cart.</h4>
          </div>
        )}
      </div>
      <div className="subtotal-checkout-container">
        <p className="subtotal">
          Subtotal<span>{CURRENCY_FORMATTER.format(totalCost)}</span>
        </p>
        <button
          onClick={() => navigate("/checkout")}
          className="checkout-button"
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

export default Basket;

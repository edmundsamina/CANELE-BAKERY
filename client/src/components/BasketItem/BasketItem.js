import React from "react";
import "../../styles/basket.css";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";
import cancel from "../../assets/icons/delete.png";
import { useShoppingCart } from "../../ShoppingCartContext/ShoppingCartContext";

function BasketItem(props) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  
  return (
    <div className="basket-item">
      <div className="img-name-container">
        <img className="basket-img" src={props.img} alt={props.title} />
        <h4 className="item-name">{props.title}</h4>
        <p>{props.price}</p>
      </div>

      <div className="quantity">
      <img onClick={()=>{decreaseCartQuantity(props.id)}} className="icon" src={minus} alt="minus extra item" />{" "}

        <p>{props.quantity}</p>
     
        <img onClick={()=>{increaseCartQuantity(props.id)}} className="icon" src={plus} alt="add extra item" />

      </div>

      <div className="price">
      <p>{props.totalPrice}</p>

        <img onClick={()=>{removeFromCart(props.id)}} className="icon" src={cancel} alt="remote item from basket" />
      </div>
    </div>
  );
}

export default BasketItem;

import React from "react";
import "../../styles/basket.css";
import plus from "../../assets/icons/plus.png";
import minus from "../../assets/icons/minus.png";
import cancel from "../../assets/icons/delete.png"
function BasketItem(props) {
  return (
    <div className="basket-item">
      <div className="img-name-container">
        <img
          className="basket-img"
          src="https://i3.lensdump.com/i/TEz2ZZ.png"
          alt="Petite Pains"
        />
        <h4 className="item-name">Petite Pains</h4>
      </div>

      <div className="quantity">
        <img className="icon" src={plus} alt="add extra item" /> 
        <p>1</p>
        <img className="icon" src={minus} alt="minus extra item" />{" "}
      </div>


      <div className="price">
      <p>£3.50</p>
      <img className="icon" src={cancel} alt="remote item from basket" />
      </div>


   

    </div>
  );
}

export default BasketItem;

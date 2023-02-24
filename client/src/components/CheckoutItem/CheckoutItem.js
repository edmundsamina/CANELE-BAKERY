import { useShoppingCart } from "../../ShoppingCartContext/ShoppingCartContext";

export default function CheckoutItem(props) {
  const { removeFromCart } = useShoppingCart();

  return (
    <div className="checkout-item">
      <div className="checkout-img-container">
        <img className="checkout-img" src={props.img} alt={props.title} />
        <h4 className="checkout-item-name">{props.title}</h4>
      </div>
      <div className="checkout-text-container">
        <p>{props.totalPrice}</p>
        <p className="checkout-quantity">{props.quantity}</p>
        <p
          onClick={() => {
            removeFromCart(props.id);
          }}
        >
          Remove
        </p>
      </div>
    </div>
  );
}

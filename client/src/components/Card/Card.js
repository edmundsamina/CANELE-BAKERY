import basketImg from "../../assets/icons/shopping-basket.png";
import { useShoppingCart } from "../../ShoppingCartContext/ShoppingCartContext";

export default function Card(props) {

  const { increaseCartQuantity } = useShoppingCart();

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "GBP",
    style: "currency",
  });


  return (
    <div className="single-card">
      <img className="card-image" src={props.img} alt={props.title} />
      <div className="card-info">
        <div className="card-text">
          <h4 className="card-title">{props.title}</h4>
        </div>
        <div className="card-text">
          <p className="card-price">{CURRENCY_FORMATTER.format(props.price)}</p>
          <button
            className="card-button"
            onClick={() => {
              increaseCartQuantity(props.id, props);
            }}
          >
            ADD{" "}
            <img
              className="basket-image"
              src={basketImg}
              alt="shopping basket icon"
            />
          </button>{" "}
          
        </div>
      </div>
    </div>
  );
}

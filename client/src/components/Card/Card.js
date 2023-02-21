import basketImg from '../../assets/icons/shopping-basket.png'
import { useShoppingCart } from '../../ShoppingCartContext/ShoppingCartContext';


export default function Card(props) {
  const {  increaseCartQuantity } = useShoppingCart()


  return (
    <div className="single-card">
      <img className="card-image" src={props.img} alt={props.title} />
      <div className="card-info">
        <div className="card-text">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-price">£{props.price}0</p>
        </div>
        <button className="card-button"onClick={()=>{increaseCartQuantity(props.id)}}>ADD <img className='basket-image' src={basketImg} alt='shopping basket icon'/></button>
      </div>
    </div>
  );
}

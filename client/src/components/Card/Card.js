import basketImg from '../../assets/icons/shopping-basket.png'

export default function Card(props) {
  return (
    <div className="single-card">
      <img className="card-image" src={props.img} alt={props.title} />
      <div className="card-info">
        <div className="card-text">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-price">£{props.price}0</p>
        </div>
        <button className="card-button"onClick={props.onClick}>ADD <img className='basket-image' src={basketImg} alt='shopping basket icon'/></button>
      </div>
    </div>
  );
}

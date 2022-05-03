import "./style.css";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div>
        <img className="product-image" src={props.image} alt={props.title} />
      </div>
      <div className="card-info">
        <div>
          <h4>{props.title}</h4>
          <h3>{props.price}</h3>
          <h3>{props.rating}</h3>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

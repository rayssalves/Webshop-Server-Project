import "./style.css";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card" key={props.id}>
      <div>
        <img className="product-image" src={props.image} alt={props.title} />
      </div>
      <div className="card-info">
        <div>
          <NavLink to={`/details/${props.id}`}>{props.title}</NavLink>
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

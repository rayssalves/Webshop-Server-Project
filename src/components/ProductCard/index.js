export default function ProductCard(props) {
  return (
    <div>
      <div>
        <h4>{props.title}</h4>
        <h3>{props.price}</h3>
        <h3>{props.rating}</h3>
      </div>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

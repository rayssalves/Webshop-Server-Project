import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const DetailsPage = () => {
  const routeParams = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `http://localhost:4000/products/${routeParams.id}`
      );
      console.log(response);
      setDetails(response.data);
    }
    fetchDetails();
  }, []);

  return details ? (
    <div className="product-container">
      <div>
        <img className="product-img" src={details.mainImage} alt="product" />
      </div>
      <div>
        <div className="product-title">
          <h1>{details.title}</h1>
          <p>
            <img src="/assets/Group 236.png" alt="rating starts" />
            {details.rating} <button className="add-review">Add Review</button>
          </p>
        </div>
        <div>
          <h2 className="price">€{details.price}</h2>
        </div>
        <div className="second-container">
          <p></p>
          <p className="description">{details.description}</p>
          <button className="button-add-to-card">
            <img
              className="icon-separation"
              src="/assets/fluent_cart-24-regular.png"
              alt="like"
            />
            Add to cart
          </button>
          <button className="favorite">
            <img
              className="icon-separation"
              src="/assets/Group 235.png"
              alt="like"
            />
            Favorite
          </button>
          <div>
            <p>
              Share <img src="/assets/Group 205.png" alt="like" />
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>...</p>
  );
};

{
  /* <div className="this-is-a-row">
  <img>
  <div className="this-is-a-column>
    <span>{text1}</span>
    <span>{text2}</span>
  </div>
</div> */
}

export { DetailsPage };

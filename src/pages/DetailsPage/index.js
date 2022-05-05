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
          <p>{details.rating}</p>
          <button>Add Review</button>
        </div>
        <div>
          <h2>€{details.price}</h2>
        </div>
        <div>
          []
          <p>{details.description}</p>
          <button>Add to cart</button>
          <button>
            <img src="/assets/uil_heart-alt.png" alt="like" />
            Favorite
          </button>
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

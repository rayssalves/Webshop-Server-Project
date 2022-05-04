import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const DetailsPage = () => {
  const routeParams = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails(request, response) {
      const response = await axios.get(
        `http://localhost:4000/products/${routeParams.id}`
      );
      console.log(response);
      setDetails(response.data);
    }
    fetchDetails();
  }, []);

  return details ? (
    <div>
      <h1>{details.title}</h1>
      <div>
        <img src={details.mainImage} alt=details.title />
        <div>
          <h2>€{details.price}</h2>
          <p>Details:{details.description}</p>
          <p>{details.rating}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>This product is not available anymore...</p>
  );
};

export { DetailsPage };

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageLayoutWithBanner } from "../../layout/PageWithBanner";
import axios from "axios";
import "./style.css";

const DetailsPage = () => {
  const routeParams = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${routeParams.id}`
        );
        console.log(response.data);
        return setDetails(response.data);
      } catch (error) {
        return console.log({ error: error.message });
      }
    }
    fetchDetails();
  }, []);

  return (
    <PageLayoutWithBanner>
      <div>
        {details ? (
          <div>
            <h1>{details.title}</h1>
            <div>
              <img src={details.mainImage} alt={details.title} />
              <div>
                <h2>€{details.price}</h2>
                <p>Rating: {details.rating}</p>
                <p>Details:{details.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>This product is not available anymore...</p>
        )}
      </div>
    </PageLayoutWithBanner>
  );
};

export { DetailsPage };

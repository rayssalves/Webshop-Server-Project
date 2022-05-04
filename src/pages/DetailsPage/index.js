import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const DetailsPage = () => {};

export { DetailsPage };

// function HDetailsPage() {
//   const routeParams = useParams();
//   const [house, setHouse] = useState(null);

//   useEffect(() => {
//     async function fetchHouseDetails() {
//       const response = await axios.get(
//         `https://hp-assessment-api.herokuapp.com/hp/house/${routeParams.id}`
//       );

//       console.log(response);
//       setHouse(response.data);
//     }
//     fetchHouseDetails();
//   }, []);

//   return house ? (
//     <div>
//       <h1 class="house-details">{house.name}</h1>
//       <div class="house-details-container">
//         <img class="house-img" src={house.imgUrl} alt="Harry Potter houses" />
//         <div class="content-house">
//           <h2>{house.name}</h2>
//           <p>House Animal : {house.animal}</p>
//           <p>House Color : {house.colors}</p>
//           <p>House Founder : {house.founder}</p>
//           <p>House Ghost : {house.ghost}</p>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <p>..</p>
//   );
// }
// export default HouseDetailsPage;

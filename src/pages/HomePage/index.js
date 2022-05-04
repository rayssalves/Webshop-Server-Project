import { NavBar } from "../../components";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function ShopPage() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homepage-body">
        <NavLink className="products-page-button" to="/shop">
          Our products
        </NavLink>
      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import { PageLayoutWithBanner } from "../../layout/PageWithBanner";
import "./style.css";

export default function ShopPage() {
  return (
    <PageLayoutWithBanner>
      <div className="homepage-body">
        <button className="home-page-button">
          <NavLink className="products-page-button" to="/shop">
            All the products
          </NavLink>
        </button>
      </div>
    </PageLayoutWithBanner>
  );
}

import { NavLink } from "react-router-dom";
import { PageLayoutWithBanner } from "../../layout/PageWithBanner";
import "./style.css";

export default function ShopPage() {
  return (
    <PageLayoutWithBanner>
      <div className="homepage-body">
        <NavLink className="products-page-button" to="/shop">
          Our products
        </NavLink>
      </div>
    </PageLayoutWithBanner>
  );
}

import "./style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <ul>
          <li>
            <p className="logo-footer">
              <span>The</span>Shop
            </p>
          </li>
        </ul>
      </div>
      <div className="categories-colum">
        <h1>Categories</h1>
        <ul className="list-products">
          <li>
            <NavLink to="/" className="links-footer">
              Laptops & Computers
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Cameras & Photography
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Smart Phones & Tablets
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Video Games & Consoles
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Waterproof Headphones
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="my-account">
        <h1>My Account</h1>
        <ul className="list-products">
          <li>
            <NavLink to="/" className="links-footer">
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Discount
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Returns
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Orders History
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="links-footer">
              Order Tracking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Follow-us">
        <h1>Follow Us</h1>
        <ul className="list-products">
          <img
            className="fallow-icon"
            alt="fallow social media"
            src="/assets/Group 245.png"
          />
        </ul>
      </div>
    </footer>
  );
};

export { Footer };

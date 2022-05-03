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
      </div>
    </footer>
  );
};

export { Footer };

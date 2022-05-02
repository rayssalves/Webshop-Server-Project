import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="navbar-container">
      <div class="navbar-items">
        <nav>
          <ul>
            <li>
              <NavLink to="/about">TheShop</NavLink>
            </li>
            <li>
              <NavLink to="/about">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { NavBar }; //reader asks to do like this

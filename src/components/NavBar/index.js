import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="navbar-container">
      <div class="navbar-items">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="logo">
                The<span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="icons">
        <ul>
          <li>
            <img src="/assets/Icon.png"></img>
          </li>
          <li>
            <img src="/assets/fluent_cart-24-regular.png"></img>
          </li>
          <li>
            <img src="/assets/uil_heart-alt.png"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { NavBar }; //reader asks to do like this

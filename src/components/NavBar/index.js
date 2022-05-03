import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-items">
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
                // style={({ isActive }) =>
                //   isActive ? { color: "white" } : undefined
                // }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="links"
                // style={({ isActive }) =>
                //   isActive ? { color: "white" } : undefined
                // }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="links"
                // style={({ isActive }) =>
                //   isActive ? { color: "white" } : undefined
                // }
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
                // style={({ isActive }) =>
                //   isActive ? { color: "white" } : undefined
                // }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="input">
        <input></input>
      </div>
      <div className="icons">
        <ul>
          <li>
            <img src="/assets/Icon.png" alt="user"></img>
          </li>
          <li>
            <img src="/assets/fluent_cart-24-regular.png" alt="card"></img>
          </li>
          <li>
            <img src="/assets/uil_heart-alt.png" alt="like"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { NavBar }; //reader asks to do like this

import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingcartcontext } from "../hooks/useShoppingcartcontext";

const Navigation = () => {
  const { totalItems } = useShoppingcartcontext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <NavLink to={"/"} className="navbar-brand">
          <img src="./src/assets/react.svg" alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/products"} className="nav-link">
                All Products
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark">
              <NavLink to={"/shoppingcart"} className="nav-link">
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {totalItems}
                </span>
              </NavLink>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

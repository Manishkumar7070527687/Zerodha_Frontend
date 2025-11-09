import React from "react";
import { Link } from "react-router-dom";
import "./footer_navbar.css";

// import { useLocation } from "react-router-dom";

function Navbar() {
  // const location = useLocation();
  // const currentPath = location.pathname;

  return (
    <nav className={`navbar navbar-expand-lg bg-white border-bottom`}>
      <div class="container">
        <Link class="navbar-brand " to="/">
          <img src="media/images/logo.svg" alt="" style={{ width: "25%" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link  active " to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link  active" to="/about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active " to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/price">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link  active" to="/support">
                Supports
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

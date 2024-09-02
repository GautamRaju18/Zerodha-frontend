import React from "react";
import { Link } from "react-router-dom";
// Rest of the code...


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img src="media/images/logo.svg" style={{width:'25%'}} alt="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-muted" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active text-muted" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active text-muted" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-muted" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

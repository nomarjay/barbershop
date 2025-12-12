import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm fixed-top py-3"
      style={{ backgroundColor: "#0a0c10" }}
    >
      <div className="container-fluid px-4">

        {/* BRAND */}
        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          onClick={() => setOpen(false)}
        >
          <i className="fa-solid fa-scissors me-2"></i>
          Style Cutz
        </Link>

        {/* HAMBURGER (REACT-CONTROLLED) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        {/* NAV LINKS */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto fw-semibold">

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/services"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/gallery"
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>

          </ul>

          {/* BOOK NOW BUTTON */}
          <Link
            to="/booknow"
            className="btn btn-light ms-lg-3 mt-3 mt-lg-0"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

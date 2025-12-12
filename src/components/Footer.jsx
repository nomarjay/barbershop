import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="py-4 mt-5"
      style={{ background: "#0a0c10", color: "#ccc" }}
    >
      <div className="container text-center">

        {/* BRAND */}
        <h5 className="fw-bold text-white mb-2">
          <i className="fa-solid fa-scissors me-2"></i>Style Cutz
        </h5>

        {/* CONTACT INFO */}
        <p className="mb-1">305 Blanding Blvd, Suite B, Orange Park, FL 32073</p>
        <p className="mb-3">(904) 375-9697 • support@stylecutz.com</p>

        {/* NAVIGATION (OPTIONAL QUICK LINKS) */}
        <div className="d-flex justify-content-center gap-4 mb-3 flex-wrap">
          <Link to="/" className="footer-link text-decoration-none text-light">
            Home
          </Link>
          <Link to="/services" className="footer-link text-decoration-none text-light">
            Services
          </Link>
          <Link to="/about" className="footer-link text-decoration-none text-light">
            About
          </Link>
          <Link to="/contact" className="footer-link text-decoration-none text-light">
            Contact
          </Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#" className="text-light" aria-label="Facebook">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-light" aria-label="Instagram">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-light" aria-label="Twitter">
            <i className="fa-brands fa-twitter fa-lg"></i>
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-3 mb-0" style={{ fontSize: "0.9rem", color: "#888" }}>
          © {new Date().getFullYear()} Style Cutz Barbershop. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;

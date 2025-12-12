import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  title,
  subtitle,
  image,
  height = "70vh",
  ctaPrimary ,
  ctaPrimaryLink,
  ctaSecondary,
  ctaSecondaryLink
}) => {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage: `url(${image})`,
        height: height,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >

      {/* Dark overlay */}
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container text-center text-white"
        style={{ zIndex: 2 }}
      >
        <h1 className="display-4 fw-bold mb-3">{title}</h1>

        {subtitle && (
          <p className="lead mb-4" style={{ maxWidth: "650px", margin: "0 auto" }}>
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          {ctaPrimary && (
            <Link to={ctaPrimaryLink} className="btn btn-light btn-lg">
              {ctaPrimary}
            </Link>
          )}

          {ctaSecondary && (
            <Link to={ctaSecondaryLink} className="btn btn-outline-light btn-lg">
              {ctaSecondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

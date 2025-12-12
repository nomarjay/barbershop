import React from "react";

const PricingSection = ({ title, subtitle, items = [], image }) => {
  return (
    <section className="py-5">
      <div className="container">

        {/* Title Block */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">{title}</h2>
          {subtitle && <p className="text-muted">{subtitle}</p>}
        </div>

        <div className="row g-4 align-items-center">

          {/* LEFT: Pricing List */}
          <div className="col-lg-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <span className="fw-semibold">{item.name}</span>
                <span className="fw-bold">${item.price}</span>
              </div>
            ))}
          </div>

          {/* RIGHT: Image */}
          <div className="col-lg-6">
            {image && (
              <img
                src={image.src ?? image}
                alt={image.alt || "Pricing haircut example"}
                className="img-fluid rounded shadow-sm"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  ...image.style,
                }}
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;

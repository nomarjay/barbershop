import React from "react";

const ServicesSection = ({ title, subtitle, services = [] }) => {
  return (
    <section className="py-5">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">{title}</h2>
          {subtitle && <p className="text-muted">{subtitle}</p>}
        </div>

        {/* Service Cards Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">

                {/* Card Image */}
                {service.image && (
                  <img
                    src={service.image.src ?? service.image}
                    alt={service.image.alt || service.title}
                    className="card-img-top"
                    loading = "lazy"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      ...service.image.style
                    }}
                  />
                )}

                {/* Card Body */}
                <div className="card-body">
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>

                  {/* Feature List */}
                  {service.features && (
                    <ul className="list-unstyled mt-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="mb-1">
                          <i className="fa-solid fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

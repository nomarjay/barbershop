import React from "react";

const GallerySection = ({ title, images = [] }) => {
  return (
    <section className="py-5">
      <div className="container">

        {/* Section Title */}
        <h2 className="text-center fw-bold mb-4">{title}</h2>

        {/* Gallery Grid */}
        <div className="row g-4">
          {images.map((img, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="gallery-image-wrapper rounded overflow-hidden shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt || `Gallery image ${index + 1}`}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;

import React from "react";

const ContentSection = ({
  title,
  subtitles = [],
  image,
  imageAlt = "Section image",
  imageStyle = {},
  reverse = false,     // image right
  vertical = false,    // image on top
}) => {
  // Convert image prop to a consistent usable object
  const imgSrc = typeof image === "object" && image.src ? image.src : image;
  const imgStyles = typeof image === "object" && image.style ? { ...image.style, ...imageStyle } : imageStyle;

  // Choose layout class
  const layoutClass = vertical
    ? "d-flex flex-column align-items-center"
    : `row align-items-center ${reverse ? "flex-row-reverse" : ""}`;

  return (
    <section className="content-section py-5">
      <div className="container">

        <div className={layoutClass}>

          {/* IMAGE COLUMN */}
          {imgSrc && (
            <div className={vertical ? "col-12 mb-4 text-center" : "col-lg-6 mb-4"}>
              <img
                src={imgSrc}
                alt={imageAlt}
                className="img-fluid rounded shadow-sm"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  ...imgStyles
                }}
              />
            </div>
          )}

          {/* TEXT COLUMN */}
          <div className={vertical ? "col-12 text-center" : "col-lg-6"}>
            {title && <h3 className="fw-bold mb-3">{title}</h3>}

            {subtitles.map((text, index) => (
              <p key={index} className="mb-3">{text}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentSection;

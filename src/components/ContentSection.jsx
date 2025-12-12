import React from "react";

const ContentSection = ({
  image,
  imageStyle = {},
  title,
  subtitles = [],
  reverse = false,        // if true, image appears on the RIGHT
  vertical = false,       // if true, text appears UNDER the image
}) => {
  // Decide row layout based on props
  const rowClass = vertical
    ? "d-flex flex-column align-items-center"
    : `row align-items-center ${reverse ? "flex-row-reverse" : ""}`;

  return (
    <div className="my-5 py-4">
      <div className={rowClass}>

        {/* IMAGE */}
        <div className={vertical ? "col-12 mb-4 text-center" : "col-lg-6 mb-4"}>
          <img
            src={typeof image === "object" ? image.src : image}
            alt={title}
            className="img-fluid rounded"
            style={typeof image === "object" ? image.style : imageStyle}
          />
        </div>

        {/* TEXT */}
        <div className={vertical ? "col-12" : "col-lg-6"}>
          {title && <h3 className="fw-bold mb-3 text-center">{title}</h3>}

          {subtitles.map((text, index) => (
            <p key={index} className="mb-3">
              {text}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContentSection;

import React from "react";
import Hero from "../components/Hero";
import GallerySection from "../components/GallerySection";

// REAL images from your ZIP
import heroImage from "../assets/pexels-zvolskiy-1570807.jpg";
import img1 from "../assets/chris-knight-vI3m5UnZ0aQ-unsplash.jpg";
import img2 from "../assets/jason-leung-2seUdPQNy_I-unsplash.jpg";
import img3 from "../assets/joshua-lawrence-dU6eE_j2My8-unsplash.jpg";
import img4 from "../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg";
import img5 from "../assets/pexels-zvolskiy-1570807.jpg"; // reuse on purpose
import img6 from "../assets/chris-knight-vI3m5UnZ0aQ-unsplash.jpg"; // reuse
import img7 from "../assets/joshua-lawrence-dU6eE_j2My8-unsplash.jpg"; // reuse
import img8 from "../assets/jason-leung-2seUdPQNy_I-unsplash.jpg"; // reuse

const Gallery = () => {
  return (
    <>
      <Hero
        image={heroImage}
        title="Gallery"
        subtitle="A collection of our freshest cuts, fades, tapers, beard work, and razor finishes."
        ctaPrimary="Book Now"
        ctaPrimaryLink="/contact"
        ctaSecondary="View Services"
        ctaSecondaryLink="/services"
      />

      <GallerySection
        title="Style Cutz Portfolio"
        images={[
          { src: img1, alt: "Barber performing a fade haircut" },
          { src: img2, alt: "Detailed beard grooming with razor" },
          { src: img3, alt: "Taper fade haircut with clean lines" },
          { src: img4, alt: "Line-up and razor detailing" },
          { src: img5, alt: "Barber tools and workstation setup" },
          { src: img6, alt: "Sharp edge-up haircut from Style Cutz" },
          { src: img7, alt: "Fade haircut with crisp part" },
          { src: img8, alt: "Professional barber shaping beard" },
        ]}
      />
    </>
  );
};

export default Gallery;

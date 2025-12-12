import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import ContentSection from "../components/ContentSection";

// REAL ASSET IMAGES
import heroImage from "../assets/pexels-zvolskiy-1570807.jpg";
import img1 from "../assets/chris-knight-vI3m5UnZ0aQ-unsplash.jpg";
import img2 from "../assets/jason-leung-2seUdPQNy_I-unsplash.jpg";
import img3 from "../assets/joshua-lawrence-dU6eE_j2My8-unsplash.jpg";
import img4 from "../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg";

const Services = () => {
  return (
    <>
      <Hero
        image={heroImage}
        title="Our Barbering Services"
        subtitle="Premium grooming tailored to your style."
        ctaPrimary="Book Now"
        ctaPrimaryLink="/contact"
        ctaSecondary="View Pricing"
        ctaSecondaryLink="/pricing"
      />

      <ServicesSection
        title="Professional Grooming Services"
        subtitle="From precision fades to luxury razor shaves."
        services={[
          {
            title: "Fade & Taper Cuts",
            description:
              "Smooth transitions with flawless detail and clean silhouettes.",
            image: { src: img1, alt: "Fade haircut" },
            features: ["Skin fades", "Shadow fades", "Mid/low/high tapers"],
          },
          {
            title: "Beard Grooming",
            description:
              "Detailed trims with razor-finished shaping for sharp results.",
            image: { src: img2, alt: "Beard grooming service" },
            features: ["Razor line-up", "Hot towel prep", "Symmetry shaping"],
          },
          {
            title: "Razor Shaves",
            description:
              "Hot towel shaves with smooth, relaxing classic technique.",
            image: { src: img3, alt: "Razor shave service" },
            features: ["Hot lather", "Exfoliation", "Aftershave finish"],
          },
          {
            title: "Hair + Beard Combo",
            description:
              "The perfect pairing: fresh cut plus clean beard detailing.",
            image: { src: img4, alt: "Hair and beard combo" },
            features: ["Full haircut", "Beard sculpting", "Razor detailing"],
          },
        ]}
      />

      <ContentSection
        vertical={true}
        title="The Style Cutz Experience"
        image={img1}
        imageAlt="Barber equipment on workstation"
        imageStyle={{ height: "450px" }}
        subtitles={[
          "Every service is delivered with care, precision, and consistency.",
          "Our barbers specialize in modern styles while honoring classic foundations.",
          "We treat every client like family — your confidence is our craft.",
        ]}
      />
    </>
  );
};

export default Services;

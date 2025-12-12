import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import GallerySection from "../components/GallerySection";
import ContentSection from "../components/ContentSection";

// REAL ASSET IMAGES
import heroImage from "../assets/pexels-zvolskiy-1570807.jpg";
import img1 from "../assets/chris-knight-vI3m5UnZ0aQ-unsplash.jpg";
import img2 from "../assets/jason-leung-2seUdPQNy_I-unsplash.jpg";
import img3 from "../assets/joshua-lawrence-dU6eE_j2My8-unsplash.jpg";
import img4 from "../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg";

const Home = () => {
  return (
    <>
      <Hero
        image={heroImage}
        title="Premium Cuts. Modern Style."
        subtitle="Experience precision barbering from skilled professionals."
        ctaPrimary="Book Now"
        ctaPrimaryLink="/contact"
        ctaSecondary="View Services"
        ctaSecondaryLink="/services"
      />

      <ServicesSection
        title="Our Services"
        subtitle="Professional grooming tailored to your style."
        services={[
          {
            title: "Fade & Taper Cuts",
            description: "Clean fades, sharp tapers, and detailed precision work.",
            image: { src: img1, alt: "Fade haircut" },
          },
          {
            title: "Beard Grooming",
            description: "Sharp line-ups and sculpted beard finishes.",
            image: { src: img2, alt: "Beard grooming" },
          },
          {
            title: "Razor Shaves",
            description: "Hot towel razor shaves with smooth finishing.",
            image: { src: img3, alt: "Razor shave" },
          },
        ]}
      />

      <PricingSection
        title="Our Pricing"
        subtitle="Premium cuts at fair, competitive rates."
        image={{
          src: img4,
          alt: "Barber performing a haircut",
          style: { height: "450px" },
        }}
        items={[
          { name: "Classic Haircut", price: 25 },
          { name: "Fade / Taper Fade", price: 30 },
          { name: "Beard Trim", price: 15 },
          { name: "Hot Towel Shave", price: 20 },
          { name: "Kids Cut", price: 20 },
          { name: "Haircut + Beard Combo", price: 40 },
        ]}
      />

      <GallerySection
        title="Shop Gallery"
        images={[
          { src: img1, alt: "Barbering style example" },
          { src: img2, alt: "Barber grooming beard" },
          { src: img3, alt: "Fresh taper fade" },
          { src: img4, alt: "Line-up detail" },
        ]}
      />

      <ContentSection
        vertical={true}
        title="Experience the Style Cutz Difference"
        image={img1}
        imageAlt="Barber tools and equipment"
        imageStyle={{ height: "450px" }}
        subtitles={[
          "A barbershop rooted in skill and culture.",
          "Every client receives high-quality grooming tailored to their style.",
          "Walk-ins welcome — appointments recommended.",
        ]}
      />
    </>
  );
};

export default Home;

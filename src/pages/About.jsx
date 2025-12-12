import React from "react";
import Hero from "../components/Hero";
import ContentSection from "../components/ContentSection";

// IMPORT IMAGES
import heroImage from "../assets/pexels-zvolskiy-1570807.jpg";
import founderImg from "../assets/jason-leung-2seUdPQNy_I-unsplash.jpg";
import shopImg from "../assets/joshua-lawrence-dU6eE_j2My8-unsplash.jpg";
import cultureImg from "../assets/chris-knight-vI3m5UnZ0aQ-unsplash.jpg";

const About = () => {
  return (
    <>
      {/* HERO */}
      <Hero
        image={heroImage}
        title="About Style Cutz Barbershop"
        subtitle="Where tradition, culture, and craftsmanship come together."
        ctaPrimary="Book Now"
        ctaPrimaryLink="/contact"
        ctaSecondary="View Services"
        ctaSecondaryLink="/services"
      />

      {/* SECTION 1 — ORIGIN STORY */}
      <ContentSection
        title="Where Craftsmanship Meets Culture"
        image={cultureImg}
        imageAlt="Barber holding clippers while cutting hair"
        imageStyle={{ height: "500px" }}
        subtitles={[
          "Founded in 2010, Style Cutz Barbershop began as a two-chair shop built around community, respect, and precision. From day one, the goal was simple — deliver haircuts that make people feel confident from the inside out.",
          "As the shop grew, so did our reputation for clean fades, sharp line-ups, and professional service. Every barber who joins the team brings experience, personality, and a passion for pushing their craft to the next level.",
          "Today, Style Cutz stands as one of the most trusted grooming spots in Orange Park — a place where people from all walks of life come together for great cuts and even better energy."
        ]}
      />

      {/* SECTION 2 — FOUNDER STORY (IMAGE RIGHT) */}
      <ContentSection
        title="Meet Our Founder: Marcus “Clipper King” Howard"
        reverse={true}
        image={founderImg}
        imageAlt="Founder Marcus Howard cutting a client's hair"
        imageStyle={{ height: "500px" }}
        subtitles={[
          "Marcus Howard began cutting hair at age 14 using a pair of bargain clippers in his grandmother’s garage. What started as a side hustle quickly became a true craft, driven by practice, passion, and purpose.",
          "After studying under master barbers across the East Coast, Marcus opened Style Cutz with a vision: build a shop rooted in skill, culture, and genuine hospitality — not just fast haircuts.",
          "Marcus continues to work behind the chair every week, training barbers, mentoring youth, and shaping the future of the local barbering community."
        ]}
      />

      {/* SECTION 3 — SHOP INTERIOR (VERTICAL) */}
      <ContentSection
        vertical={true}
        title="A Shop Designed for Comfort & Style"
        image={shopImg}
        imageAlt="Interior of Style Cutz barbershop with modern chairs and lighting"
        imageStyle={{ height: "450px" }}
        subtitles={[
          "Our interior blends modern minimalism with classic barbershop roots — leather chairs, soft lighting, curated artwork, and an atmosphere built for comfort.",
          "Every detail was designed with the client experience in mind: clean stations, organized tools, and a welcoming vibe from the moment you walk through the door.",
          "Whether you're here for a quick beard cleanup or a full transformation, we make sure your visit is relaxing, professional, and unforgettable."
        ]}
      />

      {/* SECTION 4 — CULTURE BLOCK */}
      <section className="py-5" style={{ background: "#111318" }}>
        <div className="container text-center text-white">

          <h3 className="fw-bold mb-4">Our Culture, Our Identity</h3>

          <p className="lead mx-auto text-white" style={{ maxWidth: "800px" }}>
            Style Cutz is more than a barbershop — it's a community hub. A space
            for artists, thinkers, entrepreneurs, athletes, fathers, sons,
            students, and everyone in between. Our chairs carry stories, energy,
            growth, and legacy.
          </p>

          <div className="row mt-5 text-start">

            <div className="col-md-4 mb-4">
              <h5 className="text-white">Precision & Craftsmanship</h5>
              <p className="text-light">
                Every cut is executed with mastery — clean lines, smooth fades,
                sharp detail, and consistent quality.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="text-white">Modern Style Expertise</h5>
              <p className="text-light">
                We specialize in fades, tapers, beard sculpting, razor work,
                and trend-setting cuts shaped to your style.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="text-white">Community First</h5>
              <p className="text-light">
                We support youth programs, local schools, and neighborhood
                events — because Style Cutz belongs to its community.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;

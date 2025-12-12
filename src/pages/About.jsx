import React from 'react'
import Hero from '../components/Hero'
import heroImage from '../assets/pexels-zvolskiy-1570807.jpg'
import image1 from '../assets/chris-knight-vI3m5UnZ0aQ-unsplash.jpg'
import image2 from '../assets/jason-leung-2seUdPQNy_I-unsplash.jpg'
import image3 from '../assets/joshua-lawrence-dU6eE_j2My8-unsplash.jpg'
import ContentSection from '../components/ContentSection'





const About = () => {
  return (
    <>
      <Hero
        image={heroImage}
        title="Style Cutz"
        subtitle="Book an appointment now"
      />

      <section id="about" className="container py-5">
        <ContentSection
          image={{ src: image1, style: { height: "500px", objectFit: "cover" } }}
          vertical={true}
          title="Where Craftsmanship Meets Cultures"
          subtitles={[
            "Founded in 2010, Style Cutz Barbershop began as a small two-chair setup built on a simple belief: a haircut should be more than a routine errand — it should be an experience that uplifts your confidence. What started as a modest neighborhood barbershop in Orange Park has grown into a local icon known for precision, personality, and a culture all its own.",
            "Our barbers combine years of training with a genuine passion for style. Every fade, beard trim, and razor finish is crafted with meticulous attention to detail. From classic gentleman cuts to modern trendsetting designs, we’ve shaped the looks of thousands of clients who trust Style Cutz to keep them looking and feeling their best.",
            "But more than anything, Style Cutz is a place of community. A space where conversations flow, friendships form, and confidence is built one cut at a time."
          ]}        
        />

        <ContentSection
          image={{ src: image2, style: { height: "500px", width: "100%", objectFit: "cover" } }}
          title="Meet Our Founder: Marcus “Clipper King” Howard"
          subtitles={[
            "Before Style Cutz was a barbershop, it was a dream carried by Marcus Howard — a Jacksonville native who started cutting hair in his grandmother’s garage at age 14. What began as neighborhood trims slowly grew into a true craft fueled by passion, creativity, and relentless dedication.",
            "Marcus studied under master barbers across the East Coast, mastering the art of the razor, perfect fade transitions, and contemporary styling techniques. After years of honing his skills, he opened Style Cutz with the mission to create a grooming space unlike any other — a blend of traditional barbering values with modern cultural influence.",
            "Today, Marcus still works behind the chair, training new barbers, pushing industry standards, and ensuring that every cut delivered at Style Cutz carries the same level of excellence he built his reputation on."
          ]}
        />

        {/* SHOP CULTURE SECTION */}
        <div className="d-flex row">
          <div className="my-5 pt-5 text-center">
            <h3 className="fw-bold">Our Culture, Our Identity</h3>
            <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
              Style Cutz isn’t just a barbershop — it’s a home for artists, thinkers, hustlers, creators,
              students, professionals, fathers, sons, and everyone who walks through our door.
              Our chairs carry stories, energy, laughter, and legacy.
              We cut hair, but we also uplift people.
            </p>
          </div>
          {/* VALUES ROW */}
          <div className="row mt-4 g-4 text-center">
            <div className="col-md-4">
              <h5>Precision & Craftsmanship</h5>
              <p>
                Every cut is executed with mastery — clean lines, smooth transitions,
                and razor-sharp detail.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Modern Style Expertise</h5>
              <p>
                From classic tapers to advanced fades, designs, and beard artistry,
                our team is trained to deliver any style you envision.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Community First</h5>
              <p>
                Style Cutz actively supports local schools, youth programs, and community events.
                We believe in giving back to the people who support us.
              </p>
            </div>
          </div>
        </div>

        {/* SHOP IMAGE SECTION */}
        <ContentSection
          image={{ src: image3, style: { height: "500px", width: "100%", objectFit: "cover" } }}
          reverse={true}
          title="A Shop Designed for Comfort & Style"
          subtitles={[
            "The interior of Style Cutz blends modern minimalism with classic barbershop aesthetics: leather chairs, warm lighting, clean lines, and curated artwork celebrating barbering culture. Every detail is designed to elevate your grooming experience.",
            "Whether you're preparing for a job interview, a wedding, a big night out, or just want to look your best, our shop ensures you feel relaxed, refreshed, and confident from the moment you sit down to the moment you walk out."
          ]}        
        />
        </section>
      </>
  )
}

export default About
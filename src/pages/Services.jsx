import React from "react";
import Card from "../components/Card";
import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import AboutSection from '../components/AboutSection';

import heroImage from '../assets/barber-4618697_1280.jpg';
import imgClassic from "../assets/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg";
import imgFade from "../assets/haircut-4019676_1280.jpg";
import imgShave from "../assets/andre-reis-1_DAlXy0wng-unsplash.jpg";
import imgBeard from "../assets/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import imgKids from "../assets/pexels-lumierestudiomx-897262.jpg";
import imgPackage from "../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg";
import pricingImage from '../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg'
import aboutImage from '../assets/pexels-zvolskiy-1570807.jpg'



export default function Services() {

  const serviceData = [
    {
        image: imgClassic,
        icon: "fa-solid fa-scissors",
        title: "Classic Haircuts",
        subtitle: "Traditional, precise cuts inspired by timeless barbering techniques.",
        listItems: [
        "Scissor & clipper blends",
        "Side-part, taper, crew, and gentleman cuts",
        "Complimentary style consultation",
        "Neck shave & finishing touches"
        ]
    },
    {
        image: imgFade,
        icon: "fa-solid fa-user",
        title: "Fade & Modern Styles",
        subtitle:
        "Sharp contemporary fades with perfectly blended transitions for modern looks.",
        listItems: ["Skin, mid, high & burst fades", "Edge-ups", "Texturizing", "Modern styling"]
    },
    {
        image: imgShave,
        icon: "fa-solid fa-hot-tub",
        title: "Hot Towel Shave",
        subtitle:
        "Classic, premium straight razor shave with hot towel treatment.",
        listItems: ["Straight razor shave", "Steam towels", "Premium shave cream", "Aftershave care"]
    },
    {
        image: imgBeard,
        icon: "fa-solid fa-user-tie",
        title: "Beard Grooming",
        subtitle:
        "Professional beard trimming, shaping, and conditioning.",
        listItems: ["Trimming & shaping", "Razor lines", "Beard conditioning", "Oil finish"]
    },
    {
        image: imgKids,
        icon: "fa-solid fa-child",
        title: "Kids & Teen Cuts",
        subtitle: "Clean, stylish cuts for ages 3–17.",
        listItems: ["Kids cuts", "Teen styles", "Gentle service", "Friendly barbers"]
    },
    {
        image: imgPackage,
        icon: "fa-solid fa-star",
        title: "Full Grooming Package",
        subtitle:
        "The complete grooming experience for any special occasion.",
        listItems: ["Haircut", "Shave/beard", "Eyebrow cleanup", "Styled finish"]
    }
    ];

    return (
      <>
            <Hero
            title="Best Barber in Orange Park,"
            subtitle="Experience the finest barbering services with skilled professionals"
                image={heroImage}
            />
    

            <section className="container mt-4">
                {/* PAGE HEADER */}
                <div>
                    <h2 className="section-title">Our Services</h2>
                    <p className="text-center mb-5">
                    Premium grooming services crafted with precision, care, and mastery.
                    </p>
                </div>

                {/* SERVICE CARDS */}
                <div className="row row-gap-4 g-4">
                    {serviceData.map((service, index) => (
                        <Card
                        key={index}
                        image={service.image}
                        icon={service.icon}
                        title={service.title}
                        subtitle={service.subtitle}
                        listItems={service.listItems}
                        />
                    ))}
                </div>
            </section>

            <PricingSection
                image={pricingImage}
            />
                
            <AboutSection
                image={aboutImage}
            />
        </>
  );
}

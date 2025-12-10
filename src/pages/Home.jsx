import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import PricingSection from '../components/PricingSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'
import AboutSection from '../components/AboutSection'

import heroImage from '../assets/frantisek-canik-k6RsU8om2UE-unsplash.jpg'
import logo from '../assets/logo.svg'
import pricingImage from '../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg'
import aboutImage from '../assets/pexels-zvolskiy-1570807.jpg'; 

const Home = () => {
    return (
      <>
        <Hero
          title={<img src={logo} alt='logo'/>}
          subtitle="Experience the finest barbering services with skilled professionals"
          image={heroImage}
        />
        <ServicesSection/>
        <PricingSection
          image={pricingImage} />
        <GallerySection />
        <ContactSection />
        <AboutSection
          image={aboutImage}
        />
    </>
  )
}

export default Home
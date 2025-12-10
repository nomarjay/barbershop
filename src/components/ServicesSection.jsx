import React from 'react'
import Card from '../components/Card'
import haircut from '../assets/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg'
import shave from '../assets/andre-reis-1_DAlXy0wng-unsplash.jpg'
import fade from '../assets/allef-vinicius-IvQeAVeJULw-unsplash.jpg'



const ServicesSection = () => {
  return (
    <section className="py-5" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center mb-5">Professional barbering services tailored to your style</p>

        <div className="row g-4">
          <Card
            image={haircut}
            icon="fa-solid scissors"
            title="Classic Cuts"
            subtitle="Traditional barbering with modern precision."
            listItems={[
              "Scissor Cuts",
              "Razor Cuts",
              "Style Consultation"
            ]}          
          />

          <Card
            image={shave}
            icon="fa-solid fa-hot-tub"
            title="Hot Towel Shave"
            subtitle="Relaxing straight razor treatment"
            listItems={[
              "Hot towel prep",
              "Premium shaving cream",
              "Straight razor shave"
            ]}          
          />

          <Card
            image={fade}
            icon="fa-solid fa-beard"
            title="Beard Grooming"
            subtitle="Sharp lines and structured beard work."
            listItems={[
              "Line-ups",
              "Conditioning",
              "Beard shaping",
            ]}
          />

        </div>
      </div>
    </section>
  )
}

export default ServicesSection
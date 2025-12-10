import React from 'react'
import aboutImage from '../assets/pexels-zvolskiy-1570807.jpg'
const Gallery = () => {
  return (

    <section id="about" className="py-5">
      <div className="container">

        {/* PAGE TITLE */}
        <h2 className="section-title">About Style Cutz</h2>

        <div className="row align-items-center mt-4">
          
          {/* LEFT COLUMN – TEXT */}
          <div className="col-lg-6">
            <p>
              For over <strong>15 years</strong>, Style Cutz has been the trusted 
              barbershop for men, teens, and families in the Orange Park community.  
              Our barbers combine old-school craftsmanship with modern technique to 
              deliver haircuts that are sharp, clean, and tailored to each client’s style.
            </p>

            <p>
              We believe a barbershop is more than a place to get a haircut—it's a 
              space for conversation, style, confidence, and connection. Whether 
              you're here for a classic gentleman’s cut, a modern fade, or a full 
              grooming transformation, our team is committed to delivering an 
              experience that is professional, comfortable, and memorable.
            </p>

            <p>
              Every service is performed with precision and attention to detail,  
              and we pride ourselves on consistency, cleanliness, and genuine customer care.
            </p>

            {/* METRICS ROW */}
            <div className="row text-center mt-4">
              <div className="col-6 col-md-3">
                <h4>15+</h4>
                <small>Years of Experience</small>
              </div>
              <div className="col-6 col-md-3">
                <h4>5000+</h4>
                <small>Satisfied Clients</small>
              </div>
              <div className="col-6 col-md-3">
                <h4>3</h4>
                <small>Master Barbers</small>
              </div>
              <div className="col-6 col-md-3">
                <h4>4.9</h4>
                <small>Average Rating</small>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – IMAGE */}
          <div className="col-lg-6 mt-4">
            <img
              src={aboutImage}
              alt="About Style Cutz"
              className="side-img img-fluid rounded"
            />
          </div>

        </div>

        {/* EXTRA SECTION – SHOP VALUES */}
        <div className="mt-5 pt-4 text-center">
          <h3 className="fw-bold mb-3">Our Commitment</h3>
          <p className="lead mx-auto" style={{ maxWidth: "750px" }}>
            At Style Cutz, we’re committed to providing more than a haircut — 
            we provide an elevated grooming experience.  
            From the moment you walk in, our goal is to ensure you leave feeling 
            confident, refreshed, and looking your very best.
          </p>
        </div>

        <div className="row mt-4 g-4 text-center">
          <div className="col-md-4">
            <h5>Precision Craftsmanship</h5>
            <p>Every cut, fade, and shave is executed with skill and attention to detail.</p>
          </div>

          <div className="col-md-4">
            <h5>Modern & Classic Styles</h5>
            <p>We master both traditional techniques and today’s trending looks.</p>
          </div>

          <div className="col-md-4">
            <h5>Customer-Focused Service</h5>
            <p>Your comfort and satisfaction are at the center of everything we do.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Gallery
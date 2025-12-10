import React from 'react'
import aboutImage from '../assets/pexels-zvolskiy-1570807.jpg'


const AboutSection = () => {
  return (
    <section className="py-5" id="about">
        <div className="container">
            <h2 className="section-title">About Style Cutz</h2>
            <div className="row align-items-center mt-4">

            <div className="col-lg-6">
                <p>With over 15 years of experience, Style Cutz is the premier destination for discerning gentlemen seeking exceptional grooming services.</p>
                <p>Our master barbers blend traditional techniques with modern styling to deliver cuts that enhance your natural features.</p>

                <div className="row text-center mt-4">
                <div className="col-6 col-md-3"><h4>15+</h4><small>Years</small></div>
                <div className="col-6 col-md-3"><h4>5000+</h4><small>Clients</small></div>
                <div className="col-6 col-md-3"><h4>3</h4><small>Master Barbers</small></div>
                <div className="col-6 col-md-3"><h4>4.9</h4><small>Rating</small></div>
                </div>
            </div>

            <div className="col-lg-6 mt-4">
                <img src={aboutImage} alt="man getting haircut" className="side-img img-fluid rounded"/>
            </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection
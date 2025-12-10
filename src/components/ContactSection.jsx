import React from 'react'

const ContactSection = () => {
  return (
    <section className="dark-section" id="contact">
      <div className="container">
        <h2 className="section-title text-white">Get in Touch</h2>

        <div className="row gx-5 mt-4">

          <div className="col-lg-5">
            <h5><i className="fa-solid fa-location-dot me-2"></i>Location</h5>
            <p>305 Blanding Boulevard, Suite B, Orange Park, FL 32073</p>

            <h5 className="mt-4"><i className="fa-solid fa-phone me-2"></i>Phone</h5>
            <p>(904) 375-9697</p>

            <h5 className="mt-4"><i className="fa-solid fa-clock me-2"></i>Hours</h5>
            <p>Mon–Sat: 10AM–9PM<br/>Sun: Closed</p>
          </div>

          <div className="col-lg-7">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.3297150975195!2d-81.74651329999999!3d30.17057410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c42604354cb3%3A0xb46b6aaa8751faf7!2sStyle%20Cutz%20Barbershop!5e0!3m2!1sen!2sus!4v1764891561035!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded"></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
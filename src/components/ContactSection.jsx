import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-5" style={{ background: "#111318" }}>
      <div className="container text-white">

        {/* Title */}
        <h2 className="section-title text-center text-white mb-4">
          Get in Touch
        </h2>

        <div className="row gx-5 gy-4 mt-4 align-items-start">

          {/* LEFT COLUMN — CONTACT INFO */}
          <div className="col-lg-5">
            <h5 className="mb-2">
              <i className="fa-solid fa-location-dot me-2"></i>
              Location
            </h5>
            <p className="mb-4">
              305 Blanding Boulevard, Suite B, Orange Park, FL 32073
            </p>

            <h5 className="mb-2">
              <i className="fa-solid fa-phone me-2"></i>
              Phone
            </h5>
            <p className="mb-4">(904) 375-9697</p>

            <h5 className="mb-2">
              <i className="fa-solid fa-clock me-2"></i>
              Hours
            </h5>
            <p className="mb-4">
              Mon–Sat: 10AM–9PM
              <br />
              Sun: Closed
            </p>

            <h5 className="mb-2">
              <i className="fa-solid fa-envelope me-2"></i>
              Email
            </h5>
            <p className="mb-4">support@stylecutz.com</p>

            <h5 className="mb-2">
              <i className="fa-solid fa-scissors me-2"></i>
              Walk-Ins
            </h5>
            <p className="mb-4">
              Walk-ins welcome all day — appointments receive priority.
            </p>
          </div>

          {/* RIGHT COLUMN — GOOGLE MAP */}
          <div className="col-lg-7">
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-lg">
              <iframe
                title="Style Cutz Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.3297150975195!2d-81.74651329999999!3d30.17057410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c42604354cb3%3A0xb46b6aaa8751faf7!2sStyle%20Cutz%20Barbershop!5e0!3m2!1sen!2sus!4v1764891561035!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

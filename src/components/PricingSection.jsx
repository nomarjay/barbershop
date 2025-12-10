import React from 'react'

import image from '../assets/arthur-humeau-Twd3yaqA2NM-unsplash.jpg'


const PricingSection = () => {
  return (
    <section className="py-5" id="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="text-center mb-5">Transparent pricing for premium services</p>

        <div className="d-flex justify-content-between align-items-center">

         {/* service menu */}
          <div className="col-lg-5 p-4 pricing-card">
              <h4 className="fw-bold mb-4">Service Menu</h4>

              <ul className="d-flex flex-column gap-3">
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex flex-column">
                    <strong>Classic Haircut</strong>
                    Standard razor cut with classic style               
                  </div>
                  <strong>$20</strong>
                </li>
                <li className="d-flex justify-content-between mb-2 align-items-center">
                  <div className="d-flex flex-column">
                    <strong>Fade Cut</strong>
                    Modern fade with styling
                  </div>
                  <strong>$25</strong>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex flex-column">
                    <strong>Hot towel shave</strong>
                    Traditional straight razor shave               
                  </div>
                  <strong>$30</strong>
                </li>
                <li className="d-flex justify-content-between mb-2 align-items-center">
                  <div className="d-flex flex-column">
                    <strong>Beard Trim</strong>
                    Professional beard styling
                  </div>
                  <strong>$20</strong>
                </li>
                <li className="d-flex justify-content-between mb-2 align-items-center">
                  <div className="d-flex flex-column">
                    <strong>Full Service</strong>
                    Cut, shave, and beard trim
                  </div>
                  <strong>$45</strong>
                </li>
                <li className="d-flex justify-content-between mb-2 align-items-center">
                  <div className="d-flex flex-column">
                    <strong>Kids Cut</strong>
                    Under 12 years old
                  </div>
                  <strong>$15</strong>
                </li>
              </ul>        
          </div>
        
          {/* service img */}
          <div className="col-lg-5">
            <img src={image} alt="" className="side-img img-fluid rounded"/>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PricingSection
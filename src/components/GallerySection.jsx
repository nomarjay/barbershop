import React from 'react'

import haircut3 from '../assets/barber-4618697_1280.jpg'
import haircut4 from '../assets/haircut-4019676_1280.jpg'
import haircut5 from '../assets/pexels-lumierestudiomx-897262.jpg'
import haircut6 from '../assets/pexels-nickoloui-1319461.jpg'

const GallerySection = () => {
  return (
    <section className="py-5" id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="text-center mb-4">See our work & craftsmanship</p>

        <div className="row g-4">
          <div className="col-md-3"><img src={haircut3} className="img-fluid rounded"/></div>
          <div className="col-md-3"><img src={haircut4} className="img-fluid rounded"/></div>
          <div className="col-md-3"><img src={haircut5} className="img-fluid rounded"/></div>
          <div className="col-md-3"><img src={haircut6} className="img-fluid rounded"/></div>
        </div>

      </div>
    </section>
  )
}

export default GallerySection
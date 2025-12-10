import React from 'react'

const Hero = ({title, subtitle, image}) =>{
    return (
        <section className="hero" id="hero" style={{backgroundImage: `url(${image})`}}>
            <div className="row align-items-center justify-content-center mt-5">
                <div className="col-lg-6">
                    <h1 className='text-center'>{title}</h1>
                    <p className="lead mt-3 text-center">{subtitle}</p>

                    <div className="mt-4 text-center">
                        <a href="#contact" className="btn btn-light btn-lg me-2">Book Appointment</a>
                        <a href="#services" className="btn btn-outline-light btn-lg">View Services</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero
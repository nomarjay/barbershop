import React from 'react'

const Card = ({ image, icon, title, subtitle, listItems }) => {
  return (
      <div className="col-md-4">
          <div className="service-card">
              <img src={image} alt={title} />
              <div className="service-card-text">
                  <h2>
                      <i className={`${icon} me-2`}></i>
                      {title}
                  </h2>
                  <p>{subtitle}</p>
                  <ul>
                      {listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Card
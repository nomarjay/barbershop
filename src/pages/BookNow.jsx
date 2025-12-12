import React, { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (no backend connected).");
  };

  return (
    <section className="py-5" style={{ marginTop: "90px"}}>
      <div className="container" style={{ maxWidth: "650px" }}>
        <h2 className="fw-bold text-center mb-4">Book an Appointment</h2>

        <form className="shadow p-4 rounded bg-light" onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="(555) 555-5555"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Select Service</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Choose a service</option>
              <option value="Haircut">Haircut</option>
              <option value="Fade / Taper Fade">Fade / Taper Fade</option>
              <option value="Beard Trim">Beard Trim</option>
              <option value="Razor Shave">Razor Shave</option>
              <option value="Haircut + Beard Combo">Haircut + Beard Combo</option>
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Choose Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Choose Time</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Notes (optional)</label>
            <textarea
              name="note"
              rows="3"
              value={formData.note}
              onChange={handleChange}
              className="form-control"
              placeholder="Anything the barber should know?"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-dark w-100">
            Submit Booking Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNow;

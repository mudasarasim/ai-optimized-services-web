import React, { useState } from 'react';
import './ServiceDetail.css';
import image2 from '../assets/Images/i1.png';
import image3 from '../assets/Images/i2.png'; // Portfolio 1
import image4 from '../assets/Images/i5.png'; // Portfolio 2
import image5 from '../assets/Images/i3.png'; // Portfolio 3
import image6 from '../assets/Images/i4.png'; // Portfolio 4


const benefits = [
  {
    icon: 'fa-solid fa-pencil-ruler',
    title: 'Enhanced Aesthetic Appeal',
    desc: 'Wallpaper adds texture, color, and pattern to your walls, creating a unique ambiance and elevating the overall decor.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Durability & Quality',
    desc: 'High-quality materials and expert installation ensure your wallpaper stays intact for years, resisting wear and tear.',
  },
  {
    icon: 'fa-solid fa-medal',
    title: 'Cost-Effective Makeover',
    desc: 'Wallpaper is a quick and effective way to refresh any room, giving your space a modern look without major renovations.',
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Versatile Designs',
    desc: 'Choose from a wide array of designs, textures, and colors to match any interior style—whether it s minimalist, bold, or classic.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Eco-Friendly Options',
    desc: 'We offer sustainable wallpaper choices made from environmentally friendly materials, combining beauty with eco-consciousness.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Easy Maintenance',
    desc: 'Most wallpapers are easy to clean and maintain, ensuring your walls look fresh and vibrant with minimal effort.',
  },
];

const processSteps = [
  {
    title: 'Initial Consultation',
    desc: 'We evaluate your space to identify your specific painting needs and preferences, ensuring all requirements are met.',
  },
  {
    title: 'Surface Preparation',
    desc: 'Thoroughly preparing surfaces to ensure optimal paint adhesion and a smooth finish.',
  },
  {
    title: 'Color Selection',
    desc: 'Assisting you in choosing the right colors and finishes based on your aesthetic preferences and functional needs.',
  },
  {
    title: 'Professional Installation',
    desc: 'Our skilled installers apply the wallpaper with precision, ensuring alignment and a smooth application without bubbles or wrinkles.',
  },
  {
    title: 'Professional Application',
    desc: 'Our skilled team carries out precise painting applications, ensuring even coverage and a flawless finish.',
  },
  {
    title: 'Final Inspection and Clean-Up',
    desc: 'Conducting a thorough inspection to ensure quality and cleanliness, leaving your space ready for use.',
  }
];

const ServiceDetail = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Air-Conditioning, Ventilation & Air Filtration Systems',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service, comments } = formData;
    const subject = encodeURIComponent("Service Inquiry from Website");
    const body = encodeURIComponent(`
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Comments: ${comments}
    `);

    window.location.href = `mailto:aioptimizedservices@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Page Banner */}
      <section
        className="page-title-section bg-img cover-background top-position theme-overlay-dark"
        data-overlay-dark="6"
        style={{ backgroundImage: 'url("img/content/bg-05.jpg")' }}
      ></section>

      {/* Section 1: Intro */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="text-uppercase text-warning fw-bold mb-2">JUSOOR ALNOKHBA</p>
            <h1 className="fw-bold display-4 mb-4">PAINTING MADE SIMPLE</h1>
            <p className="mb-4">
             At Jusoor Alnokhba, we provide expert painting services tailored to your aesthetic and functional needs.
            </p>
            <button className="btn btn-dark">
              Contact Today <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
          <div className="col-lg-6">
            <img src={image2} alt="Plumbing Installation" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Section 2: Benefits */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase text-warning fw-bold mb-2">ELEVATE YOUR SPACE</p>
          <h2 className="fw-bold">PAINTING CONTRACTING SERVICES</h2>
          <p className="text-danger fw-semibold">TRANSFORMING SPACES WITH COLOR AND CRAFTSMANSHIP</p>
        </div>

        <h4 className="fw-bold mb-4">Benefits of Our Painting Contracting Services</h4>

        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="p-4 shadow-sm border rounded bg-white h-100">
                <i className={`${benefit.icon} fa-2x text-primary mb-3`}></i>
                <h6 className="fw-bold">{benefit.title}</h6>
                <p className="mb-0 text-muted small">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Installation and Maintenance Steps */}
      <div className="container-fluid bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={image3} alt="Installation Process" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <p className="text-uppercase text-warning fw-bold">WHAT IT INVOLVES</p>
              <h2 className="fw-bold">PRECISION IN CRAFTSMANSHIP</h2>
              <p className="text-warning fw-semibold">CRAFTING PERFECTION AT EVERY STROKE</p>
              <div className="row">
                {processSteps.map((step, index) => (
                  <div className="col-sm-6 mb-4" key={index}>
                    <h6 className="fw-bold">{step.title}</h6>
                    <p className="small text-white-50 mb-0">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Portfolio Gallery */}
      <div className="container py-5">
        <p className="text-uppercase text-warning fw-bold">PAST WORK</p>
        <h2 className="fw-bold">OUR PORTFOLIO</h2>
        <p className="text-danger fw-semibold mb-4">GALLERY</p>
        <div className="row g-4">
          <div className="col-md-4">
            <img src={image6} alt="Portfolio 1" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-4">
            <img src={image4} alt="Portfolio 2" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-4">
            <img src={image5} alt="Portfolio 3" className="img-fluid rounded shadow-sm" />
          </div>
        </div>
      </div>

      {/* Section 5: Contact Form (mailto) */}
      <div className="container py-5">
        <p className="text-uppercase text-warning fw-bold">GET IN TOUCH</p>
        <h2 className="fw-bold">FILL THE FORM BELOW</h2>
        <p className="text-danger fw-semibold mb-4">YOUR VISION, OUR CRAFT</p>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input type="text" name="firstName" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input type="text" name="lastName" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-12">
              <label className="form-label">Please Choose Service</label>
              <select name="service" className="form-select" onChange={handleChange}>
                <option>Air-Conditioning, Ventilation & Air Filtration Systems</option>
                <option>Plumbing & Sanitary Installation</option>
                <option>Electrical Wiring & Panel Installations</option>
                <option>False Ceiling</option>
                <option>Electromechanical Equipment Installation and Maintenance</option>
                <option>Wallpaper Fixing Works</option>
                <option>Plaster Works</option>
                <option>Painting Contracting</option>
                <option>A/C Installation & Maintenance</option>
                <option>A/C Cleaning</option>
                <option>Handyman & Maintenance</option>
                <option>Home Cleaning</option>
                <option>Furniture Cleaning</option>
                <option>Home Deep Cleaning</option>
                <option>Deep Clean Kitchen & Bathroom-</option>
                <option>Water Tank Cleaning</option>
                <option>Window Cleaning</option>
                <option>Car Wash</option>
                <option>Men's Salon</option>
                <option>Women’s Salon</option>
                <option>Makeup</option>
                <option>Cargo Services </option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label">Additional Comments</label>
              <textarea name="comments" className="form-control" rows="4" onChange={handleChange}></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServiceDetail;

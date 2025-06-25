import React, { useState } from 'react';
import './ServiceDetail.css';
import image2 from '../assets/Images/pa1.png';
import image3 from '../assets/Images/pa3.png'; // Portfolio 1
import image4 from '../assets/Images/pa3.png'; // Portfolio 2
import image5 from '../assets/Images/pa4.png'; // Portfolio 3
import image6 from '../assets/Images/pa2.png'; // Portfolio 4


const benefits = [
  {
    icon: 'fa-solid fa-pencil-ruler',
    title: 'Custom Plaster Designs',
    desc: 'Tailored to your vision, our plaster work reflects your unique style and spatial requirements.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Aesthetic Enhancement',
    desc: 'Transform your spaces with elegant plaster finishes that add sophistication and texture.',
  },
  {
    icon: 'fa-solid fa-medal',
    title: 'Quality Craftsmanship',
    desc: 'High-quality materials and expert application guarantee durable, beautiful results that stand the test of time.',
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Versatile Applications',
    desc: 'Ideal for walls, ceilings, and architectural features, offering flexibility in design and layout.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Increased Property Value',
    desc: 'Enhances property appeal with modern plaster finishes that attract potential buyers or tenants.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Attention to Detail',
    desc: 'Precision and accuracy ensure that every plaster application is executed flawlessly.',
  },
];

const processSteps = [
  {
    title: 'Initial Consultation',
    desc: 'Discuss your vision and project requirements to ensure alignment with your goals.',
  },
  {
    title: 'Design Selection',
    desc: 'Our designers develop unique concepts tailored to your specifications and preferences.',
  },
  {
    title: 'Material Selection',
    desc: 'Choose from a range of high-quality plaster materials, balancing aesthetics and functionality for optimal results.',
  },
  {
    title: 'Production Process',
    desc: 'Skilled craftsmen execute plaster applications with precision, ensuring a perfect finish.',
  },
  {
    title: 'Quality Assurance',
    desc: 'Each plaster application is thoroughly inspected to meet our high standards before project completion.',
  },
  {
    title: 'Final Presentation',
    desc: 'We prepare and present your finished plaster work, ensuring it’s ready for use and enhances your space.',
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
            <h1 className="fw-bold display-4 mb-4">Elevate Your Space.</h1>
            <p className="mb-4">
             Transform your interiors with our expert plaster work services.
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
          <h2 className="fw-bold">PLASTER WORKS</h2>
          <p className="text-danger fw-semibold">CRAFTING STYLE AND FUNCTIONALITY</p>
          <p className="text-muted">
         At Jusoor Alnokhba, we specialize in plaster work that enhances both the aesthetics and functionality of any space. Our skilled team ensures seamless plastering that provides a smooth finish, improves durability, and elevates the overall ambiance in both residential and commercial environments.
          </p>
        </div>

        <h4 className="fw-bold mb-4">Benefits of Our Plaster Works Services</h4>

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
              <p className="text-warning fw-semibold">CRAFTING PERFECTION AT EVERY STEP</p>
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

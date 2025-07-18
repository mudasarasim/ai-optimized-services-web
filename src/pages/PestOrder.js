import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import image2 from '../assets/Images/ca1.png';
import image3 from '../assets/Images/ca1.png'; // Portfolio 1
import image4 from '../assets/Images/ca5.png'; // Portfolio 2
import image5 from '../assets/Images/ca4.png'; // Portfolio 3
import image6 from '../assets/Images/ca3.png'; // Portfolio 4
import image7 from '../assets/Images/ac3.jpg';
import BASE_URL from "../config"; // import base url

const benefits = [
  {
    icon: 'fa-solid fa-pencil-ruler',
    title: 'Enhanced Aesthetic Appeal',
    desc: 'AC adds texture, color, and pattern to your walls, creating a unique ambiance and elevating the overall decor.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Durability & Quality',
    desc: 'High-quality materials and expert installation ensure your AC stays intact for years, resisting wear and tear.',
  },
  {
    icon: 'fa-solid fa-medal',
    title: 'Cost-Effective Makeover',
    desc: 'AC is a quick and effective way to refresh any room, giving your space a modern look without major renovations.',
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Versatile Designs',
    desc: 'Choose from a wide array of designs, textures, and colors to match any interior style—whether it s minimalist, bold, or classic.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Eco-Friendly Options',
    desc: 'We offer sustainable Ac choices made from environmentally friendly materials, combining beauty with eco-consciousness.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Easy Maintenance',
    desc: 'Most AC are easy to clean and maintain, ensuring your walls look fresh and vibrant with minimal effort.',
  },
];

const processSteps = [
  {
    title: 'Improved Energy Efficiency',
    desc: 'One of the primary benefits of HVAC maintenance is that it can significantly improve the energy efficiency of your system.',
  },
  {
    title: ' Longer Lifespan',
    desc: 'Another significant benefit of HVAC maintenance is that it can extend the lifespan of your system.',
  },
  {
    title: 'Better Indoor Air Quality',
    desc: 'The air filters in your HVAC system are designed to remove pollutants and allergens from the air, improving the air quality of your indoor environment.',
  },
  {
    title: 'More Consistent Temperatures',
    desc: 'A well-maintained HVAC system can help maintain consistent temperatures throughout your home or building.',
  },
  {
    title: 'Reduced Risk of Breakdowns',
    desc: 'One of the most significant benefits of HVAC maintenance is that it can help reduce the risk of unexpected breakdowns.',
  },
  {
    title: 'mproved Safety',
    desc: 'A poorly maintained HVAC system can pose a safety hazard to your home or building.',
  }
];

const ServiceDetail = () => {
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: 'AC Repairs and Installation',
  comments: ''
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value);
  });

  try {
    const response = await fetch(`${BASE_URL}/sendmail.php`, {
      method: "POST",
      body: data
    });

    const result = await response.text();
    alert(result);
  } catch (error) {
    alert("Error sending form");
    console.error(error);
  }
};

  return (
    <>
      {/* Page Banner */}
      <section
        className="page-title-section bg-img cover-background top-position theme-overlay-dark"
        data-overlay-dark="6"
        style={{ backgroundImage: 'url("../img/content/bg-05.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>AC Repairs and Installation</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Services/AC Repairs and Installation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
      {/* Section 1: Intro */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold display-4 mb-4">AC Repairs and Installation</h1>
            <p className="mb-4">
             Whether it’s a weird sound or a total breakdown, our certified techs diagnose and fix AC issues fast—or install a new unit if needed.
            </p>
           <button
      className="btn btn-dark"
      onClick={() => navigate('/contact')}
    >
      Contact Today <i className="bi bi-arrow-up-right"></i>
    </button>
          </div>
          <div className="col-lg-6">
            <img src={image7} style={{width:"100%"}} alt="Plumbing Installation" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Section 2: Benefits */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase text-warning fw-bold mb-2">ELEVATE YOUR SPACE</p>
          <h2 className="fw-bold">AC Repairs and Installation</h2>
          <p className="text-danger fw-semibold">Centralized and Duct AC</p>
        </div>

        <h4 className="fw-bold mb-4">Benefits of Our AC Repairs and Installation</h4>
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
              <img src={image7} style={{width:'100%'}} alt="Installation Process" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <p className="text-uppercase text-warning fw-bold">WHAT IT INVOLVES</p>
              <h2 className="fw-bold text-white">PRECISION IN CRAFTSMANSHIP</h2>
              <p className="text-warning fw-semibold">CRAFTING PERFECTION AT EVERY STROKE</p>
              <div className="row">
                {processSteps.map((step, index) => (
                  <div className="col-sm-6 mb-4" key={index}>
                    <h6 className="fw-bold text-white">{step.title}</h6>
                    <p className="small text-white mb-0">{step.desc}</p>
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
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" name="firstName" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" name="lastName" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-12">
              <input type="hidden" name="service" value="Plumbing And Sanitary Installation" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-12">
              <label htmlFor="comments" className="form-label">Additional Comments</label>
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

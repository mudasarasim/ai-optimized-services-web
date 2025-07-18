import React, { useState } from 'react';
import './ServiceDetail.css';
import image2 from '../assets/Images/t1.png';
import image3 from '../assets/Images/t2.png'; // Portfolio 1
import image4 from '../assets/Images/t3.png'; // Portfolio 2
import BASE_URL from "../config"; // import base url



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
    title: 'maintenance and longevity',
    desc: 'mproves the maintenance and longevity of your water system, reducing the need for costly repairs and replacements.',
  },
  {
    title: 'efficiency',
    desc: 'Improves the efficiency of your water system, reducing energy costs and extending the life of your plumbing and water appliances.',
  },
  {
    title: 'contaminants and impurities',
    desc: 'Reduces the risk of corrosion and ensures safety by removing algae, other contaminants and impurities from the water.',
  },
  {
    title: 'Professional Installation',
    desc: 'Keeps your pipes free from clogging due to buildup or rust accumulation caused by hard metals such as iron particles in well water.',
  },
  {
    title: 'Professional Application',
    desc: 'Is beneficial for the environment.',
  },
  {
    title: 'Final Inspection and Clean-Up',
    desc: 'They can act as a breeding ground for all kinds of bacteria, making your water tank’s environment susceptible to being contaminated.',
  }
];

const ServiceDetail = () => {
  const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: 'Water Tank Cleaning',
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
              <h1>Water Tank Cleaning</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Services/Water Tank Cleaning</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Intro */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold display-4 mb-4">Water Tank Cleaning</h1>
            <p className="mb-4">
             Drain the Tank: Completely drain the water from the tank to a safe location
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
          <h2 className="fw-bold">Underground Tank Cleaning</h2>
          <p className="text-danger fw-semibold">Professional inspection and assessment of your underground tank.
Complete tank flushing and cleaning using Dubai Municipality-approved chemicals.
Final rinse and refill with fresh water for safe consumption.</p>
        </div>

        <h4 className="fw-bold mb-4">Benefits of Our Water Tank Cleaning</h4>

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
            <img src={image2} alt="Portfolio 1" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-4">
            <img src={image3} alt="Portfolio 2" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-4">
            <img src={image4} alt="Portfolio 3" className="img-fluid rounded shadow-sm" />
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

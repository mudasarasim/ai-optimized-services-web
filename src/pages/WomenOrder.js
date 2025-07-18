import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import image2 from '../assets/Images/ea1.png';
import image3 from '../assets/Images/ea1.png'; // Portfolio 1
import image4 from '../assets/Images/ea4.png'; // Portfolio 2
import image5 from '../assets/Images/ea2.png'; // Portfolio 3
import image6 from '../assets/Images/ea3.png'; // Portfolio 4
import BASE_URL from "../config"; // import base url


const benefits = [
  {
    icon: 'fa-solid fa-pencil-ruler',
    title: 'relaxing experience',
    desc: 'Going to a beauty salon is a relaxing experience that improves one’s overall appearance. A visit to a salon can also provide time with loved ones and friends.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Professional beauticians',
    desc: 'Professional beauticians also provide various services, including color, styling, Keratin therapy, and manicures and pedicures. ',
  },
  {
    icon: 'fa-solid fa-medal',
    title: 'Haircuts',
    desc: 'In general, beauty salons offer various hair care services. These services include shampooing, trimming, coloring, and highlighting.',
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'raditional gender',
    desc: 'raditional gender roles in beauty salons have many aspects. Many women invest in the appearance of their bodies concerning various external social institutions.',
  },
  {
    icon: 'fa-solid fa-city',
    title: 'Eco-Friendly Options',
    desc: 'We offer sustainable wallpaper choices made from environmentally friendly materials, combining beauty with eco-consciousness.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'skin care and tanning',
    desc: 'eauty salons offer many services, but the most popular ones are haircuts. Barber shops also provide skin care and tanning.',
  },
];

const processSteps = [
  {
    title: 'Initial Consultation',
    desc: 'We begin with a consultation to understand your vision, preferences, and specific requirements for the wallpaper installation.',
  },
  {
    title: 'Design Selection',
    desc: 'Choose from a wide range of wallpaper designs, textures, and colors that suit your style and complement your space.',
  },
  {
    title: 'Wall Preparation',
    desc: 'Our team prepares the wall surfaces by cleaning, repairing, and priming them to ensure optimal adhesion and a flawless finish.',
  },
  {
    title: 'Professional Installation',
    desc: 'Our skilled installers apply the wallpaper with precision, ensuring alignment and a smooth application without bubbles or wrinkles.',
  },
  {
    title: 'Final Inspection',
    desc: 'After installation, we conduct a thorough inspection to ensure everything meets our high standards and your expectations.',
  },
  {
    title: 'Post-Installation Support',
    desc: 'We provide guidance on care and maintenance, helping you keep your wallpaper looking fresh and vibrant for years to come.',
  }
];

const ServiceDetail = () => {
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: 'Women’s Salon',
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
              <h1>Women’s Salon</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Services/Women’s Salon</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Intro */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold display-4 mb-4">Women’s Salon</h1>
            <p className="mb-4">
             Visit us at Beauty Salon and immerse your self inside the world of refined beauty offerings.
            </p>
            <button
      className="btn btn-dark"
      onClick={() => navigate('/contact')}
    >
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
          <h2 className="fw-bold">Women’s Salon Beautiful</h2>
          <p className="text-danger fw-semibold">STYLE, Look , Modern</p>
          <p className="text-muted">
          Visit us at Beauty Salon and immerse your self inside the world of refined beauty offerings.
          </p>
        </div>

        <h4 className="fw-bold mb-4">Benefits of Our Wallpaper Fixing Works</h4>

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
              <h2 className="fw-bold text-white">EFFORTLESS WALL MAKEOVER</h2>
              <p className="text-warning fw-semibold">SEAMLESS TRANSFORMATION PROCESS</p>
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

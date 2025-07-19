import React, { useState } from 'react';
import './ServiceDetail.css';
import { useNavigate } from 'react-router-dom';
import image6 from '../assets/Images/Cargo Services.jpg';
import image2 from '../assets/Images/Cargo Services.jpg';
import image3 from '../assets/Images/0r1.png'; // Portfolio 1
import image4 from '../assets/Images/or2.png'; // Portfolio 2
import image5 from '../assets/Images/or3.png'; // Portfolio 3
import BASE_URL from "../config"; // import base url
import Swal from 'sweetalert2';

const benefits = [
  {
    icon: 'fa-solid fa-faucet-drip',
    title: 'Reliability',
    desc: 'Late deliveries break trust. Whether you’re shipping to retailers, suppliers, or customers, reliability is everything. With professional freight transportation services, you get structured schedules, real-time tracking, and dependable transit times.',
  },
  {
    icon: 'fa-solid fa-wrench',
    title: 'Your shipment ',
    desc: 'ver dealt with a logistics provider that gives you vague updates like “Your shipment is in transit” but won’t tell you where it actually is? ',
  },
  {
    icon: 'fa-solid fa-hand-holding-medical',
    title: 'Cost-Effective Shipping',
    desc: 'Imagine you’re shipping goods across the country. Would you rather manage the logistics yourself and deal with surprise costs or let professionals handle it while you focus on scaling your business?',
  },
  {
    icon: 'fa-solid fa-drafting-compass',
    title: 'Customized Designs',
    desc: 'We tailor our plumbing solutions to meet the specific needs of your space, ensuring optimal performance and satisfaction.',
  },
  {
    icon: 'fa-solid fa-stopwatch',
    title: 'Last-Mile Delivery Services',
    desc: 'Ever ordered something and felt like it took forever just because the delivery guy couldn’t find your address?',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Scale Up',
    desc: 'Say you start with 10 shipments a day, but suddenly demand spikes, and now you need to move 100 shipments daily. What do you do?',
  }
];

const processSteps = [
  {
    title: 'Consultation and Assessment',
    desc: 'We evaluate your space to identify specific plumbing and sanitary needs, ensuring all requirements are met.',
  },
  {
    title: 'Pipe and Fixture Installation',
    desc: 'Professional installation of pipes, fixtures, and fittings to ensure a reliable and efficient plumbing system.',
  },
  {
    title: 'System Design and Planning',
    desc: 'Creating a customized plumbing plan tailored to your space’s layout and requirements, optimizing functionality and efficiency.',
  },
  {
    title: 'Regular Maintenance and Support',
    desc: 'Providing ongoing maintenance services to keep plumbing systems running efficiently and address any issues that arise.',
  },
  {
    title: 'Testing and Calibration',
    desc: 'Thoroughly testing installed systems to ensure optimal performance and making necessary adjustments as needed.',
  },
  {
    title: 'Drainage and Waste Setup',
    desc: 'Setting up drainage systems to ensure safe waste disposal and prevent blockages.',
  }
];

const ServiceDetail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Cargo Services',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Show loading modal
    Swal.fire({
      title: 'Sending...',
      text: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

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

      if (response.ok) {
        // ✅ Replace loading with success modal
        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: '✅ Thank you for reaching out. We’ll get back to you shortly.',
          confirmButtonColor: '#FCD915',
          confirmButtonText: 'OK',
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: 'Cargo Services',
          comments: ''
        });
      } else {
        // ❌ Replace loading with error modal
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: '❌ Failed to send your message. Please try again later.',
          confirmButtonColor: '#d33'
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: '❌ Something went wrong. Please try again later.',
      });
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
              <h1>Cargo Services</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Services/Cargo Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Intro */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold display-4 mb-4">Cargo Services</h1>
            <p className="mb-4">
              Ever dealt with a logistics provider that gives you vague updates like “Your shipment is in transit” but won’t tell you where it actually is?
            </p>
            <button
              className="btn btn-dark"
              onClick={() => navigate('/contact')}
            >
              Contact Today <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
          <div className="col-lg-6">
            <img src={image6} alt="Plumbing Installation" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Section 2: Benefits */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase text-warning fw-bold mb-2">ELEVATE YOUR SPACE</p>
          <h2 className="fw-bold">PLUMBING & SANITARY INSTALLATION SERVICES</h2>
          <p className="text-danger fw-semibold">Cargo Services</p>
          <p className="text-muted">
            ogistics costs can eat into your profits fast if not managed properly. Hiring your own trucks, maintaining a fleet, and managing fuel prices is a logistical nightmare on its own.</p>
        </div>

        <h4 className="fw-bold mb-4">Benefits of Cargo Services</h4>

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
              <img src={image2} alt="Installation Process" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <p className="text-uppercase text-warning fw-bold">WHAT IT INVOLVES</p>
              <h2 className="fw-bold text-white">INSTALLATION AND MAINTENANCE STEPS</h2>
              <p className="text-warning fw-semibold">SERVICE PROCESS OVERVIEW</p>
              <div className="row">
                {processSteps.map((step, index) => (
                  <div className="col-sm-6 mb-4" key={index}>
                    <h6 className="fw-bold text-white">{step.title}</h6>
                    <p className="small text-white  mb-0">{step.desc}</p>
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
            <img src={image3} alt="Portfolio 1" className="img-fluid rounded shadow-sm" />
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
            <div className="col-12 d-flex align-items-center justify-content-center">
              <button type="submit" className="btn w-50" style={{ background: '#FCD915', color: 'white' }}>
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default ServiceDetail;

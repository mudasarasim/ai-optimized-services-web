import './Services.css';
import image1 from '../assets/Images/image1.png';
import image2 from '../assets/Images/Plumbing & Sanitary Installation.jpg';
import image3 from '../assets/Images/el1.png';
import image4 from '../assets/Images/Electromechanical Equipment Installation.jpg';
import image5 from '../assets/Images/Wallpaper Fixing Works.jpg';
import image6 from '../assets/Images/pa4.png';
import image7 from '../assets/Images/Painting Contracting.jpg';
import image8 from '../assets/Images/ac3.jpg';
import image9 from '../assets/Images/image9.png';
import image10 from '../assets/Images/image10.png';
import image11 from '../assets/Images/h1.png';
import image12 from '../assets/Images/Furniture Cleaning.jpg';
import image13 from '../assets/Images/Home Deep Cleaning.jpg';
import image14 from '../assets/Images/Deep Clean Kitchen & Bathroom.jpg';
import image15 from '../assets/Images/Cargo Services.jpg';
import image16 from '../assets/Images/Women Salon.jpg';
import image17 from '../assets/Images/Water Tank Cleaning.jpg';
import image18 from '../assets/Images/Home Cleaning.jpg';
import image19 from '../assets/Images/Mens Salon.jpg';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBroom,
  faCouch,
  faScrewdriverWrench,
  faPersonDress,
  faHandSparkles,
  faFlaskVial,
  faSpaghettiMonsterFlying,
  faCarSide
} from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const ServicesHeader = () => {
   const [message, setMessage] = useState('');
    
      const handleWhatsAppSend = () => {
        const phoneNumber = "971522033745"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      };
  const navigate = useNavigate();

  const routeMap = {
    'Home Cleaning': '/place-order/:serviceId',
    'Plumbing & Sanitary Installation': '/PlumbingOrder/:serviceId',
    'False Ceiling': '/AcOrder/:serviceId',
    'Electromechanical Equipment Installation and Maintenance': '/AcRepaireOrder/:serviceId',
    "Wallpaper Fixing Works": '/SalonOrder/:serviceId',
    "Plaster Works": '/SpaOrder/:serviceId',
    'Painting Contracting': '/LabOrder/:serviceId',
    'A/C Installation & Maintenance': '/PestOrder/:serviceId',
    'Mobile Car Wash': '/CarOrder/:serviceId',
    'Handyman & Maintenance': '/HandymanOrder/:serviceId',
    'Furniture CLeaning': '/FurnitureCLeaning/:serviceId',
    'Deep Clean Kitchen & Bathroom': '/DeepKitchen/:serviceId',
    'Water Tank Cleaning': '/WaterCleaning/:serviceId',
    'Women’s Salon': '/WomenOrder/:serviceId',
    'Carpet & Sofa Cleaning': '/FurnitureOrder/:serviceId',
    'Home Deep CLeaning': '/DeepOrder/:serviceId',
    'Cargo Services': '/CargoOrder/:serviceId',
    'Mens Salon': '/MenOrder/:serviceId'
  };

  const handleBookService = (serviceTitle) => {
    const route = routeMap[serviceTitle];
    if (route) {
      navigate(route);
    } else {
      alert("No route defined for this service.");
    }
  };

  const services = [
   
    {
      icon: faCouch,
      title: 'Plumbing & Sanitary Installation',
      image: image2,
      desc: 'Our Plumbing & Sanitary Installation service ensures your Plumbing & Sanitary Installation stays spotless and well-maintained.',
    },
    {
      icon: faBroom,
      title: 'False Ceiling',
      image: image3,
      desc: 'Transform your interiors with our expert false ceiling and light partition installation services.',
    },
    {
      icon: faScrewdriverWrench,
      title: 'Electromechanical Equipment Installation and Maintenance',
      image: image4,
      desc: 'We offer expert installation and maintenance of mechanical and electrical systems, ensuring optimal performance and minimal downtime across all project types.',
    },
    {
      icon: faPersonDress,
      title: 'Wallpaper Fixing Works',
      image: image5,
      desc: 'At Jusoor Alnokhba, we specialize in Wallpaper Fixing Works, transforming walls into stylish statements with flawless installations for homes and offices.',
    },
    {
      icon: faHandSparkles,
      title: 'Plaster Works',
      image: image6,
      desc: 'ransform your interiors with our expert plaster work services.',
    },
    {
      icon: faFlaskVial,
      title: 'Painting Contracting',
      image: image7,
      desc: 'At Jusoor Alnokhba, we provide expert painting services tailored to your aesthetic and functional needs.',
    },
    {
      icon: faSpaghettiMonsterFlying,
      title: 'A/C Installation & Maintenance',
      image: image8,
      desc: 'Safe, eco-friendly pest elimination services for home and office.',
    },
    {
      icon: faCarSide,
      title: 'Mobile Car Wash',
      image: image9,
      desc: 'Premium car washing and detailing at your doorstep.',
    },
    {
      icon: faSpaghettiMonsterFlying,
      title: 'Handyman & Maintenance',
      image: image11,
      desc: 'Book skilled handymen by the hour for drilling, mounting, repairs & general home fixes.',
    },
    {
      icon: faSpaghettiMonsterFlying,
      title: 'Furniture CLeaning',
      image: image12,
      desc: ' Use state-of-the-art steam cleaning processes to effectively remove dirt and refresh your furniture. This method is safe and prolongs the life of your upholstery.',
    },
   
    {
      icon: faCouch,
      title: 'Carpet & Sofa Cleaning',
      image: image10,
      desc: 'Expert deep cleaning and stain removal for carpets and sofas.',
    },

    {
      icon: faCouch,
      title: 'Home Deep CLeaning',
      image: image13,
      desc: 'Expert deep cleaning and Appartment for carpets and sofas.',
    },

    {
      icon: faCouch,
      title: 'Deep Clean Kitchen & Bathroom',
      image: image14,
      desc: 'Expert deep cleaning  Kitchen & Bathroom.',
    },
   {
      icon: faCouch,
      title: 'Water Tank Cleaning',
      image: image17,
      desc: 'Expert deep Water Tank Cleaning.',
    },
    {
      icon: faCouch,
      title: 'Women’s Salon',
      image: image16,
      desc: 'Pedicure are essential part of a women’s hygiene and therefore to complete your perfect look.',
    },
     {
      icon: faCouch,
      title: 'Cargo Services',
      image: image15,
      desc: 'Cargo Services and therefore to complete your perfect look.',
    },
    {
      icon: faCouch,
      title: 'Mens Salon',
      image: image19,
      desc: 'Pedicure are essential part of a Mens therefore to complete your perfect look.',
    },
    
    
  
     {
      icon: faBroom,
      title: 'Home Cleaning',
      image: image18,
      desc: 'Our home cleaning service ensures a spotless and germ-free environment by providing thorough cleaning, dusting, mopping, and disinfecting.',
    }
  ];

  return (
    <>
      <section
        className="page-title-section bg-img cover-background top-position theme-overlay-dark"
        data-overlay-dark="6"
        style={{ backgroundImage: 'url("img/content/bg-05.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Services</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Our Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-light bg-img cover-background mt-1"
        data-overlay-dark="0"
        style={{ backgroundImage: 'url("img/bg/bg-06.png")' }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="text-primary h6">Our Services</h5>
            <h2 className="display-20 display-md-18 display-lg-16">
              We offer many types of services
            </h2>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-sm-6 col-lg-4 mb-1-9 mb-lg-4"
                onClick={() => handleBookService(service.title)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card card-style1 h-100">
                  <div className="card-img">
                    <img
                      className="rounded-top service-image w-100"
                      src={service.image}
                      alt={service.title}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="h5">
                      <FontAwesomeIcon icon={service.icon} className="me-2 text-primary" />
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        {service.title}
                      </a>
                    </h3>
                    <p className="display-30">{service.desc.slice(0, 130)}...</p>
                    <span className="read-more text-primary">Book Now</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
       <div className="whatsapp-button" onClick={handleWhatsAppSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
        </div>
    </>
  );
};

export default ServicesHeader;

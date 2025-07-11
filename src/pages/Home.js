import React, { useState } from 'react';
import MapModal from '../components/MapModal';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBroom, faFemale, faSpa, faSnowflake, faBug, faPumpSoap, faCouch,
  faUser, faTools, faCar, faSocks, faLightbulb, faPalette, faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const servicesData = [
  { label: 'Home Cleaning', icon: faBroom },
  { label: 'Furniture Cleaning', icon: faCouch },
  { label: 'Carpet & Sofa Cleaning', icon: faSocks },
  { label: 'Maid Services', icon: faUser },
  { label: 'Mobile Car Wash', icon: faCar },
  { label: 'A/C Cleaning', icon: faSnowflake },
  { label: 'A/C Repairing', icon: faTools },
  { label: 'Handyman', icon: faScrewdriverWrench },
  { label: 'Paint', icon: faPalette },
  { label: 'MEP', icon: faLightbulb },
  { label: 'Women’s Salon', icon: faFemale },
  { label: 'Women’s Spa', icon: faSpa },
  { label: 'Pest Control', icon: faBug },
  { label: 'Disinfection', icon: faPumpSoap },
];
const uaeLocations = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain"
];

const Home = () => {
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSetLocation = () => {
    setShowMap(true);
  };

  const handleSelectSuggestion = (city) => {
    setLocation(city);
    setSuggestions([]);
    navigate('/services'); // Or perform any other action
  };

  const handleLocationSelect = (placeName) => {
    setLocation(placeName);
    setShowMap(false);
    navigate('/services');
  };

  return (
    <>
      <section
        className="bg-img full-screen cover-background top-position1 min-vh-100 p-0 left-overlay"
        data-overlay-dark="8"
        data-background="img/banner/banner-04.jpg"
        style={{ backgroundImage: 'url("img/bg1.jpeg")', minHeight: '896px' }}
      >
        <div className="container d-flex flex-column py-10 py-sm-8 py-md-0">
          <div className="row align-items-center min-vh-100">
            <div className="col-12">
              <div className="row align-items-center mt-10">
                <div className="col-lg-12 mb-5 mb-lg-0 text-center">
                  <h6 className="text-primary">Get amazing experience</h6>
                  <h2 className="text-white font-weight-700 text-shadow" style={{ fontSize: '35px' }}>
                    Expert Tech, Reliable Maintenance, Styling Salon, Secure Cargo focus on solving problem.
                  </h2>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-4">
                  <div className="location-box">
                    <div className="input-wrapper">
                      <label>Where would you like to receive your service?</label>
                      <i className="fa fa-map-marker icon-inside"></i>
                      <input
                        type="text"
                         style={{paddingLeft: '30px'}}
                        placeholder="Start typing your city (UAE only)"
                        value={location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          setSuggestions(
                            uaeLocations.filter((city) =>
                              city.toLowerCase().startsWith(e.target.value.toLowerCase())
                            )
                          );
                        }}
                        className="form-control"
                      />
                      {location && suggestions.length > 0 && (
                        <ul className="suggestion-list">
                          {suggestions.map((city, index) => (
                            <li key={index} onClick={() => handleSelectSuggestion(city)}>
                              {city}
                            </li>
                          ))}
                        </ul>
                      )}
                      {location && suggestions.length === 0 && (
                        <p style={{ color: 'red', fontSize: '14px' }}>Not Found</p>
                      )}

                    </div>
                    <button onClick={handleSetLocation} style={{borderRadius: '0px 8px 8px 0px'}}>Set my location</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {showMap && (
        <MapModal
          onClose={() => setShowMap(false)}
          onLocationSelect={handleLocationSelect}
        />
      )}


      <section class="bg-light bg-img cover-background mt-1" data-overlay-dark="0" data-background="img/bg/bg-06.png">
        <div class="container">
          <div class="text-center mb-2-8 mb-lg-6">
            <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Services We <strong class="text-primary font-weight-700">Provide</strong></h2>
            <span>Only service has the answer</span>
          </div>

          <div class="row">

            <div class="col-md-6 col-lg-4 mb-1-9">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0" style={{
                    backgroundImage: 'url("img/pl.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    transition: '0.3s'
                  }}></div>
                  <div class="card-body">
                    <i class="fas fa-wrench mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Plumbing & Sanitary Installation</a></h3>
                    <p>We are already high standards to have you see us as the best in the industry.</p>
                    <Link to={'/services'} class="read-more">read more</Link>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4 mb-1-9">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/wa.jpeg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}
                  ></div>
                  <div class="card-body">
                    <i class="fas fa-border-style mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">False Celing</a></h3>
                    <p>Transform your interiors with our expert false ceiling and light partition installation services.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>
            
            <div class="col-md-6 col-lg-4 mb-1-9">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0" style={{
                    backgroundImage: 'url("img/services/service-03.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    transition: '0.3s'
                  }}></div>
                  <div class="card-body">
                    <i class="fas fa-fan mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Electromechanical Equipment Installation and Maintenance</a></h3>
                    <p>We offer expert installation and maintenance of mechanical and electrical systems, ensuring optimal performance and minimal downtime across all project types.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/services/service-01.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}></div>
                  <div class="card-body">
                    <i class="fas fa-home mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Wallpaper Fixing Works</a></h3>
                    <p>We offer a wide selection of high-quality wallpapers, ensuring you find the perfect design to enhance your space</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4 mb-1-9 mb-md-0">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/car.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}
                  ></div>
                  <div class="card-body">
                    <i class="fas fa-hand-sparkles mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Plaster Work</a></h3>
                    <p>Our skilled team ensures seamless plastering that provides a smooth finish, improves durability.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/sal.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}
                  ></div>
                  <div class="card-body">
                    <i class="fas fa-flask-vial mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Painting Contracting </a></h3>
                    <p>Transforming spaces with color and craftmanship.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>


            <div class="col-md-6 col-lg-4 mt-4">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/Women’s Salon.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}
                  ></div>
                  <div class="card-body">
                    <i class="fas fa-spaghetti-monster-flying mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">AC Repairs and Installation</a></h3>
                    <p>Whether it’s a weird sound or a total breakdown, our certified techs diagnose and fix AC issues fast—or install a new unit if needed.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>


            <div class="col-md-6 col-lg-4 mt-4">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/cr.jpeg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}
                  ></div>
                  <div class="card-body">
                    <i class="fa-solid fa-car-side mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Mobile Car Wash</a></h3>
                    <p>Premium car washing and detailing at your doorstep.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-6 col-lg-4 mt-4">
              <Link to={'/services'}>
                <div class="card card-style3">
                  <div class="background-image bg-img" data-overlay-dark="0"
                    style={{
                      backgroundImage: 'url("img/Cargo Services.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                      transition: '0.3s'
                    }}
                  ></div>

                  <div class="card-body">
                    <i class="fa-solid fa-truck mb-4 display-14"></i>
                    <h3 class="h5 mb-4"><a href="#!">Cargo Services</a></h3>
                    <p>Ever dealt with a logistics provider that gives you vague updates like “Your shipment is in transit”.</p>
                    <a href="#!" class="read-more">read more</a>
                  </div>
                </div>
              </Link>
            </div>

          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '45px', marginBottom: '-40px' }}>
            <Link to={'/services'} className='butn'>See More</Link>
          </div>
        </div>
      </section>

      <section>
        <div class="container" style={{ marginTop: '-40px' }}>
          <div class="text-center mb-2-8">
            <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong class="text-primary font-weight-700">Us</strong></h2>
            <span>The trusted source for complete maintenance & lifestyle services in the UAE.</span>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
              <div class="pr-md-3">
                <div class="text-center text-sm-right mb-2-9">
                  <div class="mb-4">
                    <img src="img/pl.jpg" style={{ height: '70px', width: '80px' }} alt="..." class="rounded-circle" />
                  </div>
                  <h4 class="h5">Plumbing & Sanitary Installation</h4>
                  <p class="display-30 mb-0">Expert plumbing solutions to keep your home running smoothly — reliable, fast, and affordable.</p>
                </div>
                <div class="text-center text-sm-right">
                  <div class="mb-4">
                    <img src="img/ac3.jpg" alt="..." class="rounded-circle" style={{width: '80px', height:'80px'}}/>
                  </div>
                  <h4 class="h5">A/C Installation & Cleaning</h4>
                  <p class="display-30 mb-0">Cool, clean air starts here! Installation, servicing, and deep cleaning — all in one place.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
              <div class="why-choose-center-image">
                <img src="img/content/why-choose-01.jpg" alt="..." class="rounded-circle" />
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="pl-md-3">
                <div class="text-center text-sm-left mb-2-9">
                  <div class="mb-4">
                    <img src="img/content/service-03.jpg" alt="..." class="rounded-circle" />
                  </div>
                  <h4 class="h5">Home & Deep Cleaning</h4>
                  <p class="display-30 mb-0">We clean every corner of your home — kitchens, bathrooms, floors, and more. Feel the freshness!</p>
                </div>

                <div class="text-center text-sm-left">
                  <div class="mb-4">
                    <img src="img/wa.jpeg" style={{ height: '70px', width: '70px' }} alt="..." class="rounded-circle" />
                  </div>
                  <h4 class="h5">Painting & Wallpaper Fixing</h4>
                  <p class="display-30 mb-0">Give your walls a fresh, flawless look with professional painting and wallpaper services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="parallax cover-background theme-overlay-dark" data-overlay-dark="8" data-background="img/bg/bg-02.jpg" style={{ backgroundImage: 'url("img/bg/bg-02.jpg")' }}>
        <div class="container">
          <div class="row justify-content-center mb-6">
            <div class="col-lg-8 center-col text-center">
              <div class="mb-2-9 mb-xl-6">
                <a class="popup-social-video video_btn" href="https://vimeo.com/154922958">
                  <span class="video_btn">
                    <i class="fas fa-play"></i>
                  </span>
                </a>
              </div>
              <h2 class="display-18 display-md-16 display-lg-14 text-white font-weight-700">We get it right first time.</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="counter-box">
        <div class="container">
          <div class="bg-white shadow py-2-5 px-2-5 rounded mb-1-6">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="row justify-content-center text-center">
                  <div class="col-sm-6 col-lg-3 text-center mb-1-9 mb-lg-0">
                    <h5 class="countup display-18">100+</h5>
                    <p class="mb-0 text-secondary font-weight-500">Workers</p>
                  </div>
                  <div class="col-sm-6 col-lg-3 text-center mb-1-9 mb-lg-0">
                    <h5 class="countup display-18">100+</h5>
                    <p class="mb-0 text-secondary font-weight-500">Equipment</p>
                  </div>
                  <div class="col-sm-6 col-lg-3 text-center mb-1-6 mb-sm-0">
                    <h5 class="countup display-18">124</h5>
                    <p class="mb-0 text-secondary font-weight-500">World Wide</p>
                  </div>
                  {/* <div class="col-sm-6 col-lg-3 text-center">
                    <h5 class="countup display-18">42</h5>
                    <p class="mb-0 text-secondary font-weight-500">Won Award</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '-120px' }}>
        <div class="container" >
          <div class="text-center mb-2-8 mb-lg-6" style={{ marginBottom: '0px' }}>
            <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Feedback From <strong class="text-primary font-weight-700">Clients</strong></h2>
            <span>The wise choice for feedback lovers</span>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section class="clients">
        <div class="container">
          <div class="text-center mb-2-8 mb-lg-6">
            <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Our Valued <strong class="text-primary font-weight-700">Clients</strong></h2>
            <span>Committed to exemplary clients</span>
          </div>
          <div class="row">
            <div class="col-6 col-lg-4 mb-1-6">
              <div class="client-img">
                <img src="img/partners/01.png" alt="..." />
              </div>
            </div>
            <div class="col-6 col-lg-4 mb-1-6">
              <div class="client-img">
                <img src="img/partners/02.png" alt="..." />
              </div>
            </div>
            <div class="col-6 col-lg-4 mb-1-6">
              <div class="client-img">
                <img src="img/partners/03.png" alt="..." />
              </div>
            </div>
            <div class="col-6 col-lg-4 mb-1-6 mb-lg-0">
              <div class="client-img">
                <img src="img/partners/04.png" alt="..." />
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div class="client-img">
                <img src="img/partners/05.png" alt="..." />
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div class="client-img">
                <img src="img/partners/06.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container" style={{ marginTop: '-120px' }}>
          <div class="row align-items-center">

            <div class="col-lg-6">
              <div class="pl-lg-1-9">
                <h2 class="display-18 display-md-16 display-lg-14 mb-1-6 font-weight-700">Manage all to-dos with a  <strong class="text-primary font-weight-700">single tap!</strong></h2>
                <p class="mb-2-0 display-29 display-md-28">Schedule and manage appointments effortlessly, explore professional profiles and reviews, access exclusive offers, and enjoy much more—all in one seamless platform made for your convenience!
                </p>
                <a className='butn'>Coming Soon</a>
              </div>
            </div>
            <div class="col-lg-6 mb-2-9 mb-lg-0">
              <div class="about-wrapper">
                <div class="about-img">
                  <img class="rounded" src="img/app.jpg" alt="..." />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;

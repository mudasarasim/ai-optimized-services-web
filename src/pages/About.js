import './About.css';
import jgpg from '../assets/Images/g.jpg';
import image3 from '../assets/Images/image3.png';
import image4 from '../assets/Images/image4.png';
import download from '../assets/Images/download.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';




const About = () => {
     const [message, setMessage] = useState('');
    
      const handleWhatsAppSend = () => {
        const phoneNumber = "971522033745"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
      };
  return (
    <>
     <section class="page-title-section bg-img cover-background top-position theme-overlay-dark" data-overlay-dark="6" data-background="img/content/bg-05.jpg" style={{backgroundImage: 'url("img/content/bg-05.jpg")'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>About Us</h1>
                    </div>
                    <div class="col-md-12">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#!">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container" style={{marginTop: '-40px'}}>
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-2-9 mb-lg-0">
                        <div class="position-relative">
                            <div class="position-relative z-index-1 py-2-9 py-xl-7 px-1-6 px-md-2-9 px-lg-1-6">
                                <img src="img/about.png" class="rounded" alt="..." />
                            </div>
                            <span class="position-absolute w-auto top left z-index-0"><img src="img/content/bg-pattern.png" alt="..." /></span>
                            <div class="counter-style1 rounded">
                                <h4 class="text-primary countup">16</h4>
                                <h5 class="m-0">Years of Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="pl-lg-4">
                            <h2 class="display-20 display-md-18 display-lg-16">ABOUT US</h2>
                            <p class="mb-1-3">We are your all-in-one solution for professional maintenance, installation, cleaning, salon, and cargo services across the UAE. With a diverse range of offerings and a team of skilled, certified technicians and service experts, we bring convenience, quality, and care right to your doorstep.</p>
                            <p className='mb-1-3'>Whether it’s electromechanical installations, plumbing and sanitary work, false ceiling or plaster works, or A/C servicing and maintenance, we provide technically sound solutions with precision and reliability. We also specialize in painting contracting, wallpaper fixing, and handyman services, making us the ideal partner for both new setups and ongoing property maintenance.</p>
                            <p className='mb-1-3'>In addition, we offer premium at-home salon services for men and women — combining luxury and hygiene for a personalized grooming experience. Need to move or ship? Our cargo and moving services ensure your belongings are handled with care, whether locally or internationally. We are commited:</p>
                            <div class="row mb-1-6">
                                <div class="col-sm-12">
                                    <ul class="list-style1 mb-0">
                                        <li>Quality service across all verticals</li>
                                        <li>Prompt and professional execution</li>
                                        
                                    </ul>
                                </div>
                                <div class="col-sm-12">
                                    <ul class="list-style1 mb-0">
                                        <li>Transparent pricing</li>
                                        <li>Customer-first approach</li>
                                       
                                    </ul>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-light">
            <div class="container" style={{marginTop: '-30px'}}>
                <div class="text-center mb-5">
                    <h5 class="text-primary h6">Our Process</h5>
                    <h2 class="display-20 display-md-18 display-lg-16">Impressive simple cycle steps</h2>
                </div>

                <div class="row">
                    <div class="col-lg-4 mb-2-5 mb-lg-0">
                        <div class="process-block">
                            <div class="process-step">
                                <div class="dot-border">01</div>
                            </div>
                            <h4 class="h5 mb-3">Choose Category</h4>
                            <p>Browse our wide range of professional services — from deep cleaning and repairs to beauty and wellness. Pick the one that fits your needs.</p>
                            {/* <a href="#!" class="read-more">read more</a> */}
                        </div>
                    </div>
                    <div class="col-lg-4 mb-2-5 mb-lg-0">
                        <div class="process-block">
                            <div class="process-step">
                                <div class="dot-border">02</div>
                            </div>
                            <h4 class="h5 mb-3">Confirm &amp; Booking</h4>
                            <p>Select your time, share your address, and confirm the details. Our team will take care of the rest and get ready to serve you.</p>
                            {/* <a href="#!" class="read-more">read more</a> */}
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="process-block">
                            <div class="process-step">
                                <div class="dot-border last">03</div>
                            </div>
                            <h4 class="h5 mb-3">Get Clean Property</h4>
                            <p>Sit back and relax while our trained professionals transform your space into a fresh, spotless environment.</p>
                            {/* <a href="#!" class="read-more">read more</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="parallax cover-background theme-overlay-dark" data-overlay-dark="8" data-background="img/bg/bg-02.jpg" style={{backgroundImage: 'url("img/bg/bg-02.jpg")'}}>
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

        {/* <section>
            <div class="container">
                <div class="text-center mb-5">
                    <h5 class="text-primary h6">Our Team</h5>
                    <h2 class="display-20 display-md-18 display-lg-16">Meet our master individuals</h2>
                </div>

                <div class="row">
                    <div class="col-sm-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div class="team-style1 hoverstyle1">
                            <div class="team-img">
                                <img src="img/team/team-01.jpg" alt="" />
                            </div>
                            <div class="team-social-icon">
                                <ul>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h6 class="h5">Lena Christner</h6>
                                <small>Refractory Helper</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-1-9 mb-lg-0">
                        <div class="team-style1 hoverstyle1">
                            <div class="team-img">
                                <img src="img/team/team-02.jpg" alt="" />
                            </div>
                            <div class="team-social-icon">
                                <ul>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h6 class="h5">Manuel Millner</h6>
                                <small>Products Arranger</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="team-style1 hoverstyle1">
                            <div class="team-img">
                                <img src="img/team/team-03.jpg" alt="" />
                            </div>
                            <div class="team-social-icon">
                                <ul>
                                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <div class="team-info">
                                <h6 class="h5">Mary Goldstein</h6>
                                <small>Home Specialist</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        
         <div className="whatsapp-button" onClick={handleWhatsAppSend}>
              <FontAwesomeIcon icon={faWhatsapp} />
        </div>
    </>

  );
};

export default About;

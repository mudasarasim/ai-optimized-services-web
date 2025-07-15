import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt,faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleWhatsAppSend = () => {
    const phoneNumber = "971522033745"; // AIO WhatsApp Number (without '+')
    const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
  };

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
              <h1>Contact Us</h1>
            </div>
            <div className="col-md-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#!">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    <section>
            <div class="container">
                <div class="text-center mb-5">
                    <h5 class="text-primary h6">Contact</h5>
                    <h2 class="display-20 display-md-18 display-lg-16">Get in touch with us!</h2>
                </div>
                <div class="row">
                    <div class="col-lg-8 mb-2-6 mb-lg-0">
                        <div class="p-1-6 p-sm-2-2 mr-lg-1-6 border rounded">
                            <h3 class="h4 mb-1-6">Drop us a message</h3>
                            <form class="quform" action="quform/contact.php" method="post" enctype="multipart/form-data" onclick="">

                                <div class="quform-elements">

                                    <div class="row">

                                 
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="name">Your Name <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                                </div>
                                            </div>

                                        </div>
                                    
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="email">Your Email <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                                </div>
                                            </div>
                                        </div>
                                      
                                        <div class="col-md-6">
                                            <div class="quform-element form-group quform-select-replaced">
                                                <label for="subject">Your Subject <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="phone">Contact Number</label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                                </div>
                                            </div>

                                        </div>
                                      
                                        <div class="col-md-12">
                                            <div class="quform-element form-group">
                                                <label for="message">Message <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <textarea class="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                   
                                        <div class="col-md-12">
                                            <div class="quform-element">
                                                <div class="form-group">
                                                    <div class="quform-input">
                                                        <input class="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="quform-submit-inner">
                                                <button class="butn butn-md" type="submit"><span>Send Message</span></button>
                                            </div>
                                            <div class="quform-loading-wrap text-left"><span class="quform-loading"></span></div>
                                        </div>
                       
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-md-6 col-lg-12 mb-3">
                                <div class="media contact-box p-1-6">
                                    <i class="fas fa-map-marker text-primary mr-1-6 display-20"></i>
                                    <div class="media-body">
                                        <h3 class="h5 text-secondary">Location</h3>
                                        <address class="text-secondary mb-0">Office No:9, Al Hazm Building, Al Rashid Road, Dubai</address>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-12 mb-3">
                                <div class="media contact-box p-1-6">
                                    <i class="fas fa-phone text-primary mr-1-6 display-20"></i>
                                    <div class="media-body">
                                        <h3 class="h5 text-secondary">Call Us</h3>
                                        <ul class="list-unstyled mb-0">
                                            <li><a href="tel:+1234567890" class="text-secondary">+971 52 203 3745</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-12 mb-3 mb-md-0 mb-lg-3">
                                <div class="media contact-box p-1-6">
                                    <i class="fas fa-envelope text-primary mr-1-6 display-20"></i>
                                    <div class="media-body">
                                        <h3 class="h5 text-secondary">Mail Us</h3>
                                        <ul class="list-unstyled mb-0 word-break">
                                            <li><a href="mailto:email@youradress.com" class="text-secondary">info@aioptimizedservices.com</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-12">
                                <div class="contact-box p-1-6">
                                    <ul class="social-icon3 w-100 text-center">
                                        <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

           {/* Sticky WhatsApp Button */}
    <div className="whatsapp-button" onClick={handleWhatsAppSend}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  </>
  );
};

export default Contact;

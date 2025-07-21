import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import BASE_URL from "../config"; // import base url

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleWhatsAppSend = () => {
        const phoneNumber = "971522033745"; // AIO WhatsApp Number (without '+')
        const encodedMsg = encodeURIComponent(message || "Hi AIO SERVICES, I need some help.");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(whatsappUrl, "_blank");
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '' // ✅ Rename to match input field and PHP key
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
            const response = await fetch(`${BASE_URL}/contact.php`, {
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
                    message: ''
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
                        <h2 class="display-20 display-md-18 display-lg-16">Get in touch!</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mb-2-6 mb-lg-0">
                            <div class="p-1-6 p-sm-2-2 mr-lg-1-6 border rounded">
                                <h3 class="h4 mb-1-6">Drop us a message</h3>
                                <form method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>

                                    <div class="quform-elements">

                                        <div class="row">


                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="name">Your Name <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="name" type="text" name="name" required onChange={handleChange} placeholder="Your name here" />
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="email">Your Email <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="email" type="text" required onChange={handleChange} name="email" placeholder="Your email here" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="quform-element form-group quform-select-replaced">
                                                    <label for="subject">Your Subject <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="subject" type="text" required onChange={handleChange} name="subject" placeholder="Your subject here" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-6">
                                                <div class="quform-element form-group">
                                                    <label for="phone">Contact Number</label>
                                                    <div class="quform-input">
                                                        <input class="form-control" id="phone" required onChange={handleChange} type="text" name="phone" placeholder="Your phone here" />
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-md-12">
                                                <div class="quform-element form-group">
                                                    <label for="message">Message <span class="quform-required">*</span></label>
                                                    <div class="quform-input">
                                                        <textarea class="form-control" id="message" onChange={handleChange} required name="message" rows="3" placeholder="Tell us a few words"></textarea>
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
                                            <li><a href="https://www.facebook.com/profile.php?id=61577901052283" target='_blank'><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.instagram.com/aioptimizedtechnical?igsh=MXY4ZTFpeTBmbHph" target='_blank'><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.tiktok.com/@aioptimizedservices?is_from_webapp=1&sender_device=pc" target='_blank'><i class="fab fa-tiktok"></i></a></li>
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

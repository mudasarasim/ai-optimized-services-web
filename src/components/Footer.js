import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../assets/Images/cook.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="pt-7 pt-lg-8 pt-xl-10 bg-img cover-background theme-overlay-dark mt-5" data-overlay-dark="9" data-background="img/bg/bg-01.jpg"  style={{backgroundImage: 'url("img/bg/bg-01.jpg")'}}>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-2-5 mb-lg-0">
                        <div class="mb-1-6">
                            <img src="img/cook.png" style={{marginBottom: '-40px'}} alt="" />
                        </div>
                        <p class="display-30 text-white mb-1-6">Different kinds and sizes of edifices experiences on cleaning region with effective undertaking on going.</p>
                        <ul class="footer-social-icon">
                            <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#!"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-2-5 mb-lg-0">
                        <div class="pl-lg-1-6">
                            <h3 class="text-primary h5 mb-1-6">Our Services</h3>
                            <ul class="footer-list">
                                <li><a href="#!">House Cleaning</a></li>
                                <li><a href="#!">Glass Cleaning</a></li>
                                <li><a href="#!">Toliet Cleaning</a></li>
                                <li><a href="#!">Office Cleaning</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <h3 class="text-primary h5 mb-1-6">Contact Us</h3>
                        <div class="footer-contact-info">
                            <div class="content">
                                <address class="text-white">Office No:9, Al Hazm Building, Hor AL Anz, Dubai</address>
                                <a href="#!" class="white-hover"><i class="fas fa-angle-right"></i>Get Direction</a>
                            </div>
                            <div class="box">
                                <h2><span>Get Free Estimate</span> +971 525 434 708 
                                </h2>
                                <span class="icon"><i class="fas fa-phone"></i></span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-8 mb-4 mb-xl-0">
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-2"><a href="tel:+921234567890" class="text-white"><span class="fas fa-phone text-primary mr-2 align-middle"></span> +971 525 434 708</a></li>
                                    <li><a href="mailto:Info@aioptimizedservices.com" class="text-white"><span class="fas fa-envelope text-primary mr-2 align-middle"></span> Support@aioptimizedservices.com</a></li>
                                </ul>
                            </div>
                            <div class="col-md-8 col-lg-12 col-xl-6 text-left text-sm-right">
                                <form class="quform newsletter-form w-90 w-sm-100" action="quform/newsletter-two.php" method="post" enctype="multipart/form-data" onclick="">
                                    <div class="quform-elements">
                                        <div class="row">

                                          
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom py-4 mt-6">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <p class="text-white opacity9 mb-0 display-31 letter-spacing-2 text-uppercase">© Copyright 2025 Cleaning Company. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Hassan R.',
    role: 'AC Repair Service',
    message: 'The technician arrived on time and fixed our AC in under an hour. Super professional and polite!',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    rating: 5,
  },
  {
    name: 'Amna F.',
    role: 'Deep Cleaning',
    message: 'The team deep cleaned my apartment perfectly — spotless kitchen, shining tiles. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 5,
  },
  {
    name: 'Ali Z.',
    role: 'Men’s Salon at Home',
    message: 'Booked a haircut and beard trim — the barber was experienced, neat, and fully equipped.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4,
  },
  {
    name: 'Zainab M.',
    role: 'Women’s Salon Service',
    message: 'Got facial and hair treatment done at home. It felt like a spa day — absolutely loved the service!',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    rating: 5,
  },
  {
    name: 'Umer A.',
    role: 'Plumbing Service',
    message: 'Quick, clean and affordable plumbing fix for our kitchen sink. I’ll definitely call them again.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4,
  },
];

const TestimonialCarousel = () => {
  const renderStars = (rating) => {
    return (
      <div className="stars ml-5 mb-4">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <FaStar key={index} className="star filled" />
          ) : (
            <FaRegStar key={index} className="star empty" />
          )
        )}
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { name, role, message, image, rating } = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon left" />

        <p className="message">{message}</p>
        <FaQuoteRight className="quote-icon right" />
        <div className="user-info">
          <img src={image} alt={name} className="user-image" />
          <div>
            <h4>{name}</h4>
            <p className="role">{role}</p>
          </div>
        </div>
        {renderStars(rating)}
        <div className="navigation">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

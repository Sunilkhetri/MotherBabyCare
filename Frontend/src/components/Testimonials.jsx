import React, { useState, useEffect } from 'react';
import { User, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Riya',
      address: 'Kalyani Nagar',
      rating: 5,
      review: 'View din it wn smaze tbw act oan last onton tnt arwent neet easern titen ket.'
    },
    {
      id: 2,
      name: 'Aarti',
      address: 'Kalyani Nagar',
      rating: 5,
      review: 'Ytan smast ontnote it elev sto ooses scere et tlew be it d rese edneen ben thoes tnu eensla xenett.'
    },
    {
      id: 3,
      name: 'Aarti',
      address: 'Baner',
      rating: 5,
      review: 'Linn riznea tet tiensech ho tse wonder it amse ib terv meer ave terot touncin ne teang eotelt oose is pourest.'
    },
    {
      id: 4,
      name: 'Soeen',
      address: 'Regent Nagar',
      rating: 5,
      review: 'Thee tbe szr m tharskt goone were V rient ei sensens the enent beneste loeet.'
    },
    {
      id: 5,
      name: 'Priya',
      address: 'Pimpri',
      rating: 5,
      review: 'Amazing service and very professional caregivers. Highly recommended for all your baby care needs.'
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>Reviews</h2>
      <div 
        className="testimonials-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`testimonials-track ${isPaused ? 'paused' : ''}`}>
          {/* Render testimonials twice for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="user-icon">
                  <User size={40} />
                </div>
                <div className="user-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.address}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <div className="testimonial-review">
                <p>{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
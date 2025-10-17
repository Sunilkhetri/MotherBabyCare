import React from 'react';
import { Heart, Shield, Users, Award, Clock, Smile } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h2>About Us</h2>
        <p className="aboutus-subtitle">Trusted Care for Your Little Ones</p>
      </div>

      <div className="aboutus-content">
        <div className="aboutus-story">
          <div className="story-text">
            <h3>Our Story</h3>
            <p>
              We understand that your baby deserves nothing but the best care. Founded with a mission 
              to provide professional, compassionate, and reliable baby care services, we have been 
              serving families with dedication and love.
            </p>
            <p>
              Our team of trained and certified caregivers brings years of experience in newborn care, 
              postpartum support, and child development. We believe every family deserves peace of mind, 
              knowing their precious little ones are in safe, caring hands.
            </p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <Heart size={80} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="aboutus-values">
          <h3>Why Choose Us</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Shield size={40} />
              </div>
              <h4>Safety First</h4>
              <p>All our caregivers are background-verified and trained in infant safety protocols.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={40} />
              </div>
              <h4>Experienced Team</h4>
              <p>Our professionals have extensive experience in newborn and postpartum care.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h4>Certified Experts</h4>
              <p>Every caregiver is certified and regularly trained in the latest care techniques.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Clock size={40} />
              </div>
              <h4>24/7 Support</h4>
              <p>We're available round the clock to assist you whenever you need us.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h4>Compassionate Care</h4>
              <p>We treat every baby with the love and attention they deserve.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Smile size={40} />
              </div>
              <h4>Trusted by Families</h4>
              <p>Hundreds of satisfied families trust us with their most precious treasure.</p>
            </div>
          </div>
        </div>

        <div className="aboutus-mission">
          <div className="mission-content">
            <h3>Our Mission</h3>
            <p>
              To provide exceptional, professional baby care services that give parents confidence 
              and peace of mind. We are committed to supporting families during the beautiful yet 
              challenging journey of parenthood, ensuring every baby receives nurturing care in a 
              safe and loving environment.
            </p>
          </div>
        </div>

        <div className="aboutus-cta">
          <h3>Ready to Experience Quality Care?</h3>
          <p>Join hundreds of families who trust us with their most precious treasure.</p>
          <button className="cta-button">Book Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
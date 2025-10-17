import React from 'react';
import { Bath, Bubbles, User } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-content">
        <div className="service-card">
          <div className="service-header">
            <div className="icon">
              <Bath />
            </div>
            <div className="service-info">
              <h3>Baby Bath & Care</h3>
              <p>Gentle and hygienic bathing, massage, and bowborn coocs. Our trained professionals ensure your comfort to the safety.</p>
            </div>
          </div>
          <button className="service-button">Learn More & Book</button>
        </div>

        <div className="service-card">
          <div className="service-header">
            <div className="icon">
              <Bubbles />
            </div>
            <div className="service-info">
              <h3>Postpotrum Mother Care</h3>
              <p>Nourishing massages, light support, and assistance to aid mothers new mothery.</p>
            </div>
          </div>
          <button className="service-button">Learn More & Book</button>
        </div>

        <div className="service-card">
          <div className="service-header">
            <div className="icon">
              <User />
            </div>
            <div className="service-info">
              <h3>Nanny & Support</h3>
              <p>Reliable temporary child supervision, feeding sleep, and support tailored to your family’s needs.</p>
            </div>
          </div>
          <button className="service-button">Learn More & Book</button>
        </div>
      </div>
    </div>
  );
}

export default Services;

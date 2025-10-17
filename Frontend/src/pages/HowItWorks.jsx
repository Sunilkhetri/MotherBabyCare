import React from 'react';
import { Search, Calendar, Home } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <div className="steps-wrapper">
        <div className="step-circle">
          <div className="step-content">
            <div className="step-icon">
              <Search size={60} />
            </div>
            <div className="step-text">
              <span className="step-number">1. Select</span>
            </div>
          </div>
        </div>

        <div className="step-circle">
          <div className="step-content">
            <div className="step-icon">
              <Calendar size={60} />
            </div>
            <div className="step-text">
              <span className="step-number">2. Book</span>
            </div>
          </div>
        </div>

        <div className="step-circle">
          <div className="step-content">
            <div className="step-icon">
              <Home size={60} />
            </div>
            <div className="step-text">
              <span className="step-number">3. Caregiver Comes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
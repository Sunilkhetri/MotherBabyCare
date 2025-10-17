import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <h3>BabyCare Services</h3>
            <p>Providing professional and compassionate baby care services to families. Your baby's comfort and safety is our priority.</p>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={24} /></a>
              <a href="#" className="social-icon"><Instagram size={24} /></a>
              <a href="#" className="social-icon"><Twitter size={24} /></a>
              <a href="#" className="social-icon"><Linkedin size={24} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#baby-bath">Baby Bath & Care</a></li>
              <li><a href="#postpartum">Postpartum Mother Care</a></li>
              <li><a href="#nanny">Nanny & Support</a></li>
              <li><a href="#consultation">Free Consultation</a></li>
              <li><a href="#emergency">Emergency Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <p>info@babycare.com</p>
                  <p>support@babycare.com</p>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <p>123 Care Street, Pimpri</p>
                  <p>Maharashtra, India - 411018</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={20} />
                <div>
                  <p>24/7 Available</p>
                  <p>Always here for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 BabyCare Services. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms & Conditions</a>
              <span>|</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
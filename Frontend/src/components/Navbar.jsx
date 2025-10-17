import { Home, User, LogIn, UserPlus } from 'lucide-react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only on first load or page refresh
  useEffect(() => {
    const isAnimated = localStorage.getItem('navbarAnimated');
    
    if (!isAnimated) {
      setHasAnimated(false);
      localStorage.setItem('navbarAnimated', 'true'); // Mark that the animation has played
      setTimeout(() => {
        setHasAnimated(true); // Trigger animation after 2 seconds
      }, 2000); // Adjust timeout based on your animation duration (2 seconds)
    } else {
      setHasAnimated(true); // Skip animation if it's already been triggered
    }
  }, []); // Empty dependency array ensures this effect runs once on page load

  // Helper to navigate to a section on the home page using a hash
  const goToSection = (id) => {
    navigate(`/#${id}`);
  };

  useEffect(() => {
    // When location.hash changes, try to scroll the element into view
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // calculate offset from CSS variable --navbar-height (fallback to 140)
          const navHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '140px';
          const navHeight = parseInt(navHeightValue, 10) || 140;
          const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8; // small extra gap
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [location]);

  return (
    <header 
      className={`navbar ${hasAnimated ? 'no-animation' : ''}`} 
      style={{ '--navbar-height': '64px' }}
    >
      <div className="container">
        <div className="mainContainer">
          <div className="left">
            <div className="brand">
              <Home size={40} color="#2b91ff" />
              <span className="brandText">Mother and Baby Care</span>
            </div>
          </div>

          <div className="right">
            <nav className="navLinks">
              <button onClick={() => navigate('/')}> Home</button>
              <button onClick={() => goToSection('services')}>Services</button>
              <button onClick={() => goToSection('how-it-works')}>How It Works</button>
              <button onClick={() => goToSection('about-us')}>About Us</button>
              <button onClick={() => goToSection('contact-us')}>Contact Us</button>
            </nav>

            <div className="actions">
              <button className="signup" onClick={() => navigate('/signup')}>
                <UserPlus size={20} /> Signup
              </button>
              <button className="login" onClick={() => navigate('/login')}>
                <LogIn size={20} /> Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

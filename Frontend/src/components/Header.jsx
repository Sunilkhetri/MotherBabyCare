import React from 'react';
import './Header.css'; // Make sure you import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <div className="main-container">
        <div className="content-container">
          <div className="top-content">
            <h1>Trusted Baby & Mother Care in Pune</h1>
            <p>Experience, verified caregivers — because your baby deserves the best care</p>
          </div>
          <div className="bottom-content">
            <div className="button-container">
              <button className="find-caregiver">Find Caregiver</button>
              <button className="join-caregiver">Join as Caregiver</button>
            </div>
            <p>Every mother deserves rest and every baby needs expert hands. We offer babies with verified, experienced caregivers they can trust.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

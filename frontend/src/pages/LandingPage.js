import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const history = useHistory();
  
  const goToLogin = () => {
    history.push('/login');
  };
  
  return (
    <div className="landing-page">
      <img 
        src="/images/food-background.jpg" 
        alt="Food background" 
        className="background-image" 
      />
      <div className="background-overlay"></div>
      
      <div className="navbar">
        <div className="navbar-left">
          <button className="menu-button">☰</button>
        </div>
        <div className="navbar-right">
          <button onClick={goToLogin} className="login-button">Log in</button>
          <button onClick={goToLogin} className="signup-button">Sign up</button>
        </div>
      </div>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>Fast food delivery to your door</h1>
          <p>Order from your favorite restaurants with just a few clicks</p>
          <div className="search-container">
            <div className="location-input">
              <span className="location-icon">📍</span>
              <input type="text" placeholder="Enter your location" />
            </div>
            
            <div className="search-input">
              <input type="text" placeholder="Search for restaurants" />
              <button type="button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
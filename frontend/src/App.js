import React, { useState } from 'react';
import './App.css';

// Simple App with conditional rendering instead of router
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Simple page navigation functions
  const goToLogin = () => setCurrentPage('login');
  const goToHome = () => setCurrentPage('home');
  
  return (
    <div className="App">
      {currentPage === 'home' ? (
        // Landing Page
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
      ) : (
        // Login Page
        <div className="auth-page">
          <div className="header-bar"></div>
          <div className="auth-form-container">
            <h2>Please provide your phone number or email address</h2>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Form submitted');
            }}>
              <input
                type="text"
                placeholder="Enter a phone number or email address"
                className="contact-input"
              />
              
              <button type="submit" className="continue-button">Continue</button>
            </form>
            
            <div className="divider">
              <div className="line"></div>
              <span>Or</span>
              <div className="line"></div>
            </div>
            
            <div className="social-buttons">
              <button className="social-button">Continue with Google</button>
              <button className="social-button">Continue with Facebook</button>
            </div>
            
            <p className="terms-text">
              By continuing, you agree to receive calls, WhatsApp messages, or SMS/RCS 
              messages at the number provided, including automated ones, from Uber and 
              its affiliates.
            </p>
            
            <button onClick={goToHome} className="back-button">Back to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
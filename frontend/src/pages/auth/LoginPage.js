import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Continuing with:', contactInfo);
    // Your authentication logic here
  };

  return (
    <div className="auth-page">
      <div className="header-bar"></div>
      
      <div className="auth-form-container">
        <h2>Please provide your phone number or email address</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a phone number or email address"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
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
          <button className="social-button"></button>
          <button className="social-button"></button>
        </div>
        
        <p className="terms-text">
          By continuing, you agree to receive calls, WhatsApp messages, or SMS/RCS 
          messages at the number provided, including automated ones, from Uber and 
          its affiliates.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
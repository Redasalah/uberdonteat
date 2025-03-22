import React from 'react';
import Navbar from '../components/layout/Navbar';
import SearchBar from '../components/common/SearchBar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>Fast food delivery to your door</h1>
          <p>Order from your favorite restaurants with just a few clicks</p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
// src/App.js
import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Navigation functions
  const goToLogin = () => setCurrentPage('login');
  const goToHome = () => setCurrentPage('home');
  
  return (
    <div className="App">
      {currentPage === 'home' ? (
        <LandingPage goToLogin={goToLogin} />
      ) : (
        <LoginPage goToHome={goToHome} />
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for restaurants near:', location);
    console.log('Search query:', searchQuery);
    // This would eventually call an API to search for restaurants
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="location-input">
          <span className="location-icon">📍</span>
          <input 
            type="text" 
            placeholder="Enter your location" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="search-input">
          <input 
            type="text" 
            placeholder="Search for restaurants" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
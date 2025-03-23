import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantListing.css';

// Mock data for restaurants
const restaurantData = [
  { 
    id: 1, 
    name: 'Burger King', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Burger'
  },
  { 
    id: 2, 
    name: 'Pizza Hut', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Pizza'
  },
  { 
    id: 3, 
    name: 'Mcdonalds', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Burger'
  },
  { 
    id: 4, 
    name: 'Max', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Burger'
  },
  { 
    id: 5, 
    name: 'smth healthy', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Healthy'
  },
  { 
    id: 6, 
    name: 'smth healty', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Healthy'
  },
  { 
    id: 7, 
    name: 'smth healthy', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Healthy'
  },
  { 
    id: 8, 
    name: 'smth healthy', 
    rating: 4.2, 
    image: '/images/restaurant-placeholder.jpg',
    category: 'Healthy'
  }
];

// Mock data for categories
const categoryData = [
  { 
    id: 1, 
    name: 'Pizza', 
    icon: '🍕'
  },
  { 
    id: 2, 
    name: 'Burger', 
    icon: '🍔'
  },
  { 
    id: 3, 
    name: 'Sushi', 
    icon: '🍣'
  }
];

const RestaurantListing = () => {
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  
  // In a real application, fetch restaurants and categories from your API
  useEffect(() => {
    // This would be your API call in a real application
    // For now, we're using the mock data defined above
    
    // Example API call:
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/api/restaurants');
    //     const data = await response.json();
    //     setRestaurants(data);
    //   } catch (error) {
    //     console.error('Error fetching restaurants:', error);
    //   }
    // };
    // fetchData();
  }, []);

  // Filter restaurants when category is selected
  useEffect(() => {
    if (selectedCategory) {
      const filtered = restaurantData.filter(
        restaurant => restaurant.category === selectedCategory
      );
      setRestaurants(filtered);
    } else {
      setRestaurants(restaurantData);
    }
  }, [selectedCategory]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      // If clicking the already selected category, clear the filter
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const navigateToRestaurant = (id) => {
    // Navigate to restaurant detail page
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="restaurant-listing-container">
      {/* Header with search */}
      <header className="listing-header">
        <button className="menu-button">
          <span>☰</span>
        </button>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="search" 
            className="search-input"
          />
        </div>
        
        <div className="location-container">
          <span className="location-icon">📍</span>
          <span className="location-text">1500 bernart street</span>
        </div>
        
        <button className="cart-button">
          <span>🛒</span>
        </button>
        
        <button className="profile-button">
          <span>👤</span>
        </button>
      </header>

      {/* Food categories */}
      <div className="categories-container">
        {categories.map(category => (
          <div 
            key={category.id}
            className={`category-item ${selectedCategory === category.name ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>

      {/* Restaurant list section */}
      <div className="restaurant-section">
        <div className="restaurant-grid">
          {restaurants.map(restaurant => (
            <div 
              key={restaurant.id} 
              className="restaurant-card"
              onClick={() => navigateToRestaurant(restaurant.id)}
            >
              <div className="restaurant-image">
                <img src={restaurant.image} alt={restaurant.name} />
                <button 
                  className={`favorite-button ${favorites.includes(restaurant.id) ? 'favorited' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigating to restaurant when clicking favorite
                    toggleFavorite(restaurant.id);
                  }}
                >
                  {favorites.includes(restaurant.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <div className="restaurant-rating">{restaurant.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Healthy section */}
      {!selectedCategory && (
        <div className="healthy-section">
          <h2 className="section-title">Healthy Solutions ?</h2>
          <div className="restaurant-grid">
            {restaurants
              .filter(restaurant => restaurant.category === 'Healthy')
              .map(restaurant => (
                <div 
                  key={restaurant.id} 
                  className="restaurant-card"
                  onClick={() => navigateToRestaurant(restaurant.id)}
                >
                  <div className="restaurant-image">
                    <img src={restaurant.image} alt={restaurant.name} />
                    <button 
                      className={`favorite-button ${favorites.includes(restaurant.id) ? 'favorited' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(restaurant.id);
                      }}
                    >
                      {favorites.includes(restaurant.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <div className="restaurant-info">
                    <h3 className="restaurant-name">{restaurant.name}</h3>
                    <div className="restaurant-rating">{restaurant.rating}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantListing;
import React, { useState } from 'react';
import { Search, Bell, User, Sun, Moon } from 'lucide-react';

const Header = ({ onAlertsToggle, onDarkModeToggle, darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="/logo.png" alt="Caterpillar Logo" className="logo-icon" />
        </div>
        <h1 className="page-title">Dashboard</h1>
      </div>
      
      <div className="header-center">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search by Equipment ID, Site, or Operator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </form>
      </div>
      
      <div className="header-right">
        <button 
          className="theme-toggle"
          onClick={onDarkModeToggle}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button 
          className="notifications-btn"
          onClick={onAlertsToggle}
          title="Notifications"
        >
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        
        <div className="user-profile">
          <button className="profile-btn">
            <User size={20} />
            <span className="user-name">Admin User</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

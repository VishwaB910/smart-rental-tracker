import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AlertsPanel from './components/AlertsPanel';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleAlerts = () => {
    setAlertsOpen(!alertsOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        onAlertsToggle={toggleAlerts}
        onDarkModeToggle={toggleDarkMode}
        darkMode={darkMode}
      />
      <div className="main-container">
        <Sidebar 
          collapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
        <div className={`content-area ${sidebarCollapsed ? 'expanded' : ''}`}>
          <Dashboard />
        </div>
      </div>
      <AlertsPanel 
        isOpen={alertsOpen}
        onClose={toggleAlerts}
      />
    </div>
  );
}

export default App;

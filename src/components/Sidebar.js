import React from 'react';
import { BarChart3, Building2, MapPin, FileText, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ collapsed, onToggle }) => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Building2, label: 'Assets', active: false },
    { icon: MapPin, label: 'Sites', active: false },
    { icon: FileText, label: 'Reports', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={onToggle}>
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`nav-item ${item.active ? 'active' : ''}`}
            title={collapsed ? item.label : ''}
          >
            <item.icon size={20} />
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { X, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const AlertsPanel = ({ isOpen, onClose }) => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      message: '2 assets overdue at Site B',
      timestamp: '2 hours ago',
      action: 'View Assets'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Excavator EQX1004 idle for 5 days',
      timestamp: '4 hours ago',
      action: 'View Asset'
    },
    {
      id: 3,
      type: 'info',
      message: 'New equipment added to fleet',
      timestamp: '1 day ago',
      action: 'View Details'
    },
    {
      id: 4,
      type: 'success',
      message: 'Maintenance completed on EQX1001',
      timestamp: '2 days ago',
      action: 'View Report'
    }
  ];

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle size={20} className="alert-icon critical" />;
      case 'warning':
        return <AlertTriangle size={20} className="alert-icon warning" />;
      case 'info':
        return <Info size={20} className="alert-icon info" />;
      case 'success':
        return <CheckCircle size={20} className="alert-icon success" />;
      default:
        return <Info size={20} className="alert-icon info" />;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'red';
      case 'warning': return 'yellow';
      case 'info': return 'blue';
      case 'success': return 'green';
      default: return 'gray';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="alerts-overlay" onClick={onClose}>
      <div className="alerts-panel" onClick={(e) => e.stopPropagation()}>
        <div className="alerts-header">
          <h3>Notifications</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="alerts-content">
          {alerts.length === 0 ? (
            <div className="no-alerts">
              <p>No new notifications</p>
            </div>
          ) : (
            alerts.map((alert) => (
              <div key={alert.id} className={`alert-item ${getAlertColor(alert.type)}`}>
                <div className="alert-icon-container">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="alert-content">
                  <p className="alert-message">{alert.message}</p>
                  <div className="alert-meta">
                    <span className="alert-timestamp">{alert.timestamp}</span>
                    <button className="alert-action">{alert.action}</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="alerts-footer">
          <button className="mark-all-read">Mark All as Read</button>
          <button className="view-all">View All Notifications</button>
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;


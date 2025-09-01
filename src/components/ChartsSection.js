import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getUsageData, getStatusData } from '../services/csvDataService';

const ChartsSection = ({ assets }) => {
  // Use data from CSV service
  const usageData = getUsageData();
  const statusData = getStatusData();

  return (
    <div className="charts-section">
      <div className="chart-container">
        <h3>Usage Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="engineHours" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Engine Hours"
            />
            <Line 
              type="monotone" 
              dataKey="idleHours" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Idle Hours"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="chart-container">
        <h3>Status Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-legend">
          {statusData.map((item, index) => (
            <div key={index} className="legend-item">
              <span 
                className="legend-color" 
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="legend-label">{item.name}: {item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;

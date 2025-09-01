import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const SummaryCards = ({ data }) => {
  // Calculate trends based on CSV data
  const calculateTrend = (currentValue, previousValue) => {
    if (previousValue === 0) return { trend: 'up', change: '+100%' };
    const percentage = ((currentValue - previousValue) / previousValue) * 100;
    if (percentage > 0) {
      return { trend: 'up', change: `+${Math.round(percentage)}%` };
    } else {
      return { trend: 'down', change: `${Math.round(percentage)}%` };
    }
  };

  // Simulate previous month data for trend calculation
  // In real scenario, this would come from historical CSV data
  const previousMonthData = {
    totalAssets: 95,
    currentlyRented: 68,
    available: 22,
    overdue: 5
  };

  const cards = [
    {
      title: 'Total Assets',
      value: data.totalAssets,
      description: 'Total equipment in fleet',
      ...calculateTrend(data.totalAssets, previousMonthData.totalAssets),
      color: 'blue'
    },
    {
      title: 'Currently Rented',
      value: data.currentlyRented,
      description: 'Equipment currently in use',
      ...calculateTrend(data.currentlyRented, previousMonthData.currentlyRented),
      color: 'green'
    },
    {
      title: 'Available',
      value: data.available,
      description: 'Ready for rental',
      ...calculateTrend(data.available, previousMonthData.available),
      color: 'orange'
    },
    {
      title: 'Overdue',
      value: data.overdue,
      description: 'Past return date',
      ...calculateTrend(data.overdue, previousMonthData.overdue),
      color: 'red'
    }
  ];

  return (
    <div className="summary-cards">
      {cards.map((card, index) => (
        <div key={index} className={`summary-card ${card.color}`}>
          <div className="card-header">
            <h3 className="card-title">{card.title}</h3>
            <div className={`trend ${card.trend}`}>
              {card.trend === 'up' ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              <span className="change">{card.change}</span>
            </div>
          </div>
          <div className="card-value">{card.value}</div>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;

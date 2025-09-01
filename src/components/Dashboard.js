import React from 'react';
import SummaryCards from './SummaryCards';
import ChartsSection from './ChartsSection';
import AssetTable from './AssetTable';
import { getDashboardData } from '../services/csvDataService';

const Dashboard = () => {
  const dashboardData = getDashboardData();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Equipment Overview</h2>
        <p>Monitor your Caterpillar machinery fleet in real-time</p>
      </div>
      
      <SummaryCards data={dashboardData.summary} />
      <ChartsSection assets={dashboardData.assets} />
      <AssetTable assets={dashboardData.assets} />
    </div>
  );
};

export default Dashboard;

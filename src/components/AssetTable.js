import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';

const AssetTable = ({ assets }) => {
  const [sortField, setSortField] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Filter and sort assets
  const filteredAssets = assets.filter(asset => {
    const matchesSearch = 
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.operator.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || asset.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Sort assets
  const sortedAssets = [...filteredAssets].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];
    
    // Handle date sorting
    if (sortField === 'checkOutDate' || sortField === 'expectedReturn') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedAssets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAssets = sortedAssets.slice(startIndex, endIndex);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleExport = () => {
    console.log('Exporting data...');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return '#10B981';
      case 'Rented': return '#3B82F6';
      case 'Overdue': return '#EF4444';
      case 'Under Maintenance': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  return (
    <div className="asset-table-section">
      <div className="table-controls">
        <div className="search-filter">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Rented">Rented</option>
            <option value="Overdue">Overdue</option>
            <option value="Under Maintenance">Under Maintenance</option>
          </select>
        </div>
        <button className="export-btn" onClick={handleExport}>
          <Download size={16} />
          Export
        </button>
      </div>

      <div className="table-container">
        <table className="asset-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')} className="sortable">
                Equipment ID 
                {sortField === 'id' && (
                  <span className={`sort-arrow ${sortDirection}`}>
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('type')} className="sortable">
                Type 
                {sortField === 'type' && (
                  <span className={`sort-arrow ${sortDirection}`}>
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('site')} className="sortable">
                Site 
                {sortField === 'site' && (
                  <span className={`sort-arrow ${sortDirection}`}>
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('checkOutDate')} className="sortable">
                Check-out Date 
                {sortField === 'checkOutDate' && (
                  <span className={`sort-arrow ${sortDirection}`}>
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th onClick={() => handleSort('expectedReturn')} className="sortable">
                Expected Return 
                {sortField === 'expectedReturn' && (
                  <span className={`sort-arrow ${sortDirection}`}>
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentAssets.map((asset) => (
              <tr key={asset.id}>
                <td>{asset.id}</td>
                <td>{asset.type}</td>
                <td>{asset.site}</td>
                <td>{asset.checkOutDate}</td>
                <td>{asset.expectedReturn}</td>
                <td>
                  <span 
                    className="status-tag"
                    style={{ backgroundColor: getStatusColor(asset.status) }}
                  >
                    {asset.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn extend">Extend</button>
                    <button className="action-btn return">Return</button>
                    <button className="action-btn issue">Issue</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <div className="pagination-info">
            Showing {startIndex + 1}-{Math.min(endIndex, sortedAssets.length)} of {sortedAssets.length} assets
          </div>
          <div className="pagination-controls">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              // Show first page, last page, current page, and pages around current page
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              } else if (
                page === currentPage - 2 ||
                page === currentPage + 2
              ) {
                return <span key={page} className="pagination-ellipsis">...</span>;
              }
              return null;
            })}
            
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetTable;

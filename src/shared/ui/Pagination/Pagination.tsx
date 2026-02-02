import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startEntry: number;
  endEntry: number;
  totalEntries: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  startEntry,
  endEntry,
  totalEntries,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    
    for (let i = 1; i <= Math.min(4, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    
    if (totalPages > 4) {
      pages.push(<span key="ellipsis" className="page-ellipsis">...</span>);
      pages.push(
        <button
          key={totalPages}
          className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    
    return pages;
  };

  const displayTotal = totalEntries > 256000 ? '256K' : totalEntries;

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        Showing data {startEntry} to {endEntry} of {displayTotal} entries
      </div>
      <div className="pagination-controls">
        <button
          className="page-arrow"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {renderPageNumbers()}
        <button
          className="page-arrow"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};


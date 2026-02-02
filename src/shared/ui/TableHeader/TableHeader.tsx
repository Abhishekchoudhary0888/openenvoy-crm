import './TableHeader.css';

import React from 'react';

export interface TableHeaderProps {
  title: string;
  subtitle?: string;
  onSubtitleClick?: () => void;
  children?: React.ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  subtitle,
  onSubtitleClick,
  children,
}) => {
  return (
    <div className="table-header-container">
      <div className="table-title-section">
        <h2 className="table-title">{title}</h2>
        {subtitle && (
          <span 
            className={`table-subtitle ${onSubtitleClick ? 'clickable' : ''}`}
            onClick={onSubtitleClick}
          >
            {subtitle}
          </span>
        )}
      </div>
      {children && <div className="table-header-actions">{children}</div>}
    </div>
  );
};


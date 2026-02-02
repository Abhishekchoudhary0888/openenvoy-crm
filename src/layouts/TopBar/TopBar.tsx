import React from 'react';
import { Search } from 'lucide-react';
import './TopBar.css';

export const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <h1 className="greeting">Hello Evano 👋</h1>
      <div className="search-container">
        <span className="search-icon">
          <Search size={16} />
        </span>
        <input type="text" placeholder="Search" className="global-search" />
      </div>
    </div>
  );
};


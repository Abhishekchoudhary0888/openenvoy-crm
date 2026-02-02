import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Select, SelectOption } from '../Select/Select';
import './TableControls.css';

export interface TableControlsProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  sortValue: string;
  sortOptions: SelectOption[];
  onSortChange: (value: string) => void;
  searchPlaceholder?: string;
}

export const TableControls: React.FC<TableControlsProps> = ({
  searchValue,
  onSearchChange,
  sortValue,
  sortOptions,
  onSortChange,
  searchPlaceholder = 'Search',
}) => {
  return (
    <div className="table-controls">
      <SearchBar
        placeholder={searchPlaceholder}
        value={searchValue}
        onChange={onSearchChange}
        size="medium"
      />
      <div className="sort-wrapper">
        <label className="sort-label">Sort by :</label>
        <Select
          options={sortOptions}
          value={sortValue}
          onChange={onSortChange}
          size="medium"
        />
      </div>
    </div>
  );
};


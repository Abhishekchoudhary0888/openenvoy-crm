import React from 'react';
import { Input } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import './SearchBar.css';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  size = 'medium',
  className = '',
}) => {
  return (
    <div className={`search-bar search-bar-${size} ${className}`}>
      <Icon name="search" size={size === 'small' ? 'small' : 'medium'} />
      <Input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        className="search-input"
      />
    </div>
  );
};

import React from 'react';
import './LoadingSpinner.css';

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  className = '',
}) => {
  const spinnerClass = `loading-spinner loading-spinner-${size} ${className}`.trim();

  return (
    <div className={spinnerClass}>
      <div className="spinner"></div>
    </div>
  );
};

import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import './LoadingState.css';

export interface LoadingStateProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading...',
  size = 'large',
  className = '',
}) => {
  return (
    <div className={`loading-state ${className}`}>
      <LoadingSpinner size={size} />
      <p className="loading-state-message">{message}</p>
    </div>
  );
};

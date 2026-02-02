import React from 'react';
import './ErrorState.css';

export interface ErrorStateProps {
  icon?: string;
  title?: string;
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  icon = '⚠️',
  title = 'Something went wrong',
  message,
  onRetry,
  retryLabel = 'Try Again',
  className = '',
}) => {
  return (
    <div className={`error-state ${className}`}>
      <div className="error-state-icon">{icon}</div>
      <h3 className="error-state-title">{title}</h3>
      <p className="error-state-message">{message}</p>
      {onRetry && (
        <button className="error-state-retry" onClick={onRetry}>
          {retryLabel}
        </button>
      )}
    </div>
  );
};

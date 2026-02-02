import React from 'react';
import './Badge.css';

export interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'small' | 'medium';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'medium',
  children,
  className = '',
}) => {
  const badgeClass = `badge badge-${variant} badge-${size} ${className}`.trim();

  return (
    <span className={badgeClass}>
      {children}
    </span>
  );
};

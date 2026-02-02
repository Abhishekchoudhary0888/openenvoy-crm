import React from 'react';
import { Icon } from '../../../../shared/ui/Icon/Icon';
import './StatCard.css';

export interface StatCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: string;
  avatars?: string[];
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendUp,
  icon,
  avatars,
  className = '',
}) => {
  const iconClass = `stat-icon stat-icon-${title.toLowerCase().replace(/\s+/g, '-')}`;

  // Split trend into percentage and text (e.g., "16% this month" -> ["16%", "this month"])
  const getTrendParts = () => {
    if (!trend) return { percentage: '', text: '' };
    const parts = trend.split(' ');
    const percentage = parts[0]; // "16%"
    const text = parts.slice(1).join(' '); // "this month"
    return { percentage, text };
  };

  const { percentage, text } = getTrendParts();

  return (
    <div className={`stat-card ${className}`}>
      <div className={iconClass}>
        <Icon name={icon} size="large" />
      </div>
      <div className="stat-content">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{value}</div>
        {trend && (
          <div className="stat-trend">
            <span className={`trend-highlight ${trendUp ? 'trend-up' : 'trend-down'}`}>
              <span className="trend-icon">{trendUp ? '↑' : '↓'}</span>
              {percentage}
            </span>
            <span className="trend-text">{text}</span>
          </div>
        )}
        {avatars && (
          <div className="stat-avatars">
            {avatars.map((avatar, i) => (
              <img key={i} src={avatar} alt="" className="avatar" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

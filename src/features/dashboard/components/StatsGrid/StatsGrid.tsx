import React from 'react';
import { StatCard } from '../StatCard/StatCard';
import './StatsGrid.css';

export interface StatData {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: string;
  avatars?: string[];
}

export interface StatsGridProps {
  stats: StatData[];
  className?: string;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  className = '',
}) => {
  return (
    <div className={`stats-grid ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={`${stat.title}-${index}`}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
          trendUp={stat.trendUp}
          icon={stat.icon}
          avatars={stat.avatars}
        />
      ))}
    </div>
  );
};

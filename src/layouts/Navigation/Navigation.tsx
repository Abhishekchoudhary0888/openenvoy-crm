import React from 'react';
import { NavItem } from '../../shared/ui/NavItem/NavItem';
import './Navigation.css';

export interface NavItemData {
  icon: string;
  label: string;
  active?: boolean;
}

export interface NavigationProps {
  items: NavItemData[];
  logo?: React.ReactNode;
  logoText?: string;
  version?: string;
  user?: {
    avatar: string;
    name: string;
    role: string;
  };
  isOpen?: boolean;
  onClose?: () => void;
  onNavItemClick?: (label: string) => void;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  logo = '⬡',
  logoText = 'Dashboard',
  version = 'v.01',
  user,
  isOpen = false,
  onClose,
  onNavItemClick,
  className = '',
}) => {
  const handleNavItemClick = (item: NavItemData) => {
    onNavItemClick?.(item.label);
    onClose?.();
  };

  return (
    <aside className={`navigation ${isOpen ? 'open' : ''} ${className}`}>
      <div className="navigation-header">
        <span className="logo">{logo}</span>
        <span className="logo-text">{logoText}</span>
        <span className="version">{version}</span>
      </div>
      
      <nav className="navigation-nav">
        {items.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
            onClick={() => handleNavItemClick(item)}
          />
        ))}
      </nav>

      {user && (
        <div className="navigation-footer">
          <img src={user.avatar} alt="User" className="user-avatar" />
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-role">{user.role}</div>
          </div>
        </div>
      )}
    </aside>
  );
};

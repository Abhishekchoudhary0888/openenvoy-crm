import React from 'react';
import {
  LayoutDashboard,
  Package,
  Users,
  TrendingUp,
  Megaphone,
  HelpCircle,
  Search,
  User,
  Monitor,
  ChevronRight,
  Menu,
  X,
  Edit,
  Trash2,
  Plus,
  Check,
  AlertTriangle,
  Info,
  XCircle,
  CheckCircle,
} from 'lucide-react';
import './Icon.css';

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  className = '',
}) => {
  const iconClass = `icon icon-${size} ${className}`.trim();

  // Map size to pixel size
  const sizeMap = {
    small: 16,
    medium: 20,
    large: 24,
  };

  const iconSize = sizeMap[size];

  // Map icon names to Lucide React components
  const iconMap: Record<string, React.ReactNode> = {
    dashboard: <LayoutDashboard size={iconSize} />,
    product: <Package size={iconSize} />,
    customers: <Users size={iconSize} />,
    income: <TrendingUp size={iconSize} />,
    promote: <Megaphone size={iconSize} />,
    help: <HelpCircle size={iconSize} />,
    search: <Search size={iconSize} />,
    user: <User size={iconSize} />,
    computer: <Monitor size={iconSize} />,
    arrow: <ChevronRight size={iconSize} />,
    menu: <Menu size={iconSize} />,
    close: <X size={iconSize} />,
    edit: <Edit size={iconSize} />,
    delete: <Trash2 size={iconSize} />,
    add: <Plus size={iconSize} />,
    check: <Check size={iconSize} />,
    warning: <AlertTriangle size={iconSize} />,
    info: <Info size={iconSize} />,
    error: <XCircle size={iconSize} />,
    success: <CheckCircle size={iconSize} />,
  };

  const iconContent = iconMap[name] || <span>{name}</span>;

  return (
    <span className={iconClass} role="img" aria-label={name}>
      {iconContent}
    </span>
  );
};

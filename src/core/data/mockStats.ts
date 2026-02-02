import { StatData } from '../../features/dashboard/components/StatsGrid/StatsGrid';

export const mockStats: StatData[] = [
  {
    title: 'Total Customers',
    value: '5,423',
    trend: '16% this month',
    trendUp: true,
    icon: 'customers',
  },
  {
    title: 'Members',
    value: '1,893',
    trend: '1% this month',
    trendUp: false,
    icon: 'user',
  },
  {
    title: 'Active Now',
    value: '189',
    icon: 'computer',
    avatars: [
      'https://i.pravatar.cc/24?img=2',
      'https://i.pravatar.cc/24?img=3',
      'https://i.pravatar.cc/24?img=4',
      'https://i.pravatar.cc/24?img=5',
    ],
  },
];

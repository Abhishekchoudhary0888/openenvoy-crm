import type { Meta, StoryObj } from '@storybook/react';
import { StatsGrid } from './StatsGrid';

const mockStats = [
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

const meta = {
  title: 'Features/Dashboard/StatsGrid',
  component: StatsGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A grid layout for displaying multiple stat cards with responsive behavior.',
      },
    },
  },
  argTypes: {
    stats: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof StatsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stats: mockStats,
  },
};

export const TwoStats: Story = {
  args: {
    stats: mockStats.slice(0, 2),
  },
};

export const FourStats: Story = {
  args: {
    stats: [
      ...mockStats,
      {
        title: 'Revenue',
        value: '$12,345',
        trend: '5% this month',
        trendUp: true,
        icon: 'income',
      },
    ],
  },
};

export const NoTrends: Story = {
  args: {
    stats: mockStats.map(stat => ({
      ...stat,
      trend: undefined,
      trendUp: undefined,
    })),
  },
};

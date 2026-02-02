import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';

const meta = {
  title: 'Features/Dashboard/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A stat card component for displaying key metrics with icons, values, and trends.',
      },
    },
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    trend: {
      control: { type: 'text' },
    },
    trendUp: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'select' },
      options: ['dashboard', 'customers', 'user', 'computer', 'income', 'product'],
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTrend: Story = {
  args: {
    title: 'Total Customers',
    value: '5,423',
    trend: '16% this month',
    trendUp: true,
    icon: 'customers',
  },
};

export const WithoutTrend: Story = {
  args: {
    title: 'Members',
    value: '1,893',
    icon: 'user',
  },
};

export const WithAvatars: Story = {
  args: {
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
};

export const NegativeTrend: Story = {
  args: {
    title: 'Revenue',
    value: '$12,345',
    trend: '2% this month',
    trendUp: false,
    icon: 'income',
  },
};

export const AllVariants: Story = {
  args: {
    title: 'Stat Card',
    value: '0',
    icon: 'dashboard',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <StatCard
        title="Total Customers"
        value="5,423"
        trend="16% this month"
        trendUp={true}
        icon="customers"
      />
      <StatCard
        title="Members"
        value="1,893"
        icon="user"
      />
      <StatCard
        title="Active Now"
        value="189"
        icon="computer"
        avatars={[
          'https://i.pravatar.cc/24?img=2',
          'https://i.pravatar.cc/24?img=3',
          'https://i.pravatar.cc/24?img=4',
        ]}
      />
    </div>
  ),
};

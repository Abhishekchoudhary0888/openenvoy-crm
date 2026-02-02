import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta = {
  title: 'Shared/UI/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A navigation item component for sidebar navigation menus.',
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['dashboard', 'product', 'customers', 'income', 'promote', 'help'],
    },
    label: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'dashboard',
    label: 'Dashboard',
  },
};

export const Active: Story = {
  args: {
    icon: 'customers',
    label: 'Customers',
    active: true,
  },
};

export const Product: Story = {
  args: {
    icon: 'product',
    label: 'Product',
  },
};

export const Income: Story = {
  args: {
    icon: 'income',
    label: 'Income',
  },
};

export const AllNavItems: Story = {
  args: {
    icon: 'dashboard',
    label: 'Dashboard',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '240px' }}>
      <NavItem icon="dashboard" label="Dashboard" />
      <NavItem icon="product" label="Product" />
      <NavItem icon="customers" label="Customers" active />
      <NavItem icon="income" label="Income" />
      <NavItem icon="promote" label="Promote" />
      <NavItem icon="help" label="Help" />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Shared/UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible icon component that supports various icon types and sizes.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'dashboard', 'product', 'customers', 'income', 'promote', 'help',
        'search', 'user', 'computer', 'arrow', 'menu', 'close',
        'edit', 'delete', 'add', 'check', 'warning', 'info', 'error', 'success'
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    name: 'dashboard',
  },
};

export const Customers: Story = {
  args: {
    name: 'customers',
  },
};

export const Search: Story = {
  args: {
    name: 'search',
  },
};

export const User: Story = {
  args: {
    name: 'user',
  },
};

export const Small: Story = {
  args: {
    name: 'dashboard',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    name: 'dashboard',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    name: 'dashboard',
    size: 'large',
  },
};

export const AllIcons: Story = {
  args: {
    name: 'dashboard',
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', width: '400px' }}>
      <Icon name="dashboard" />
      <Icon name="product" />
      <Icon name="customers" />
      <Icon name="income" />
      <Icon name="promote" />
      <Icon name="help" />
      <Icon name="search" />
      <Icon name="user" />
      <Icon name="computer" />
      <Icon name="arrow" />
      <Icon name="menu" />
      <Icon name="close" />
    </div>
  ),
};

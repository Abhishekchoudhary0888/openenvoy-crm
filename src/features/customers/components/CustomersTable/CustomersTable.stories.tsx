import type { Meta, StoryObj } from '@storybook/react';
import { CustomersTable } from './CustomersTable';
import { mockCustomers } from '../../../../core/data/mockCustomers';

const meta = {
  title: 'Features/Customers/CustomersTable',
  component: CustomersTable,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomersTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customers: mockCustomers,
  },
};

export const Loading: Story = {
  args: {
    customers: [],
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    customers: [],
    error: 'Failed to load customers. Please check your internet connection and try again.',
  },
};

export const Empty: Story = {
  args: {
    customers: [],
  },
};

export const FewCustomers: Story = {
  args: {
    customers: mockCustomers.slice(0, 5),
  },
};

export const SinglePage: Story = {
  args: {
    customers: mockCustomers.slice(0, 8),
  },
};

export const ActiveCustomersOnly: Story = {
  args: {
    customers: mockCustomers.filter(c => c.status === 'Active'),
  },
};

export const InactiveCustomersOnly: Story = {
  args: {
    customers: mockCustomers.filter(c => c.status === 'Inactive'),
  },
};


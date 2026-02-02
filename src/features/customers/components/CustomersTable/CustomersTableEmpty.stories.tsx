import type { Meta, StoryObj } from '@storybook/react';
import { CustomersTableEmpty } from './CustomersTableEmpty';

const meta: Meta<typeof CustomersTableEmpty> = {
  title: 'Features/Customers/CustomersTableEmpty',
  component: CustomersTableEmpty,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomersTableEmpty>;

const SORT_OPTIONS = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Name', label: 'Name' },
  { value: 'Status', label: 'Status' },
];

export const Default: Story = {
  args: {
    searchQuery: '',
    onSearchChange: (value) => console.log('Search:', value),
    sortBy: 'Newest',
    onSortChange: (value) => console.log('Sort:', value),
    sortOptions: SORT_OPTIONS,
  },
};

export const WithSearchQuery: Story = {
  args: {
    searchQuery: 'nonexistent',
    onSearchChange: (value) => console.log('Search:', value),
    sortBy: 'Name',
    onSortChange: (value) => console.log('Sort:', value),
    sortOptions: SORT_OPTIONS,
  },
};

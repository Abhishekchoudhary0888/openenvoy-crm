import type { Meta, StoryObj } from '@storybook/react';
import { CustomersTableError } from './CustomersTableError';

const meta: Meta<typeof CustomersTableError> = {
  title: 'Features/Customers/CustomersTableError',
  component: CustomersTableError,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomersTableError>;

export const Default: Story = {
  args: {
    error: 'Failed to load customers',
    onRetry: () => console.log('Retry clicked'),
  },
};

export const NetworkError: Story = {
  args: {
    error: 'Network connection failed. Please check your internet connection.',
    onRetry: () => console.log('Retry clicked'),
  },
};

export const ServerError: Story = {
  args: {
    error: 'Server error (500): Unable to process your request at this time.',
    onRetry: () => console.log('Retry clicked'),
  },
};

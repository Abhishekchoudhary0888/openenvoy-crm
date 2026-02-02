import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from './ErrorState';

const meta: Meta<typeof ErrorState> = {
  title: 'Shared/UI/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {
    message: 'Failed to load customers',
    onRetry: () => alert('Retrying...'),
  },
};

export const NetworkError: Story = {
  args: {
    title: 'Network Error',
    message: 'Unable to connect to the server. Please check your internet connection.',
    onRetry: () => alert('Retrying...'),
  },
};

export const WithoutRetry: Story = {
  args: {
    message: 'You do not have permission to view this resource.',
  },
};

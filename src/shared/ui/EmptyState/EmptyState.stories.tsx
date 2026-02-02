import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Shared/UI/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: '📊',
    title: 'No customers yet',
    description: 'Get started by adding your first customer.',
  },
};

export const NoResults: Story = {
  args: {
    icon: '🔍',
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
  },
};

export const WithAction: Story = {
  args: {
    icon: '📊',
    title: 'No customers yet',
    description: 'Get started by adding your first customer.',
    action: <button style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: '#5932EA', color: 'white', cursor: 'pointer' }}>Add Customer</button>,
  },
};

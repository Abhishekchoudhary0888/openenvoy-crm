import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta = {
  title: 'Shared/UI/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const InContainer: Story = {
  args: {
    size: 'medium',
    className: 'bg-gray-100 p-8 rounded-lg',
  },
  render: (args) => (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <LoadingSpinner {...args} />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Shared/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A badge component for displaying status, labels, or notifications.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info', 'neutral'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Active',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Pending',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Inactive',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'New',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'Default',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Badge',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Badge',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Badge',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Inactive</Badge>
      <Badge variant="info">New</Badge>
      <Badge variant="neutral">Default</Badge>
    </div>
  ),
};

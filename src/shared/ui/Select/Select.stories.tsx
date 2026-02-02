import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Shared/UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'name', label: 'Name' },
  { value: 'status', label: 'Status' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
  },
};

export const Small: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    value: 'newest',
    disabled: true,
  },
};


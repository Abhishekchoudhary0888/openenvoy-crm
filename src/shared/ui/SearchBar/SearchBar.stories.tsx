import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'Shared/UI/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search input component with an integrated search icon.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small search',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium search',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large search',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample search',
    placeholder: 'Search...',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <SearchBar size="small" placeholder="Small search bar" />
      <SearchBar size="medium" placeholder="Medium search bar" />
      <SearchBar size="large" placeholder="Large search bar" />
    </div>
  ),
};

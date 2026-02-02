import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';
import { TableControls } from '../TableControls/TableControls';

const meta = {
  title: 'Shared/UI/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'All Customers',
    subtitle: 'Active Members',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'All Customers',
  },
};

export const WithClickableSubtitle: Story = {
  args: {
    title: 'All Customers',
    subtitle: 'Active Members',
    onSubtitleClick: () => alert('Subtitle clicked!'),
  },
};

export const WithControls: Story = {
  args: {
    title: 'All Customers',
    subtitle: 'Active Members',
    children: (
      <TableControls
        searchValue=""
        onSearchChange={(value) => console.log('Search:', value)}
        sortValue="Newest"
        sortOptions={[
          { value: 'Newest', label: 'Newest' },
          { value: 'Name', label: 'Name' },
          { value: 'Status', label: 'Status' },
        ]}
        onSortChange={(value) => console.log('Sort:', value)}
      />
    ),
  },
};


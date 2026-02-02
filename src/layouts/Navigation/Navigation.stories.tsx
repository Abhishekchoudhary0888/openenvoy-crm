import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const mockNavItems = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'product', label: 'Product' },
  { icon: 'customers', label: 'Customers', active: true },
  { icon: 'income', label: 'Income' },
  { icon: 'promote', label: 'Promote' },
  { icon: 'help', label: 'Help' },
];

const mockUser = {
  avatar: 'https://i.pravatar.cc/40?img=1',
  name: 'Evano',
  role: 'Project Manager',
};

const defaultLogo = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.1 3.5C13.6523 3.18377 14.3477 3.18377 14.9 3.5L22.5263 8.12885C23.0786 8.44508 23.4263 9.03604 23.4263 9.67949V18.3205C23.4263 18.964 23.0786 19.5549 22.5263 19.8712L14.9 24.5C14.3477 24.8162 13.6523 24.8162 13.1 24.5L5.47372 19.8712C4.92144 19.5549 4.57372 18.964 4.57372 18.3205V9.67949C4.57372 9.03604 4.92144 8.44508 5.47372 8.12885L13.1 3.5Z" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
  </svg>
);

const meta = {
  title: 'Layouts/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A complete navigation sidebar with logo, menu items, and user profile.',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    logoText: {
      control: { type: 'text' },
    },
    version: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: mockNavItems,
    logo: defaultLogo,
    user: mockUser,
  },
};

export const WithoutUser: Story = {
  args: {
    items: mockNavItems,
    logo: defaultLogo,
  },
};

export const OpenOnMobile: Story = {
  args: {
    items: mockNavItems,
    logo: defaultLogo,
    user: mockUser,
    isOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const CustomBranding: Story = {
  args: {
    items: mockNavItems,
    user: mockUser,
    logo: '🚀',
    logoText: 'MyApp',
    version: 'v.2.0',
  },
};

# Customer CRM Dashboard

A modern, production-ready React + TypeScript customer dashboard with search, sort, pagination, and comprehensive Storybook component library.

## ✨ Features

- **Navigation Sidebar** - Dashboard, Product, Customers (active), Income, Promote, Help
- **Statistics Dashboard** - Real-time metrics with trend indicators
- **Customer Management** - Searchable, sortable, paginated customer table
- **Search & Filter** - Real-time filtering by name, company, email, country
- **Smart Sorting** - By Newest, Name (A-Z), or Status (Active first)
- **Pagination** - 8 entries per page with smart page controls
- **Responsive Design** - Mobile-first approach with collapsible sidebar
- **Loading States** - Skeleton loading, error handling, empty states
- **Storybook** - Complete component documentation and visual testing

## 🛠 Tech Stack

- **React 18.2** - Component framework
- **TypeScript 5.3** - Type safety
- **Vite 5.0** - Fast build tool and dev server
- **Lucide React** - Professional icon system
- **Storybook 7.6** - Component development and documentation
- **Vanilla CSS** - No framework dependencies

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
App available at `http://localhost:5173`

### Run Storybook
```bash
npm run storybook
```
Storybook available at `http://localhost:6006`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── features/         # Feature modules (dashboard, customers)
│   ├── dashboard/    # Dashboard stats components
│   └── customers/    # Customer table and related components
├── shared/ui/        # Reusable UI components (Button, Input, etc.)
├── layouts/          # Page layouts (Navigation, TopBar, DashboardLayout)
├── core/             # Types, mock data, utilities
│   ├── data/         # Mock data (customers, stats)
│   ├── types/        # TypeScript definitions
│   └── utils/        # Utility functions
├── App.tsx           # Main application
└── main.tsx          # Entry point
```

### Feature-Based Architecture

Components are organized by feature domain rather than technical type:
- **Features** - Business-specific components (CustomersTable, StatsGrid)
- **Shared** - Reusable UI components (Button, Badge, Input)
- **Layouts** - Page structure (Navigation, TopBar, DashboardLayout)
- **Core** - Types, data, utilities

## 📊 Key Components

### Dashboard
- **StatsGrid** - Responsive grid of statistics cards
- **StatCard** - Individual metric with icon and trend indicator

### Customers
- **CustomersTable** - Full-featured table with search, sort, pagination
- **Table States** - Loading, error, and empty state components

### Shared UI
- Form: Button, Input, Select, SearchBar
- Display: Badge, Icon, Pagination, TableHeader
- States: LoadingState, ErrorState, EmptyState

### Layouts
- **Navigation** - Sidebar with menu items and user profile
- **TopBar** - Header with greeting and search
- **DashboardLayout** - Complete page template

## 🎨 Storybook

Access 23+ component stories organized by category:
- **Features** - Dashboard and Customer components
- **Layouts** - Navigation, TopBar, DashboardLayout
- **Shared** - Reusable UI components

Run `npm run storybook` to explore all components interactively.

## 🏗 Architecture

The application follows these design principles:

### Data Flow
1. **Filtering** - Real-time search across multiple fields
2. **Sorting** - Client-side sorting with `useMemo` optimization
3. **Pagination** - Smart page calculation with boundary protection

### State Management
- React hooks (`useState`, `useMemo`)
- Props-based composition
- No external state library needed

### Error Handling
- Loading states with spinners
- Error states with retry functionality
- Empty states with helpful messaging

See [architecture.md](./architecture.md) for detailed technical documentation.

## 📦 Mock Data

The app uses realistic mock data with:
- **Customer Data** - 45+ sample customers with varied statuses
- **Dashboard Stats** - Metrics with trend indicators
- **Async Simulation** - 500ms delay to mimic API calls

Easy to replace with real API endpoints.

## 🧪 Development

### Code Organization
- Component-scoped CSS (no global styles)
- TypeScript interfaces for all props
- Consistent file structure: `Component.tsx`, `Component.css`, `Component.stories.tsx`

### Best Practices
- Immutable state updates
- Performance optimization with `useMemo`
- Proper TypeScript typing
- Accessible UI components

## 📝 Recent Updates

- ✅ Removed duplicate components (Sidebar → Navigation, StatsCards → StatsGrid)
- ✅ Added state components (LoadingState, ErrorState, EmptyState)
- ✅ Updated all icons to Lucide React
- ✅ Implemented trend styling (colored arrows/percentages, grey text)
- ✅ Complete Storybook coverage for all components
- ✅ Feature-based architecture implementation

## 📄 License

This project is part of a coding assignment.

---

**Built with ⚡️ Vite + React + TypeScript**

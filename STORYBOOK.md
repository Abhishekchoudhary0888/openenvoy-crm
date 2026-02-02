# Storybook Structure - Updated

## Overview
All Storybook stories have been updated to reflect the latest codebase changes. Removed components (Sidebar, StatsCards) no longer have stories, and new components have complete story coverage.

## Storybook Organization

### 📂 Features

#### **Features/Customers**
- `CustomersTable` - Full table with all states
- `CustomersTableLoading` - Loading state wrapper ✨ NEW
- `CustomersTableError` - Error state wrapper ✨ NEW
- `CustomersTableEmpty` - Empty state wrapper ✨ NEW

#### **Features/Dashboard**
- `StatCard` - Individual stat card with trend indicators
- `StatsGrid` - Grid layout for stat cards

### 📂 Layouts

- `DashboardLayout` - Complete dashboard template
- `Navigation` - Sidebar navigation (updated with SVG logo) ✨ UPDATED
- `TopBar` - Top navigation bar

**Removed:**
- ~~Sidebar~~ - Consolidated into Navigation ✅ DELETED

### 📂 Shared/UI

**Form Components:**
- `Button` - Primary action button
- `Input` - Text input field
- `Select` - Dropdown selection
- `SearchBar` - Search input with icon

**Display Components:**
- `Badge` - Status badges
- `Icon` - Icon wrapper for Lucide React
- `NavItem` - Navigation menu item
- `TableHeader` - Table title and actions
- `TableControls` - Table search and sort controls
- `Pagination` - Table pagination

**State Components:** ✨ NEW
- `LoadingState` - Generic loading state
- `ErrorState` - Generic error state
- `EmptyState` - Generic empty state
- `LoadingSpinner` - Spinner component

**Removed:**
- ~~StatsCards~~ - Removed in favor of StatsGrid ✅ DELETED

## Key Changes

### ✨ New Stories Added

1. **CustomersTableLoading.stories.tsx**
   - Shows loading state with search and sort controls
   - Demonstrates spinner integration

2. **CustomersTableError.stories.tsx**
   - Multiple error scenarios (network, server, generic)
   - Shows retry functionality

3. **CustomersTableEmpty.stories.tsx**
   - Empty state variations
   - With and without search queries

4. **EmptyState.stories.tsx**
   - Generic empty states
   - With icons, descriptions, and actions

5. **ErrorState.stories.tsx**
   - Error display patterns
   - With retry buttons

6. **LoadingState.stories.tsx**
   - Loading indicators
   - Custom messages and sizes

### 🔄 Updated Stories

1. **Navigation.stories.tsx**
   - Added SVG logo prop to all stories
   - Changed title from `Design System/Organisms/Navigation` to `Layouts/Navigation`
   - Removed `logo` from argTypes (now ReactNode, not controllable)

2. **DashboardLayout.stories.tsx**
   - Changed title from `Design System/Templates/DashboardLayout` to `Layouts/DashboardLayout`
   - Already uses correct icon names (`customers`, `computer`, `user`)

3. **StatsGrid.stories.tsx**
   - Already updated with correct icon names
   - Properly demonstrates trend styling (green up, red down, grey text)

4. **StatCard.stories.tsx**
   - Demonstrates new trend styling
   - Shows split coloring (icon + percentage colored, text grey)

### ❌ Deleted Stories

1. **Sidebar.stories.tsx** - Component deleted, consolidated into Navigation
2. **StatsCards.stories.tsx** - Component deleted, use StatsGrid instead

## Story Naming Convention

All stories follow this pattern:
- **Title**: `Category/ComponentName`
- **Categories**: Features, Layouts, Shared
- **Files**: `ComponentName.stories.tsx`

## Running Storybook

```bash
npm run storybook         # Start Storybook dev server on port 6006
npm run build-storybook   # Build static Storybook site
```

## Story Coverage

✅ **All active components have stories**
✅ **All new components have stories**
✅ **All deleted components removed from Storybook**
✅ **All stories use correct icon names**
✅ **All stories reflect latest component props**

## Testing Strategy

Each story provides:
1. **Visual regression testing** - See how components look
2. **Interactive controls** - Test different prop combinations
3. **Documentation** - Auto-generated from TypeScript types
4. **Multiple variants** - Different states and use cases

## Benefits of Current Structure

- ✅ Clear organization by feature/layout/shared
- ✅ Easy to find components
- ✅ Consistent naming across codebase
- ✅ Self-documenting component API
- ✅ Visual testing for all states
- ✅ No orphaned stories for deleted components

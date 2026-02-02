# Architecture Document

## Goals
- Build a production-ready customer dashboard with search, sort, and pagination
- Demonstrate component architecture and code organization best practices
- Create reusable, testable UI components with Storybook documentation
- Implement responsive design that works across mobile, tablet, and desktop
- Maintain type safety throughout the application with TypeScript

## Non-Goals
- Real backend API integration (using mock data instead)
- User authentication or authorization
- CRUD operations (create, update, delete customers)
- Data persistence or state management libraries
- Advanced features like data export or real-time updates

## Tech Stack
- **React 18.2** - Component framework
- **TypeScript 5.3** - Type safety and developer experience
- **Vite 5.0** - Fast build tool and dev server
- **Storybook 7.6** - Component development and documentation
- **Lucide React** - Icon system
- **Vanilla CSS** - Styling (no framework dependencies)

## Project Structure

Feature-based architecture for scalability:

```
src/
├── features/         # Feature modules (dashboard, customers)
├── shared/ui/        # Reusable UI components (Button, Input, etc.)
├── layouts/          # Page layouts (DashboardLayout, Navigation, TopBar)
└── core/             # Types, mock data, utilities
```

**Dependency Rules:**
- `features/` can import from `shared/`, `layouts/`, `core/`
- `shared/` can only import from `core/`
- `layouts/` can import from `shared/`, `core/`, `features/`
- `core/` has no internal dependencies

## Design System

**Component Organization:**
- **Shared UI**: Generic, reusable components (Button, Input, Select, Badge, Icon)
- **Feature Components**: Business-specific components (CustomersTable, StatsGrid)
- **Layout Components**: Page structure (DashboardLayout, Navigation, TopBar)

**Styling Approach:**
- Component-scoped CSS files (no global styles except App.css)
- Consistent design tokens (colors, spacing, typography)
- Mobile-first responsive design with breakpoints
- CSS custom properties for theming

**Key Patterns:**
- Props-based composition
- Consistent file structure: `ComponentName.tsx`, `ComponentName.css`, `ComponentName.stories.tsx`
- TypeScript interfaces for all props

## Data Layer

### Mock Data Strategy
- Mock data defined in `core/data/` (`mockCustomers.ts`, `mockStats.ts`)
- Async `fetchCustomers()` function simulates API calls with 500ms delay
- Centralized data management makes it easy to swap with real API later

### Filtering & Sorting
**Implementation:** Client-side with React hooks and `useMemo` for performance

**Search:**
- Real-time filtering across name, company, and email fields
- Case-insensitive matching
- Updates on every keystroke with debouncing via controlled input

**Sort Options:**
- Newest (default) - by join date
- Name (A-Z) - alphabetical
- Status - Active customers first, then Inactive

**Approach:**
```typescript
const filteredAndSorted = useMemo(() => {
  let result = customers.filter(/* search logic */);
  result = result.sort(/* sort logic */);
  return result;
}, [customers, searchQuery, sortOption]);
```

### Pagination
- Fixed page size: 8 items per page
- Smart page number display with ellipsis for large datasets
- State managed with `useState` hooks
- Resets to page 1 when search/sort changes

**Calculation:**
```typescript
const startIndex = (currentPage - 1) * pageSize;
const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);
```

### Error Handling

**Three States:**
1. **Loading**: Display `LoadingSpinner` during data fetch
2. **Error**: Show error message with retry option
3. **Empty**: Display empty state when no results

**Implementation:**
```typescript
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

try {
  setLoading(true);
  const data = await fetchCustomers();
  setCustomers(data);
} catch (err) {
  setError('Failed to load customers');
} finally {
  setLoading(false);
}
```

**User Experience:**
- Non-blocking errors (show message but don't crash)
- Clear error messages
- Retry functionality for failed requests
- Empty states with helpful messaging

## Component Highlights

### CustomersTable
Full-featured table with integrated search, sort, pagination, and status badges. Handles loading, error, and empty states.

### StatsGrid
Dashboard statistics with trend indicators (↑ green for positive, ↓ red for negative) and avatar grouping for active users.

### DashboardLayout
Responsive layout with collapsible sidebar, mobile menu, and search bar integration.

## Testing Strategy
- Storybook stories for visual testing and documentation
- Interactive controls for testing different component states
- Stories organized by component type (features, shared, layouts)

## Future Enhancements
- Add ESLint/Prettier for code quality
- Implement unit tests with Vitest
- Add E2E tests with Playwright
- Integrate real API endpoints
- Add state management (Context API or Zustand) if complexity grows
- Implement lazy loading for performance optimization

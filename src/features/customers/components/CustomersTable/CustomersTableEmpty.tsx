import React from 'react';
import { SortOption } from '../../../../core/types/types';
import { EmptyState } from '../../../../shared/ui/EmptyState/EmptyState';
import { TableControls } from '../../../../shared/ui/TableControls/TableControls';
import { TableHeader } from '../../../../shared/ui/TableHeader/TableHeader';

interface CustomersTableEmptyProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  sortOptions: { value: string; label: string }[];
}

export const CustomersTableEmpty: React.FC<CustomersTableEmptyProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  sortOptions,
}) => {
  return (
    <div className="customers-table-container">
      <TableHeader title="All Customers" subtitle="Active Members">
        <TableControls
          searchValue={searchQuery}
          onSearchChange={onSearchChange}
          sortValue={sortBy}
          sortOptions={sortOptions}
          onSortChange={(value) => onSortChange(value as SortOption)}
          searchPlaceholder="Search"
        />
      </TableHeader>
      <EmptyState
        icon="📊"
        title="No customers yet"
        description="Get started by adding your first customer."
      />
    </div>
  );
};

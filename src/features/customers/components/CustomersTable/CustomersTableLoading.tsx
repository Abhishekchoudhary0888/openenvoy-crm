import React from 'react';
import { SortOption } from '../../../../core/types/types';
import { LoadingState } from '../../../../shared/ui/LoadingState/LoadingState';
import { TableControls } from '../../../../shared/ui/TableControls/TableControls';
import { TableHeader } from '../../../../shared/ui/TableHeader/TableHeader';

interface CustomersTableLoadingProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  sortOptions: { value: string; label: string }[];
}

export const CustomersTableLoading: React.FC<CustomersTableLoadingProps> = ({
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
      <LoadingState message="Loading customers..." />
    </div>
  );
};

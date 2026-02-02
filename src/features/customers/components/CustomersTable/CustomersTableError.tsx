import React from 'react';
import { ErrorState } from '../../../../shared/ui/ErrorState/ErrorState';
import { TableHeader } from '../../../../shared/ui/TableHeader/TableHeader';

interface CustomersTableErrorProps {
  error: string;
  onRetry: () => void;
}

export const CustomersTableError: React.FC<CustomersTableErrorProps> = ({
  error,
  onRetry,
}) => {
  return (
    <div className="customers-table-container">
      <TableHeader title="All Customers" subtitle="Active Members" />
      <ErrorState message={error} onRetry={onRetry} />
    </div>
  );
};

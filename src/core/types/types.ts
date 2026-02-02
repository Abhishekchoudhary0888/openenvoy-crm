export interface Customer {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: 'Active' | 'Inactive';
}

export type SortOption = 'Newest' | 'Name' | 'Status';


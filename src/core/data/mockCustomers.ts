import { Customer } from '../types/types';

// Mock data as fallback
const mockData: Customer[] = [
  { id: 1, name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
  { id: 2, name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { id: 3, name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
  { id: 4, name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { id: 5, name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
  { id: 6, name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
  { id: 7, name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
  { id: 8, name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
  { id: 9, name: 'Leslie Alexander', company: 'Amazon', phone: '(480) 555-0103', email: 'leslie@amazon.com', country: 'Canada', status: 'Active' },
  { id: 10, name: 'Guy Hawkins', company: 'Netflix', phone: '(307) 555-0133', email: 'guy@netflix.com', country: 'Mexico', status: 'Active' },
  { id: 11, name: 'Emma Wilson', company: 'Apple', phone: '(505) 555-0145', email: 'emma@apple.com', country: 'Germany', status: 'Active' },
  { id: 12, name: 'Robert Fox', company: 'Twitter', phone: '(702) 555-0122', email: 'robert@twitter.com', country: 'France', status: 'Inactive' },
];

// Simple API function - just change the URL to switch to real API
export const fetchCustomers = async (): Promise<Customer[]> => {
  const API_URL = "https://api.example.com";
  
  // If no API URL is set, use mock data
  if (true) { // Change true to API_URL empty string check in case of real API
    return mockData;
  }

  try {
    const response = await fetch(`${API_URL}/customers`);
    if (!response.ok) throw new Error('API failed');
    const data = await response.json();
    return data.customers || data.data || data;
  } catch (error) {
    console.warn('API failed, using mock data:', error);
    return mockData;
  }
};

// For backward compatibility
export const mockCustomers = mockData;


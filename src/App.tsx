import './App.css';

import { useEffect, useState } from 'react';

import { Customer } from './core/types/types';
import { CustomersTable } from './features/customers/components/CustomersTable/CustomersTable';
import { Navigation } from './layouts/Navigation/Navigation';
import { StatsGrid } from './features/dashboard/components/StatsGrid/StatsGrid';
import { TopBar } from './layouts/TopBar/TopBar';
import { fetchCustomers } from './core/data/mockCustomers';
import { mockStats } from './core/data/mockStats';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        setLoading(true);
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (err) {
        setError('Failed to load customers');
      } finally {
        setLoading(false);
      }
    };
    
    loadCustomers();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'product', label: 'Product' },
    { icon: 'customers', label: 'Customers', active: true },
    { icon: 'income', label: 'Income' },
    { icon: 'promote', label: 'Promote' },
    { icon: 'help', label: 'Help' },
  ];

  const user = {
    avatar: 'https://i.pravatar.cc/40?img=33',
    name: 'Evano',
    role: 'Project Manager',
  };

  const logo = (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1 3.5C13.6523 3.18377 14.3477 3.18377 14.9 3.5L22.5263 8.12885C23.0786 8.44508 23.4263 9.03604 23.4263 9.67949V18.3205C23.4263 18.964 23.0786 19.5549 22.5263 19.8712L14.9 24.5C14.3477 24.8162 13.6523 24.8162 13.1 24.5L5.47372 19.8712C4.92144 19.5549 4.57372 18.964 4.57372 18.3205V9.67949C4.57372 9.03604 4.92144 8.44508 5.47372 8.12885L13.1 3.5Z" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );

  return (
    <div className="app">
      <button
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`mobile-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      <Navigation
        items={navItems}
        logo={logo}
        user={user}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
      
      <main className="main-content">
        <TopBar />
        <StatsGrid stats={mockStats} />
        <CustomersTable
          customers={customers}
          isLoading={loading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import { usePathname } from 'next/navigation';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar', () => {
  const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    // Set default pathname to home
    mockUsePathname.mockReturnValue('/');
  });

  it('renders the navbar with logo and navigation links', () => {
    render(<Navbar />);
    
    // Check if logo is rendered
    const logo = screen.getByText('Elite Cricket Academy');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');

    // Check if navigation links are rendered
    const navLinks = ['Home', 'About', 'Programs', 'Coaches', 'Facilities'];
    navLinks.forEach(linkText => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
    });
  });

  it('highlights the active link based on the current route', () => {
    // Set the current path to '/programs'
    mockUsePathname.mockReturnValue('/programs');
    
    render(<Navbar />);
    
    // Check if the Programs link is active
    const activeLink = screen.getByText('Programs').closest('a');
    expect(activeLink).toHaveClass('border-yellow-500', 'text-gray-900');
    
    // Check if other links are not active
    const inactiveLink = screen.getByText('About').closest('a');
    expect(inactiveLink).not.toHaveClass('border-yellow-500');
  });

  it('shows login/register buttons when not authenticated', () => {
    render(<Navbar />);
    
    const loginButton = screen.getByText('Login');
    const registerButton = screen.getByText('Register');
    
    expect(loginButton).toBeInTheDocument();
    expect(loginButton.closest('a')).toHaveAttribute('href', '/login');
    
    expect(registerButton).toBeInTheDocument();
    expect(registerButton.closest('a')).toHaveAttribute('href', '/register');
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    
    // Mobile menu button should be visible on small screens
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    
    // Menu should be closed by default
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    
    // Click to open menu
    fireEvent.click(menuButton);
    
    // Menu should be open now
    expect(screen.getByRole('menu')).toBeInTheDocument();
    
    // Click to close menu
    fireEvent.click(menuButton);
    
    // Menu should be closed again
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes mobile menu when a link is clicked', () => {
    // Set up a longer viewport to ensure mobile menu is used
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    
    render(<Navbar />);
    
    // Open menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(menuButton);
    
    // Click on a link
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    
    // Menu should be closed
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});

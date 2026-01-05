import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the footer with the correct sections', () => {
    render(<Footer />);
    
    // Check for the logo/header
    expect(screen.getByText('Elite Cricket Academy')).toBeInTheDocument();
    
    // Check section titles
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    
    // Check for some key links
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('About Us')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Junior Academy')).toHaveAttribute('href', '/programs/junior');
    
    // Check contact information
    expect(screen.getByText('123 Cricket Ground Rd')).toBeInTheDocument();
    expect(screen.getByText('info@elitecricket.com')).toHaveAttribute('href', 'mailto:info@elitecricket.com');
    
    // Check copyright notice
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Elite Cricket Academy. All rights reserved.`)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    
    // Quick Links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Coaches')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    
    // Programs
    expect(screen.getByText('Junior Academy')).toBeInTheDocument();
    expect(screen.getByText('Advanced Training')).toBeInTheDocument();
    expect(screen.getByText('One-on-One Coaching')).toBeInTheDocument();
    expect(screen.getByText('Summer Camps')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    // Check for social media links
    const socialLinks = screen.getAllByRole('link', { name: /facebook|twitter|instagram|youtube/i });
    expect(socialLinks.length).toBeGreaterThan(0);
    
    // Check if social media links have the correct structure
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('aria-label');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders contact information correctly', () => {
    render(<Footer />);
    
    // Check address
    expect(screen.getByText('123 Cricket Ground Rd')).toBeInTheDocument();
    expect(screen.getByText('Mumbai, 400001')).toBeInTheDocument();
    
    // Check phone and email
    const phoneLink = screen.getByText('Phone: +91 98765 43210');
    const emailLink = screen.getByText('Email: info@elitecricket.com');
    
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+919876543210');
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:info@elitecricket.com');
  });
});

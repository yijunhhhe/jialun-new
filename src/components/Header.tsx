import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Factory, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const DesktopNavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) =>
        `text-lg transition-colors ${
          isActive 
            ? 'text-blue-600 font-semibold' 
            : 'text-gray-600 hover:text-blue-600'
        }`
      }
    >
      {children}
    </NavLink>
  );

  const MobileNavItem = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavLink 
      to={to} 
      onClick={closeMenu}
      className={({ isActive }) =>
        `block w-full px-4 py-2 text-lg transition-colors ${
          isActive 
            ? 'text-blue-600 font-semibold bg-blue-50' 
            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-blue-600" />
              <span className="text-xl md:text-2xl font-bold text-gray-800">Jialun R&D</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <DesktopNavItem to="/">Home</DesktopNavItem>
              <DesktopNavItem to="/about">About Us</DesktopNavItem>
              <DesktopNavItem to="/products">Products</DesktopNavItem>
              <DesktopNavItem to="/contact">Contact</DesktopNavItem>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden fixed w-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-20' 
            : 'opacity-0 -translate-y-full invisible'
        }`}
      >
        <nav className="flex flex-col py-2 border-t">
          <MobileNavItem to="/">Home</MobileNavItem>
          <MobileNavItem to="/about">About Us</MobileNavItem>
          <MobileNavItem to="/products">Products</MobileNavItem>
          <MobileNavItem to="/contact">Contact</MobileNavItem>
        </nav>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-30 ${
          isMenuOpen 
            ? 'opacity-50 md:opacity-0' 
            : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}
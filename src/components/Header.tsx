import React from 'react';
import { NavLink } from 'react-router-dom';
import { Factory } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Factory className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Jialun R&D Technology</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `text-lg ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
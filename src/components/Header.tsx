import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Menu, X, Home, Info, Package, Handshake, Store } from 'lucide-react';
import OldLogo from '../assets/oldlogo1.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-brand-primary backdrop-blur-sm sticky top-0 z-50 border-b border-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={OldLogo} 
                alt="Rajahmundry Rose Milk" 
                className="h-24 w-24 object-contain"
              />
              <span className="text-2xl font-bold text-white font-serif">Rajahmundry Rose Milk</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation - Aligned to right */}
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="flex items-center text-white hover:text-brand-secondary transition-colors">
                  <Home className="h-4 w-4 mr-2" />
                  HOME
                </Link>
                <Link to="/about" className="flex items-center text-white hover:text-brand-secondary transition-colors">
                  <Info className="h-4 w-4 mr-2" />
                  ABOUT US
                </Link>
                <Link to="/products" className="flex items-center text-white hover:text-brand-secondary transition-colors">
                  <Package className="h-4 w-4 mr-2" />
                  PRODUCTS
                </Link>
                <Link to="/franchise" className="flex items-center text-white hover:text-brand-secondary transition-colors">
                  <Handshake className="h-4 w-4 mr-2" />
                  FRANCHISE
                </Link>
              </nav>
              
              {/* Find Stores Button - Hidden on mobile */}
              <Link to="/stores" className="hidden md:flex bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium items-center">
                <MapPin className="h-4 w-4 mr-2" />
                STORES
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-brand-primary/80 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <img 
                src={OldLogo} 
                alt="Rajahmundry Rose Milk" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-lg font-bold text-brand-primary font-serif">Rose Milk</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6 text-text-secondary" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="flex items-center text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                <Home className="h-5 w-5 mr-3" />
                HOME
              </Link>
              <Link 
                to="/about" 
                className="flex items-center text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                <Info className="h-5 w-5 mr-3" />
                ABOUT US
              </Link>
              <Link 
                to="/products" 
                className="flex items-center text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                <Package className="h-5 w-5 mr-3" />
                PRODUCTS
              </Link>
              <Link 
                to="/franchise" 
                className="flex items-center text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                <Handshake className="h-5 w-5 mr-3" />
                FRANCHISE
              </Link>
              <Link 
                to="/stores" 
                className="flex items-center text-lg font-medium text-text-secondary hover:text-brand-primary transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                <Store className="h-5 w-5 mr-3" />
                STORES
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
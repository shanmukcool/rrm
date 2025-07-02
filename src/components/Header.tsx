import React from 'react';
import { Link } from 'react-router-dom';
import { Milk, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Milk className="h-8 w-8 text-rose-400" />
            <span className="text-2xl font-bold text-rose-600 font-serif">Rajahmundry Rose Milk</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-rose-600 transition-colors">Products</Link>
            <a href="#story" className="text-gray-700 hover:text-rose-600 transition-colors">Our Story</a>
            <a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</a>
          </nav>
          <Link to="/stores" className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors font-medium flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Find Stores
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
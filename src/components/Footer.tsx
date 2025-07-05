import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Facebook, Phone } from 'lucide-react';
import TrademarkImage from '../assets/trademark.png';
import OldLogo from '../assets/oldlogo1.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src={OldLogo} 
                alt="Rajahmundry Rose Milk" 
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-bold text-white font-serif">Rajahmundry Rose Milk</span>
            </Link>
            <p className="text-white/80 mb-6">
              Preserving tradition, delivering joy since 1949.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/rajahmundryrosemilkoffl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/rosemilk1950/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="tel:+919347149809" 
                className="text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/products" className="hover:text-white transition-colors">Rose Milk</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Semia</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Rose Kova</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/franchise" className="hover:text-white transition-colors">Franchise Opportunities</Link></li>
              <li><Link to="/stores" className="hover:text-white transition-colors">Find Store</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a519b32f8c3b%3A0x997e0113d2b11ac7!2sRajahmundry%20Rose%20Milk%20Center%20-%2075%20years!5e1!3m2!1sen!2sin!4v1751438964219!5m2!1sen!2sin" 
                width="100%" 
                height="200" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajahmundry Rose Milk Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <img 
            src={TrademarkImage} 
            alt="Rajahmundry Rose Milk Trademark" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
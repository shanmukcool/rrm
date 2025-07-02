import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Search,
  CheckCircle,
  Store,
  Truck,
  Users,
  ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import SignatureStore from '../assets/s1signaturestore.jpg';
import HeadBranch from '../assets/s2headbranch.jpg';
import ExperienceStore from '../assets/s3experiencestore.jpg';

const StoresPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stores = [
    {
      id: 1,
      name: 'Signature store Est. 1950',
      address: 'Main Rd, beside Bommana Rajkumar, opposite Bombay Dyeing, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '6:00 AM - 10:00 PM',
      features: ['Original Location', 'Fresh Made Daily', 'Takeaway', 'Seating Available'],
      type: 'flagship',
      image: SignatureStore,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a519b32f8c3b%3A0x997e0113d2b11ac7!2sRajahmundry%20Rose%20Milk%20Center%20-%2075%20years!5e1!3m2!1sen!2sin!4v1751438964219!5m2!1sen!2sin",
      swiggyLink: "https://www.swiggy.com/restaurants/rajahmundry-rose-milk-danavaipeta-rajahmundry-123456",
      zomatoLink: "https://www.zomato.com/rajahmundry/rajahmundry-rose-milk-danavaipeta"
    },
    {
      id: 2,
      name: 'Family cafe Est. 2023',
      address: '8-24-99, Main Rd, beside chamber of commerce, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '7:00 AM - 9:00 PM',
      features: ['Quick Service', 'Takeaway Only', 'Fresh Stock', 'Bus Stand Location'],
      type: 'express',
      image: HeadBranch,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5b061d69d77%3A0x9469a89076b7c27c!2srajahmundry%20rosemilk%20since%201950%20-%20HEADBRANCH!5e1!3m2!1sen!2sin!4v1751441019914!5m2!1sen!2sin",
      swiggyLink: "https://www.swiggy.com/restaurants/rose-milk-corner-kotipalli-rajahmundry-789012",
      zomatoLink: "https://www.zomato.com/rajahmundry/rose-milk-corner-kotipalli"
    },
    {
      id: 3,
      name: 'Experience center Est. 2025',
      address: '9-20-3, Main Rd, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '8:00 AM - 10:00 PM',
      features: ['Air Conditioned', 'Family Seating', 'All Products', 'Parking Available'],
      type: 'premium',
      image: ExperienceStore,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5b0505d234d%3A0x21dda89c693f9ee5!2sRajahmundry%20Rosemilk%201950%20-%20Experience%20Center!5e1!3m2!1sen!2sin!4v1751441133817!5m2!1sen!2sin",
      swiggyLink: "https://www.swiggy.com/restaurants/heritage-rose-milk-t-nagar-rajahmundry-345678",
      zomatoLink: "https://www.zomato.com/rajahmundry/heritage-rose-milk-t-nagar"
    }
  ];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStoreTypeColor = (type) => {
    switch (type) {
      case 'flagship': return 'bg-rose-100 text-rose-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'express': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStoreTypeIcon = (type) => {
    switch (type) {
      case 'flagship': return Store;
      case 'premium': return Users;
      case 'express': return Truck;
      default: return Store;
    }
  };

  // SVG Components for Delivery Logos
  const SwiggyLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="white"/>
      <path d="M8 7h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2z" fill="#FF6B35"/>
      <path d="M12 10.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" fill="white"/>
      <path d="M9 12h1.5M13.5 12H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const ZomatoLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="white"/>
      <path d="M6 8h12c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2z" fill="#E23744"/>
      <path d="M8 11h8M10 13h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="1" fill="white"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-600 font-medium">Our Stores</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Visit Our Stores in Rajahmundry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the authentic taste at our three carefully curated locations across Rajahmundry, each offering the original rose milk recipe since 1949.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by store name or area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Store Stats */}
      <section className="py-12 bg-gradient-to-r from-rose-600 to-rose-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-rose-100">Stores in Rajahmundry</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-rose-100">Years of Legacy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-rose-100">Authentic Recipe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredStores.map((store, index) => {
              const StoreIcon = getStoreTypeIcon(store.type);
              return (
                <div key={store.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Store Image */}
                    <div className="relative">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStoreTypeColor(store.type)} shadow-lg backdrop-blur-sm`}>
                          {store.type.charAt(0).toUpperCase() + store.type.slice(1)} Store
                        </span>
                      </div>
                    </div>

                    {/* Store Details */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <StoreIcon className="h-6 w-6 text-rose-600 mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900 font-serif">{store.name}</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Contact Info */}
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{store.address}</p>
                          </div>

                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                            <a href={`tel:${store.phone}`} className="text-rose-600 hover:text-rose-700 transition-colors font-medium">
                              {store.phone}
                            </a>
                          </div>

                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{store.hours}</span>
                          </div>
                        </div>

                        {/* Google Maps - Smaller Size */}
                        <div className="h-48 rounded-xl overflow-hidden">
                          <iframe
                            src={store.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map location for ${store.name}`}
                          ></iframe>
                        </div>
                      </div>

                      {/* Store Features */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Store Features</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {store.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-rose-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons and Delivery Links */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <button className="w-full bg-rose-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-rose-700 transition-colors inline-flex items-center justify-center">
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </button>
                          <a href={`tel:${store.phone}`} className="w-full border border-rose-600 text-rose-600 py-3 px-4 rounded-full font-semibold hover:bg-rose-50 transition-colors inline-flex items-center justify-center">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Store
                          </a>
                        </div>

                        {/* Delivery Links with Better Logos */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Online</h3>
                          <div className="space-y-3">
                            <a
                              href={store.swiggyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-semibold shadow-md hover:shadow-lg"
                            >
                              <SwiggyLogo />
                              <span className="ml-3">Order on Swiggy</span>
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                            <a
                              href={store.zomatoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-semibold shadow-md hover:shadow-lg"
                            >
                              <ZomatoLogo />
                              <span className="ml-3">Order on Zomato</span>
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No stores found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or browse all our locations.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
              >
                Show All Stores
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Franchise Information */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Interested in Opening a Store?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our growing family of franchise partners and bring the authentic taste of Rajahmundry Rose Milk to your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition-colors">
              Franchise Inquiry
            </button>
            <button className="border border-rose-600 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoresPage;
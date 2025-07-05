import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ExternalLink,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredGrid from '../components/StaggeredGrid';
import FloatingElements from '../components/FloatingElements';
import PageTransition from '../components/PageTransition';

import SignatureStore from '../assets/s1signaturestore.jpg';
import HeadBranch from '../assets/s2headbranch.jpg';
import ExperienceStore from '../assets/s3experiencestore.jpg';

const StoresPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const stores = [
    {
      id: 1,
      name: 'Signature store Est. 1950',
      address:
        'Main Rd, beside Bommana Rajkumar, opposite Bombay Dyeing, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '6:00 AM - 10:00 PM',
      features: [
        'Original Location',
        'Fresh Made Daily',
        'Takeaway',
        'Seating Available',
      ],
      type: 'flagship',
      image: SignatureStore,
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a519b32f8c3b%3A0x997e0113d2b11ac7!2sRajahmundry%20Rose%20Milk%20Center%20-%2075%20years!5e1!3m2!1sen!2sin!4v1751438964219!5m2!1sen!2sin',
      swiggyLink:
        'https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250',
      zomatoLink:
        'http://zoma.to/r/20698094',
    },
    {
      id: 2,
      name: 'Family cafe Est. 2023',
      address:
        '8-24-99, Main Rd, beside chamber of commerce, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '7:00 AM - 9:00 PM',
      features: [
        'Quick Service',
        'Takeaway Only',
        'Fresh Stock',
        'Bus Stand Location',
      ],
      type: 'express',
      image: HeadBranch,
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5b061d69d77%3A0x9469a89076b7c27c!2srajahmundry%20rosemilk%20since%201950%20-%20HEADBRANCH!5e1!3m2!1sen!2sin!4v1751441019914!5m2!1sen!2sin',
      swiggyLink:
        'https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250',
      zomatoLink:
        'http://zoma.to/r/20698094',
    },
    {
      id: 3,
      name: 'Experience center Est. 2025',
      address:
        '9-20-3, Main Rd, Mangalavaripeta, Rajamahendravaram, Andhra Pradesh 533101',
      phone: '+91 9347149809',
      hours: '8:00 AM - 10:00 PM',
      features: [
        'Air Conditioned',
        'Family Seating',
        'All Products',
        'Parking Available',
      ],
      type: 'premium',
      image: ExperienceStore,
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.5829052106255!2d81.7688253222403!3d17.00321895318575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5b0505d234d%3A0x21dda89c693f9ee5!2sRajahmundry%20Rosemilk%201950%20-%20Experience%20Center!5e1!3m2!1sen!2sin!4v1751441133817!5m2!1sen!2sin',
      swiggyLink:
        'https://www.swiggy.com/city/rajahmundry/rajahmundry-rosemilk-head-branch-east-godavari-dist-main-road-rest722250',
      zomatoLink:
        'http://zoma.to/r/20698094',
    },
  ];

  const filteredStores = stores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStoreTypeColor = (type) => {
    switch (type) {
      case 'flagship':
        return 'bg-brand-primary text-white';
      case 'premium':
        return 'bg-brand-secondary text-brand-primary';
      case 'express':
        return 'bg-brand-secondary text-brand-primary';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStoreTypeIcon = (type) => {
    switch (type) {
      case 'flagship':
        return Store;
      case 'premium':
        return Users;
      case 'express':
        return Truck;
      default:
        return Store;
    }
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=17.0023790000,81.7708700000', '_blank');
  };

  const handleFranchiseInquiry = () => {
    navigate('/franchise');
  };

  const stats = [
    { number: "3", label: "Stores in Rajahmundry" },
    { number: "75+", label: "Years of Legacy" },
    { number: "100%", label: "Authentic Recipe" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-secondary">
        <Header />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center text-sm text-text-secondary">
            <Link to="/" className="hover:text-brand-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-primary font-medium">Our Stores</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 font-serif">
                Visit Our Stores in Rajahmundry
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Experience the authentic taste at our three carefully curated
                locations across Rajahmundry, each offering the original rose milk
                recipe since 1949.
              </p>
            </AnimatedSection>

            {/* Search */}
            <AnimatedSection animation="fadeUp" delay={0.2} className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <motion.input
                  type="text"
                  placeholder="Search by store name or area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Store Stats */}
        <section className="py-12 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggeredGrid
              className="grid md:grid-cols-3 gap-8 text-center"
              staggerDelay={0.1}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* Store Listings */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {filteredStores.map((store, index) => {
                const StoreIcon = getStoreTypeIcon(store.type);
                return (
                  <AnimatedSection 
                    key={store.id}
                    animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                    delay={0.1 * index}
                  >
                    <motion.div
                      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      whileHover={{ 
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {/* Responsive Layout */}
                      <div className="flex flex-col lg:flex-row">
                        {/* Portrait Image Container */}
                        <div className="w-full lg:w-96 flex-shrink-0 overflow-hidden">
                          <div className="h-full relative aspect-[3/4]">
                            <motion.img
                              src={store.image}
                              alt={store.name}
                              className="w-full h-full object-cover rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="absolute top-6 left-6">
                              <motion.span
                                className={`px-4 py-2 rounded-full text-sm font-medium ${getStoreTypeColor(
                                  store.type
                                )} shadow-lg backdrop-blur-sm`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {store.type.charAt(0).toUpperCase() +
                                  store.type.slice(1)}{' '}
                                Store
                              </motion.span>
                            </div>
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 p-8">
                          {/* Store Header */}
                          <div className="flex items-center mb-6">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <StoreIcon className="h-6 w-6 text-brand-primary mr-3" />
                            </motion.div>
                            <h2 className="text-2xl font-bold text-text-primary font-serif">
                              {store.name}
                            </h2>
                          </div>

                          {/* Store Info Grid */}
                          <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Contact Details */}
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                                <p className="text-text-secondary text-sm leading-relaxed">{store.address}</p>
                              </div>

                              <motion.div 
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                <a
                                  href={`tel:${store.phone}`}
                                  className="text-brand-primary hover:text-black transition-colors font-medium"
                                >
                                  {store.phone}
                                </a>
                              </motion.div>

                              <div className="flex items-center">
                                <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-text-secondary">{store.hours}</span>
                              </div>
                            </div>

                            {/* Map */}
                            <motion.div 
                              className="h-48 rounded-xl overflow-hidden bg-gray-100"
                              whileHover={{ scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
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
                            </motion.div>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                            <h3 className="text-lg font-semibold text-text-primary mb-4">
                              Store Features
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {store.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-center"
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <CheckCircle className="h-4 w-4 text-brand-primary mr-2 flex-shrink-0" />
                                  <span className="text-text-secondary text-sm">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Primary Actions */}
                            <div className="space-y-3">
                              <motion.button 
                                onClick={handleGetDirections}
                                className="w-full bg-brand-primary text-white py-3 px-4 rounded-full font-semibold hover:bg-black transition-colors inline-flex items-center justify-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Navigation className="h-4 w-4 mr-2" />
                                Get Directions
                              </motion.button>
                              <motion.a
                                href={`tel:${store.phone}`}
                                className="w-full border border-brand-primary text-brand-primary py-3 px-4 rounded-full font-semibold hover:bg-brand-secondary transition-colors inline-flex items-center justify-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Phone className="h-4 w-4 mr-2" />
                                Call Store
                              </motion.a>
                            </div>

                            {/* Delivery Links */}
                            <div>
                              <h3 className="text-lg font-semibold text-text-primary mb-4">
                                Order Online
                              </h3>
                              <div className="grid grid-cols-2 gap-2">
                                <motion.a
                                  href={store.swiggyLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center px-3 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-semibold shadow-md hover:shadow-lg text-sm"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span>SWIGGY</span>
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </motion.a>
                                <motion.a
                                  href={store.zomatoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center px-3 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors font-semibold shadow-md hover:shadow-lg text-sm"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span>ZOMATO</span>
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </motion.a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>

            {filteredStores.length === 0 && (
              <AnimatedSection animation="fadeUp" className="text-center py-12">
                <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No stores found
                </h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search or browse all our locations.
                </p>
                <motion.button
                  onClick={() => setSearchTerm('')}
                  className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show All Stores
                </motion.button>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* Franchise Information */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-4xl font-bold text-text-primary mb-6 font-serif">
                Interested in Opening a Store?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Join our growing family of franchise partners and bring the
                authentic taste of Rajahmundry Rose Milk to your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  onClick={handleFranchiseInquiry}
                  className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Franchise Inquiry
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default StoresPage;
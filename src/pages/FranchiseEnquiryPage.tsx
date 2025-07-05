import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, User, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import PageTransition from '../components/PageTransition';

const FranchiseEnquiryPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    proposedCity: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create email body
    const emailBody = `Name: ${formData.fullName}
Phone: ${formData.phoneNumber}
Proposed City: ${formData.proposedCity || 'Not specified'}`;

    // Create mailto link
    const mailtoLink = `mailto:myemail@gmail.com?subject=${encodeURIComponent('I would like to open a franchise')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client in new tab/window
    window.open(mailtoLink, '_blank');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-secondary">
        <Header />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-text-secondary">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-primary font-medium">Franchise Enquiry</span>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <AnimatedSection animation="slideLeft">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-text-secondary hover:text-brand-primary transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to About Us
                </Link>
              </motion.div>
            </AnimatedSection>

            {/* Header */}
            <AnimatedSection animation="fadeUp" className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4 font-serif">
                Want to Be a Franchise Owner?
              </h1>
              <p className="text-xl text-text-secondary">
                Fill out your details and we'll get back to you soon.
              </p>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <motion.div 
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-12"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-text-primary mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <motion.input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-text-primary placeholder-gray-500"
                        placeholder="Enter your full name"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-text-primary mb-3">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <motion.input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-text-primary placeholder-gray-500"
                        placeholder="Enter your phone number"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                  </div>

                  {/* Proposed City */}
                  <div>
                    <label htmlFor="proposedCity" className="block text-sm font-semibold text-text-primary mb-3">
                      Proposed City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <motion.input
                        type="text"
                        id="proposedCity"
                        name="proposedCity"
                        value={formData.proposedCity}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 text-text-primary placeholder-gray-500"
                        placeholder="Enter your proposed city (optional)"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center justify-center text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </motion.button>

                  {/* Required Fields Note */}
                  <p className="text-sm text-text-secondary text-center mt-4">
                    * Required fields
                  </p>
                </form>
              </motion.div>
            </AnimatedSection>

            {/* Additional Info */}
            <AnimatedSection animation="fadeUp" delay={0.4} className="mt-12 text-center">
              <motion.div 
                className="bg-white rounded-2xl p-6 border border-gray-100"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Why Partner With Us?
                </h3>
                <p className="text-text-secondary">
                  Join a 75-year legacy with proven business model, comprehensive training, 
                  and ongoing support to help you succeed.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default FranchiseEnquiryPage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  MapPin,
  Instagram,
  Milk,
  Coffee,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredGrid from '../components/StaggeredGrid';
import FloatingElements from '../components/FloatingElements';
import PageTransition from '../components/PageTransition';

import OldLogo from '../assets/oldlogo1.png';
import RoseMilkSyrup from '../assets/p7rosemilksyrup.png';
import RoseMilkImage from '../assets/rosemilk.png';
import RosekovaImage from '../assets/rosekova.png';
import semia from '../assets/semia.png';
import Plate from '../assets/plate.png';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      name: "Rose Milk",
      description: "A chilled, creamy blend of milk and rose essence — smooth, fragrant, and nostalgic in every sip. Still made just the way Sri Gulab intended.",
      badge: "The signature. The legend.",
      image: RoseMilkImage
    },
    {
      name: "Semia",
      description: "Our classic rose milk swirled with soft vermicelli – silky, satisfying, and soothing to the soul.",
      badge: "The comfort drink reimagined.",
      image: semia
    },
    {
      name: "Rose Kova",
      description: "A decadent fusion of traditional kova with the fragrant sweetness of rose milk. Rich, creamy, and unforgettable.",
      badge: "Premium indulgence.",
      image: RosekovaImage
    }
  ];

  const testimonials = [
    {
      text: "Takes me back to my childhood summers in Rajahmundry. It's more than a drink — it's a memory.",
      author: "Priya R., Vizag"
    },
    {
      text: "The flavor, the texture, the chill — every detail is perfect.",
      author: "Arjun M., Hyderabad"
    },
    {
      text: "Love that this is finally available in ready-to-drink form. My entire family loves it.",
      author: "Sneha K., Bangalore"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-secondary">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <FloatingElements />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-4 gap-8 items-center">
              {/* Left side - Logo */}
              <AnimatedSection animation="scale" delay={0.2}>
                <div className="flex justify-center lg:justify-start">
                  <div className="w-full max-w-xs flex items-center justify-center">
                    <motion.img
                      src={OldLogo}
                      alt="Rajahmundry Rose Milk"
                      className="w-full h-auto object-contain drop-shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.5 }
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Right side - Content */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <AnimatedSection animation="fadeUp" delay={0.3}>
                  <motion.div 
                    className="inline-flex items-center bg-brand-primary rounded-full px-4 py-2 mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Star className="h-4 w-4 text-white mr-2" />
                    <span className="text-white font-medium">
                      Rajahmundry's Iconic Dessert Drink Since 1950
                    </span>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection animation="fadeUp" delay={0.4}>
                  <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 font-serif">
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      The Original
                    </motion.span>
                    <motion.span 
                      className="block text-brand-primary"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Rajahmundry Rose Milk
                    </motion.span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fadeUp" delay={0.6}>
                  <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
                    Refreshing. Nostalgic. Irresistible. Taste the timeless rose
                    milk recipe that has captured hearts for over 75 years — now
                    beautifully bottled for a new generation.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeUp" delay={0.8}>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                    {[
                      { icon: CheckCircle, text: "Delivered Fresh" },
                      { icon: CheckCircle, text: "100% Authentic" },
                      { icon: CheckCircle, text: "Ready to Sip" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center text-text-secondary"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <item.icon className="h-5 w-5 text-brand-primary mr-2" />
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeUp" delay={1.0}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/stores"
                      className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>Find Stores</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideLeft">
                <div>
                  <div className="flex items-center mb-6">
                    <Clock className="h-6 w-6 text-brand-primary mr-3" />
                    <span className="text-brand-primary font-semibold text-lg">
                      Our Story
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-serif">
                    From a Street Corner in 1950 to Homes Across India
                  </h2>

                  <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                    In the bustling town of Rajahmundry, Shri Gubba Simhachalam
                    created something unforgettable — a rose milk recipe so unique
                    it became a legacy. Infused with rich heritage and unmatched
                    craftsmanship, it turned passersby into lifelong fans.
                  </p>

                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Today, we've preserved every bit of that magic — from the flavor
                    to the feeling — and brought it to your doorstep, in
                    ready-to-drink cups.
                  </p>

                  <StaggeredGrid
                    className="space-y-4 mb-8"
                    staggerDelay={0.1}
                  >
                    {[
                      "Heritage recipe passed down through 3 generations",
                      "Made fresh with real rose essence",
                      "A drink that celebrates India's timeless taste traditions"
                    ].map((text, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{text}</span>
                      </div>
                    ))}
                  </StaggeredGrid>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to="/about" 
                      className="text-brand-primary font-semibold inline-flex items-center hover:text-black transition-colors"
                    >
                      <span>Learn More About Our Legacy</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={0.2}>
                <div className="relative">
                  <div className="p-8 transform rotate-0 hover:rotate-0 transition-transform duration-300 relative min-h-[400px]">
                    <motion.img
                      src={RoseMilkSyrup}
                      alt="Rajahmundry Rose Milk - Modern Bottle"
                      className={`absolute inset-0 w-full h-full object-contain drop-shadow-sm transition-opacity duration-300 ease-in-out ${
                        currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    
                    <motion.img
                      src={Plate}
                      alt="75 years plaque"
                      className={`absolute inset-0 w-full h-full object-contain drop-shadow-sm transition-opacity duration-300 ease-in-out ${
                        currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Products Preview Section */}
        <section id="products" className="py-20 bg-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-serif">
                Rajahmundry's Finest, Now Ready-to-Drink
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Each product crafted with the same love and attention that made us
                famous over seven decades ago.
              </p>
            </AnimatedSection>

            <StaggeredGrid
              className="grid md:grid-cols-3 gap-8 mb-12"
              staggerDelay={0.2}
            >
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="text-center mb-6">
                    <motion.div 
                      className="w-64 h-64 mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2 font-serif">
                      {product.name}
                    </h3>
                    <p className="text-brand-primary font-semibold">
                      {product.badge}
                    </p>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </StaggeredGrid>

            <AnimatedSection animation="fadeUp" className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-colors inline-flex items-center"
                >
                  <span>View All Products</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-brand-primary mr-3" />
                <span className="text-brand-primary font-semibold text-lg">
                  What People Are Saying
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary font-serif">
                Loved Across Generations
              </h2>
            </AnimatedSection>

            <StaggeredGrid
              className="grid md:grid-cols-3 gap-8"
              staggerDelay={0.15}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-brand-secondary rounded-2xl p-8 border border-gray-100"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                      >
                        <Star className="h-5 w-5 text-brand-primary fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <blockquote className="text-text-secondary mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="text-brand-primary font-semibold">
                    — {testimonial.author}
                  </cite>
                </motion.div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default HomePage;
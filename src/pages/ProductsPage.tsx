import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Coffee, Award, ArrowLeft, Star, CheckCircle, Clock, Thermometer, Droplets, Wheat, Crown, MapPin, Filter, Sparkles, Leaf, Snowflake, IceCream, GlassWater } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredGrid from '../components/StaggeredGrid';
import FloatingElements from '../components/FloatingElements';
import PageTransition from '../components/PageTransition';

import RoseMilkImage from '../assets/p1rosemilk.png';
import AlmondRichMilkImage from '../assets/p2almondrichmilk.png';
import PistachioRichMilkImage from '../assets/p3pistachiorichmilk.png';
import CocoaImage from '../assets/p4cocoa.png';
import RosekovaImage from '../assets/p5rosekova.png';
import AncientFaloodaImage from '../assets/p6ancientfalooda.png';
import RoseMilkSyrupImage from '../assets/p7rosemilksyrup.png';
import RoseWaterImage from '../assets/p8rosewater.png';
import IndianChocolateImage from '../assets/p9indianchocolate.png';
import PinkRoseImage from '../assets/p10pinkrose.png';
import WhiteRoseImage from '../assets/p11whiterose.png';
import SaffronPistachioImage from '../assets/p12saffronpistachio.png';

const ProductsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All', icon: Star },
    { id: 'drinks', name: 'Drinks', icon: GlassWater },
    { id: 'fusions', name: 'Fusions', icon: Coffee },
    { id: 'ice-creams', name: 'Ice Creams', icon: IceCream },
    { id: 'essentials', name: 'Essentials', icon: Leaf }
  ];

  const products = {
    essentials: [
      {
        id: 'rose-water',
        name: 'Rose Water',
        description: 'Extracted from the pure essence of rose. 100% edible, excellent for skin care.',
        badge: 'Limited Edition',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: RoseWaterImage,
        category: 'essentials'
      }
    ],
    drinks: [
      {
        id: 'rose-milk-syrup',
        name: 'Rose Milk Syrup',
        description: 'Our signature blend with 8 premium ingredients for health and taste.',
        badge: 'Bestseller',
        badgeColor: 'bg-brand-primary text-white',
        image: RoseMilkSyrupImage,
        category: 'drinks',
        isSpecial: true,
        ingredients: [
          { name: 'Poppy Seeds', benefit: 'Bone health & relaxation' },
          { name: 'Rose', benefit: 'Antioxidant-rich, skin glow' },
          { name: 'Sandalwood Powder', benefit: 'Soothes skin & mind' },
          { name: 'Gaazaban', benefit: 'Respiratory health, reduces inflammation' },
          { name: 'Raathi Puvvu', benefit: 'Heart health, hair vitality' },
          { name: 'Nilofer', benefit: 'Stress relief & emotional balance' },
          { name: 'Simple Syrup', benefit: 'Energy & hydration' },
          { name: 'Vetiver', benefit: 'Nervous system calming, sleep aid' }
        ]
      },
      {
        id: 'rose-milk',
        name: 'Rose Milk',
        description: 'The original recipe that started it all in 1949.',
        badge: 'Original',
        badgeColor: 'bg-brand-primary text-white',
        image: RoseMilkImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      },
      {
        id: 'pistachio-milk',
        name: 'Pistachio Rich Milk',
        description: 'Creamy milk infused with premium pistachios.',
        badge: 'Rich',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: PistachioRichMilkImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      },
      {
        id: 'almond-milk',
        name: 'Almond Rich Milk',
        description: 'Smooth and nutritious almond-infused milk.',
        badge: 'Healthy',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: AlmondRichMilkImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      },
      {
        id: 'cocoa-milk',
        name: 'Cocoa (Dark Chocolate Mix)',
        description: 'Rich dark chocolate blend for chocolate lovers.',
        badge: 'Premium',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: CocoaImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      }
    ],
    fusions: [
      {
        id: 'rose-kova',
        name: 'Rose Kova',
        description: 'Traditional kova meets rose milk in perfect harmony.',
        badge: 'Traditional',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: RosekovaImage,
        category: 'fusions'
      },
      {
        id: 'ancient-falooda',
        name: 'Ancient Falooda (Semia)',
        description: 'Classic falooda with soft vermicelli and rose essence.',
        badge: 'Heritage',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: AncientFaloodaImage,
        category: 'fusions'
      }
    ],
    iceCreams: [
      {
        id: 'saffron-pistachio',
        name: 'Saffron Pistachio',
        description: 'Luxurious saffron ice cream with pistachio chunks.',
        badge: 'Premium',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: SaffronPistachioImage,
        category: 'ice-creams'
      },
      {
        id: 'white-rose',
        name: 'White Rose',
        description: 'Delicate white rose flavored ice cream.',
        badge: 'Signature',
        badgeColor: 'bg-brand-primary text-white',
        image: WhiteRoseImage,
        category: 'ice-creams'
      },
      {
        id: 'pink-rose',
        name: 'Pink Rose',
        description: 'Classic pink rose ice cream with natural rose essence.',
        badge: 'Classic',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: PinkRoseImage,
        category: 'ice-creams'
      },
      {
        id: 'indian-chocolate',
        name: 'Indian Chocolate',
        description: 'Rich chocolate ice cream with traditional Indian spices.',
        badge: 'Fusion',
        badgeColor: 'bg-brand-secondary text-brand-primary',
        image: IndianChocolateImage,
        category: 'ice-creams'
      }
    ]
  };

  const allProducts = [
    ...products.essentials,
    ...products.drinks,
    ...products.fusions,
    ...products.iceCreams
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedFilter);

  const specialProduct = products.drinks.find(p => p.isSpecial);

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-secondary">
        <Header />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-text-secondary">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-primary font-medium">Products</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 font-serif">
                Our Products
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Discover our complete range of authentic products, crafted with 75 years of tradition.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Product - Rose Milk Syrup */}
        {specialProduct && (
          <section className="py-12 bg-brand-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animation="fadeUp">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 overflow-hidden">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-brand-primary rounded-full px-4 py-2 mb-4">
                      <Sparkles className="h-4 w-4 text-white mr-2" />
                      <span className="text-white font-medium">Featured Product</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-text-primary mb-4 font-serif">{specialProduct.name}</h2>
                    <p className="text-lg text-text-secondary mb-6">{specialProduct.description}</p>
                  </div>

                  {/* Radial Ingredient Layout */}
                  <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center mb-8 overflow-hidden animate-spin-slow" style={{ height: '80vmin' }}>
                    {/* Central Rose Milk Syrup Bottle */}
                    <div 
                      className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 flex items-center justify-center" 
                      style={{ width: '30vmin'}}
                    >
                      <img 
                        src={specialProduct.image} 
                        alt={specialProduct.name}
                        className="max-w-full max-h-full object-contain drop-shadow-sm animate-spin-reverse"
                      />
                    </div>
                    
                    {/* Ingredient Icons in Circular Arrangement */}
                    {specialProduct.ingredients.map((ingredient, index) => {
                      const angle = (360 / specialProduct.ingredients.length) * index;
                      const radius = '30vmin';
                      
                      return (
                        <div
                          key={index}
                          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center cursor-pointer hover:scale-110 transition-transform duration-300 group"
                          style={{
                            transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
                            width: '18vmin',
                            height: '16vmin'
                          }}
                        >
                          <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between text-center cursor-pointer hover:scale-110 transition-transform duration-300 group animate-spin-reverse">
                            {/* Circular Icon Background */}
                            <div 
                              className="bg-brand-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:shadow-xl group-hover:bg-brand-primary transition-all duration-300" 
                              style={{ width: '8vmin', height: '8vmin' }}
                            >
                              <Leaf style={{ width: '4vmin', height: '4vmin' }} className="text-brand-primary group-hover:text-white" />
                            </div>
                            
                            {/* Ingredient Name */}
                            <h3 className="font-semibold text-text-primary leading-tight mb-1 px-2" style={{ fontSize: '1.5vmin' }}>
                              {ingredient.name}
                            </h3>
                            
                            {/* Ingredient Benefit */}
                            <p className="text-text-secondary leading-tight px-2 break-words" style={{ fontSize: '1.2vmin' }}>
                              {ingredient.benefit}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center">
                    <div>
                      <Link 
                        to="/stores"
                        className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-colors inline-flex items-center"
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        Try Now
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp">
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => {
                  const FilterIcon = filter.icon;
                  return (
                    <motion.button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedFilter === filter.id
                          ? 'bg-brand-primary text-white shadow-lg'
                          : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FilterIcon className="h-4 w-4 mr-2" />
                      {filter.name}
                    </motion.button>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Ice Creams Special Notice */}
        {selectedFilter === 'ice-creams' && (
          <section className="py-8 bg-brand-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animation="fadeUp">
                <div className="text-center">
                  <motion.div 
                    className="inline-flex items-center bg-brand-primary rounded-full px-6 py-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Snowflake className="h-5 w-5 text-white mr-2" />
                    <span className="text-white font-medium">No Palm Oil • No Chemical Preservatives</span>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggeredGrid
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              staggerDelay={0.1}
            >
              {filteredProducts.filter(p => !p.isSpecial).map((product) => (
                <motion.div 
                  key={product.id} 
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Portrait Image Container */}
                  <div className="relative p-8 bg-brand-secondary">
                    <div className="aspect-[3/4] flex items-center justify-center">
                      <motion.img 
                        src={product.image} 
                        alt={product.name}
                        className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.5 }
                        }}
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${product.badgeColor} shadow-sm`}>
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-primary mb-3 font-serif text-center">{product.name}</h3>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed text-center">{product.description}</p>
                    
                    {product.options && (
                      <div className="flex gap-2 mb-4 justify-center">
                        {product.options.map((option) => (
                          <span key={option} className="inline-flex items-center px-3 py-1 bg-brand-secondary rounded-full text-xs text-text-secondary border border-gray-200">
                            {option === 'Chilled' ? <Thermometer className="h-3 w-3 mr-1" /> : <Snowflake className="h-3 w-3 mr-1" />}
                            {option}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to="/stores"
                        className="w-full bg-brand-primary text-white py-3 rounded-full font-semibold hover:bg-black transition-colors shadow-sm hover:shadow-md block text-center"
                      >
                        Order Now
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </StaggeredGrid>

            {filteredProducts.length === 0 && (
              <AnimatedSection animation="fadeUp" className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No products found</h3>
                <p className="text-text-secondary">Try selecting a different category.</p>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Ready to Experience Tradition?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Find our products at stores near you or order online for home delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/stores" 
                    className="bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Find Stores
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProductsPage;
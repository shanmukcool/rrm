import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Coffee, Award, ArrowLeft, Star, CheckCircle, Clock, Thermometer, Droplets, Wheat, Crown, MapPin, Filter, Sparkles, Leaf, Snowflake, IceCream, GlassWater } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        badgeColor: 'bg-purple-100 text-purple-800',
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
        badgeColor: 'bg-rose-100 text-rose-800',
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
        badgeColor: 'bg-rose-100 text-rose-800',
        image: RoseMilkImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      },
      {
        id: 'pistachio-milk',
        name: 'Pistachio Rich Milk',
        description: 'Creamy milk infused with premium pistachios.',
        badge: 'Rich',
        badgeColor: 'bg-green-100 text-green-800',
        image: PistachioRichMilkImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      },
      {
        id: 'almond-milk',
        name: 'Almond Rich Milk',
        description: 'Smooth and nutritious almond-infused milk.',
        badge: 'Healthy',
        badgeColor: 'bg-amber-100 text-amber-800',
        image: AlmondRichMilkImage,
        category: 'drinks',
        options: ['Chilled', 'Iced']
      },
      {
        id: 'cocoa-milk',
        name: 'Cocoa (Dark Chocolate Mix)',
        description: 'Rich dark chocolate blend for chocolate lovers.',
        badge: 'Premium',
        badgeColor: 'bg-yellow-100 text-yellow-800',
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
        badgeColor: 'bg-orange-100 text-orange-800',
        image: RosekovaImage,
        category: 'fusions'
      },
      {
        id: 'ancient-falooda',
        name: 'Ancient Falooda (Semia)',
        description: 'Classic falooda with soft vermicelli and rose essence.',
        badge: 'Heritage',
        badgeColor: 'bg-purple-100 text-purple-800',
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
        badgeColor: 'bg-yellow-100 text-yellow-800',
        image: SaffronPistachioImage,
        category: 'ice-creams'
      },
      {
        id: 'white-rose',
        name: 'White Rose',
        description: 'Delicate white rose flavored ice cream.',
        badge: 'Signature',
        badgeColor: 'bg-rose-100 text-rose-800',
        image: WhiteRoseImage,
        category: 'ice-creams'
      },
      {
        id: 'pink-rose',
        name: 'Pink Rose',
        description: 'Classic pink rose ice cream with natural rose essence.',
        badge: 'Classic',
        badgeColor: 'bg-pink-100 text-pink-800',
        image: PinkRoseImage,
        category: 'ice-creams'
      },
      {
        id: 'indian-chocolate',
        name: 'Indian Chocolate',
        description: 'Rich chocolate ice cream with traditional Indian spices.',
        badge: 'Fusion',
        badgeColor: 'bg-amber-100 text-amber-800',
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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-rose-600 font-medium">Products</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of authentic products, crafted with 75 years of tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => {
              const FilterIcon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-rose-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FilterIcon className="h-4 w-4 mr-2" />
                  {filter.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Product - Rose Milk Syrup */}
      {(selectedFilter === 'all' || selectedFilter === 'drinks') && specialProduct && (
        <section className="py-12 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-rose-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-rose-100 rounded-full px-4 py-2 mb-4">
                  <Sparkles className="h-4 w-4 text-rose-600 mr-2" />
                  <span className="text-rose-800 font-medium">Featured Product</span>
                </div>
                
                {/* Product Image Container - Portrait Optimized */}
                <div className="w-48 h-64 mx-auto mb-6 bg-gradient-to-b from-rose-25 to-white rounded-2xl p-8 flex items-center justify-center">
                  <img 
                    src={specialProduct.image} 
                    alt={specialProduct.name}
                    className="max-w-full max-h-full object-contain drop-shadow-sm"
                  />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{specialProduct.name}</h2>
                <p className="text-lg text-gray-600 mb-6">{specialProduct.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {specialProduct.ingredients.map((ingredient, index) => (
                  <div key={index} className="bg-rose-50 rounded-2xl p-4 text-center border border-rose-100">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="h-6 w-6 text-rose-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{ingredient.name}</h3>
                    <p className="text-xs text-gray-600">{ingredient.benefit}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors inline-flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ice Creams Special Notice */}
      {(selectedFilter === 'all' || selectedFilter === 'ice-creams') && (
        <section className="py-8 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3">
                <Snowflake className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">No Palm Oil • No Chemical Preservatives</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.filter(p => !p.isSpecial).map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                {/* Portrait Image Container */}
                <div className="relative p-8 bg-gradient-to-b from-gray-25 to-white">
                  <div className="aspect-[3/4] flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif text-center">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">{product.description}</p>
                  
                  {product.options && (
                    <div className="flex gap-2 mb-4 justify-center">
                      {product.options.map((option) => (
                        <span key={option} className="inline-flex items-center px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-700 border border-gray-200">
                          {option === 'Chilled' ? <Thermometer className="h-3 w-3 mr-1" /> : <Snowflake className="h-3 w-3 mr-1" />}
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <button className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors shadow-sm hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Experience Tradition?
          </h2>
          <p className="text-xl mb-8 text-rose-100">
            Find our products at stores near you or order online for home delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/stores" 
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Find Stores
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Order Online
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
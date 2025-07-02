import React from 'react';
import { Link } from 'react-router-dom';
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
  Coffee
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center bg-rose-100 rounded-full px-4 py-2 mb-8">
              <Star className="h-4 w-4 text-rose-600 mr-2" />
              <span className="text-rose-800 font-medium">India's Iconic Dessert Drink Since 1949</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-serif">
              The Original 
              <span className="block text-rose-600">Rajahmundry Rose Milk</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Refreshing. Nostalgic. Irresistible. Taste the timeless rose milk recipe that has captured hearts for over 75 years — now beautifully bottled for a new generation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <div className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-rose-500 mr-2" />
                <span>Delivered Fresh</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-rose-500 mr-2" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 text-rose-500 mr-2" />
                <span>Ready to Sip</span>
              </div>
            </div>
            
            <Link to="/stores" className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Find Stores</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-rose-500 mr-3" />
                <span className="text-rose-600 font-semibold text-lg">Our Story</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
                From a Street Corner in 1949 to Homes Across India
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In the bustling town of Rajahmundry, Sri Gulab SrinivasRathi created something unforgettable — a rose milk recipe so unique it became a legacy. Infused with rich heritage and unmatched craftsmanship, it turned passersby into lifelong fans.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, we've preserved every bit of that magic — from the flavor to the feeling — and brought it to your doorstep, in ready-to-drink cups.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Heritage recipe passed down through 3 generations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Made fresh with real rose essence</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-rose-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">A drink that celebrates India's timeless taste traditions</span>
                </div>
              </div>
              
              <button className="text-rose-600 font-semibold inline-flex items-center hover:text-rose-700 transition-colors">
                <span>Learn More About Our Legacy</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-rose-600 mb-2">75</div>
                    <div className="text-lg font-semibold text-gray-800">Years of Legacy</div>
                    <div className="text-gray-600 mt-2">Since 1949</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Rajahmundry's Finest, Now Ready-to-Drink
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product crafted with the same love and attention that made us famous over seven decades ago.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Rose Milk */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Rose Milk</h3>
                <p className="text-rose-600 font-semibold">The signature. The legend.</p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                A chilled, creamy blend of milk and rose essence — smooth, fragrant, and nostalgic in every sip. Still made just the way Sri Gulab intended.
              </p>
            </div>
            
            {/* Semia */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Semia</h3>
                <p className="text-amber-600 font-semibold">The comfort drink reimagined.</p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our classic rose milk swirled with soft vermicelli – silky, satisfying, and soothing to the soul.
              </p>
            </div>
            
            {/* Rose Kova */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Rose Kova</h3>
                <p className="text-yellow-600 font-semibold">Premium indulgence.</p>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                A decadent fusion of traditional kova with the fragrant sweetness of rose milk. Rich, creamy, and unforgettable.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/products" className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition-colors inline-flex items-center">
              <span>View All Products</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-rose-500 mr-3" />
              <span className="text-rose-600 font-semibold text-lg">What People Are Saying</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-serif">
              Loved Across Generations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-rose-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "Takes me back to my childhood summers in Rajahmundry. It's more than a drink — it's a memory."
              </blockquote>
              <cite className="text-rose-600 font-semibold">— Priya R., Vizag</cite>
            </div>
            
            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-rose-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "The flavor, the texture, the chill — every detail is perfect."
              </blockquote>
              <cite className="text-rose-600 font-semibold">— Arjun M., Hyderabad</cite>
            </div>
            
            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-rose-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "Love that this is finally available in ready-to-drink form. My entire family loves it."
              </blockquote>
              <cite className="text-rose-600 font-semibold">— Sneha K., Bangalore</cite>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-rose-100 rounded-full px-6 py-3">
              <Instagram className="h-5 w-5 text-rose-600 mr-2" />
              <span className="text-rose-800 font-medium">Join the experience: @rajahmundryrosemilk</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
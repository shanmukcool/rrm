import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Milk,
  Clock,
  Award,
  Heart,
  CheckCircle,
  Users,
  MapPin,
  Gift,
  ArrowRight,
  Sparkles,
  Leaf,
  Droplets,
  Star,
  Crown,
  Target,
  Zap,
  Globe,
  Quote,
  IceCream
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredGrid from '../components/StaggeredGrid';
import FloatingElements from '../components/FloatingElements';
import PageTransition from '../components/PageTransition';

import RoseMilkSyrupImage from '../assets/p7rosemilksyrup.png';
import SignatureStore from '../assets/s1signaturestore.jpg';
import HeadBranch from '../assets/s2headbranch.jpg';
import ExperienceStore from '../assets/s3experiencestore.jpg';
import NewLogo from '../assets/newlogo.png';
import Plate from '../assets/plate.png';

const AboutUsPage = () => {
  const timelineItems = [
    {
      year: "1949",
      title: "Where It All Began",
      subtitle: "From a small town in Andhra Pradesh to becoming a household name.",
      description: "In the heart of Rajahmundry, Shri Gubba Simhachalam stirred more than just milk. He blended rose essence, Ayurvedic herbs, and rich buffalo milk — creating a drink that soothed the soul and cooled the summer heat.",
      image: RoseMilkSyrupImage,
      features: ["Rose Essence", "Ayurvedic Herbs", "Rich Buffalo Milk", "Soul Soothing"]
    },
    {
      year: "1976",
      title: "The Torch is Passed",
      subtitle: "Same recipe. Bigger dreams.",
      description: "Under the care of his son, Shri Gubba Ramachandra Rao — lovingly called Rose Milk Ramu Garu — the brand scaled new heights.",
      image: SignatureStore,
      features: ["Enhanced hygiene standards", "Sugar-free variants introduced", "Expanded regional reach", "Preserved authentic taste"]
    },
    {
      year: "TODAY",
      title: "Loved by Thousands, Every Day",
      subtitle: "Tradition meets taste. Again.",
      description: "Led by third-generation steward Rishik Srikanth, we're evolving while staying rooted.",
      image: HeadBranch,
      stats: [
        { number: "30,000+", label: "Daily Customers" },
        { number: "40+", label: "Outlets Nationwide" }
      ]
    }
  ];

  const specialFeatures = [
    {
      icon: Clock,
      title: "Rich Heritage",
      description: "75 years. 3 generations. One timeless recipe passed down through decades of dedication and love."
    },
    {
      icon: Leaf,
      title: "Authentic Fusion",
      description: "Mughal flavors meet Ayurvedic purity in every sip, creating a unique taste experience."
    },
    {
      icon: CheckCircle,
      title: "Uncompromising Quality",
      description: "Every batch meets strict hygiene and flavor standards, ensuring consistency in every cup."
    },
    {
      icon: Zap,
      title: "Constant Innovation",
      description: "Sugar-free options, seasonal blends, and evolving formats while preserving the original essence."
    },
    {
      icon: Globe,
      title: "Widespread Love",
      description: "Now at 40+ outlets nationwide, delighting 30,000+ daily customers across India."
    },
    {
      icon: Heart,
      title: "Customer Devotion",
      description: "Generations of families have made us part of their daily rituals and special celebrations."
    }
  ];

  const testimonials = [
    {
      text: "Every sip takes me back to my childhood summers.",
      author: "Sumanth R., Hyderabad"
    },
    {
      text: "I've never had a drink that makes me feel both nostalgic and refreshed.",
      author: "Vaishnavi A., Chennai"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-secondary">
        <Header />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-text-secondary">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-primary font-medium">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-white">
          <FloatingElements />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center bg-brand-primary rounded-full px-6 py-3 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-semibold">Our Story: 75 Years of Sipping Joy</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-8 font-serif leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  One Drink.
                </motion.span>
                <motion.span 
                  className="block text-brand-primary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Three Generations.
                </motion.span>
                <motion.span 
                  className="block text-brand-primary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Millions of Smiles.
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                From a small town in Andhra Pradesh to becoming a household name, 
                discover the remarkable journey of India's most beloved rose milk.
              </motion.p>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {timelineItems.map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  delay={0.2}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}>
                      <div className="flex items-center mb-6">
                        <motion.div 
                          className="bg-brand-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-4"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.year === "TODAY" ? <Zap className="h-8 w-8" /> : item.year}
                        </motion.div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary font-serif">{item.title}</h2>
                          <p className="text-brand-primary font-semibold text-lg">{item.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                        <p>{item.description}</p>
                        
                        <div className="bg-white border-l-4 border-brand-primary p-6 rounded-r-lg">
                          <p className="text-brand-primary font-semibold text-xl">
                            {item.year === "1949" && "👉 That's how Rose Milk became a ritual."}
                            {item.year === "1976" && "\"Never change the soul of the drink.\""}
                            {item.year === "TODAY" && "\"It still tastes like home.\""}
                          </p>
                        </div>
                      </div>

                      {item.features && (
                        <StaggeredGrid className="mt-8 grid grid-cols-2 gap-4" staggerDelay={0.1}>
                          {item.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex}
                              className="flex items-center"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Droplets className="h-5 w-5 text-brand-primary mr-2" />
                              <span className="text-text-secondary">{feature}</span>
                            </motion.div>
                          ))}
                        </StaggeredGrid>
                      )}

                      {item.stats && (
                        <div className="mt-8 grid grid-cols-2 gap-6">
                          {item.stats.map((stat, statIndex) => (
                            <motion.div 
                              key={statIndex}
                              className="text-center p-4 bg-white rounded-xl"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="text-3xl font-bold text-brand-primary mb-2">{stat.number}</div>
                              <div className="text-text-secondary font-medium">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={index % 2 === 1 ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}>
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`bg-white rounded-3xl p-8 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-300`}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-contain drop-shadow-lg"
                          />
                        </div>
                        <motion.div 
                          className={`absolute ${index % 2 === 0 ? '-top-4 -right-4' : '-bottom-4 -left-4'} bg-brand-primary text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.year === "TODAY" ? "TODAY" : `EST.\n${item.year}`}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Rose Street Sub-Brand Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideLeft">
                <div className="relative">
                  <motion.div 
                    className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={ExperienceStore}
                      alt="Rose Street experience"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Rose Street</h3>
                      <p className="text-white/90">A modern tribute to the iconic Rajahmundry Rose Milk.</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideRight" delay={0.2}>
                <div>
                  <div className="flex items-center mb-6">
                    <motion.img 
                      src={NewLogo} 
                      alt="Rajahmundry Rose Milk Logo" 
                      className="h-32 w-32 mr-3 object-contain"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    />
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-bold text-text-primary font-serif">Rose Street</h2>
                      <p className="text-brand-primary font-semibold text-lg">A modern tribute to the iconic Rajahmundry Rose Milk.</p>
                    </div>
                  </div>

                  <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                    Rose Street is a curated lifestyle experience inspired by the timeless taste and tradition of Rajahmundry Rose Milk.
                  </p>

                  <StaggeredGrid className="space-y-6" staggerDelay={0.1}>
                    {[
                      {
                        icon: IceCream,
                        title: "Nostalgia-Infused Treats",
                        description: "Special desserts and creations that carry the essence of Rajahmundry's signature rose flavor."
                      },
                      {
                        icon: Droplets,
                        title: "Limited Edition – Rose Hydrosol",
                        description: "A premium rose water crafted for skin wellness, beauty, and tradition – rooted in the Mughal secret of radiance."
                      },
                      {
                        icon: Award,
                        title: "A Taste of Tradition",
                        description: "Bringing the charm of yesteryear into modern spaces through curated rose-based experiences."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="bg-brand-secondary rounded-full p-3 mr-4">
                          <item.icon className="h-6 w-6 text-brand-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h3>
                          <p className="text-text-secondary">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </StaggeredGrid>

                  <motion.div 
                    className="mt-8 p-6 bg-brand-secondary rounded-2xl border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="text-brand-primary font-semibold text-lg text-center">
                      We're taking nostalgia and turning it into a lifestyle.
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="py-20 bg-brand-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-brand-primary mr-3" />
                <span className="text-brand-primary font-semibold text-lg">What Makes Us Special</span>
              </div>
              
              <div className="flex justify-center mb-8">
                <motion.img 
                  src={Plate} 
                  alt="commemorative wall plaque" 
                  className="h-80 w-80 object-contain drop-shadow-lg"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary font-serif mb-6">
                75 Years of Excellence
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Discover the unique elements that have made us India's most beloved rose milk brand.
              </p>
            </AnimatedSection>

            <StaggeredGrid
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              {specialFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="bg-brand-primary rounded-full w-16 h-16 flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 font-serif">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeUp" className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-brand-primary mr-3" />
                <span className="text-brand-primary font-semibold text-lg">Hear It from Our Fans</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary font-serif">
                Voices of Love & Nostalgia
              </h2>
            </AnimatedSection>

            <StaggeredGrid
              className="grid md:grid-cols-2 gap-8"
              staggerDelay={0.2}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-brand-secondary rounded-3xl p-8 shadow-lg border border-gray-100 relative"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <Quote className="h-12 w-12 text-brand-primary/30 mb-6" />
                  <blockquote className="text-xl text-text-secondary mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-brand-primary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <cite className="text-brand-primary font-semibold text-lg">— {testimonial.author}</cite>
                  </div>
                </motion.div>
              ))}
            </StaggeredGrid>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Ready to Taste the Legacy?
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Join millions who have made our rose milk a part of their daily joy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/stores" 
                    className="bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center group"
                  >
                    <MapPin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Find Your Nearest Store
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/franchise" 
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-primary transition-colors inline-flex items-center justify-center group"
                  >
                    <Users className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Franchise With Us
                    <ArrowRight className="h-4 w-4 ml-2" />
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

export default AboutUsPage;
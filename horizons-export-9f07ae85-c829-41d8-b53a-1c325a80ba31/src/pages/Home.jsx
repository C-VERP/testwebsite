
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Home = () => {
  const handleGetStarted = () => {
    toast({
      title: "🚧 Get Started",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "🚧 Watch Demo",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance for maximum efficiency and speed."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale",
      description: "Scalable solutions that grow with your business worldwide."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <>
      <Helmet>
        <title>InnoCraft.be - Innovative Software Solutions for Modern Businesses</title>
        <meta name="description" content="Transform your business with InnoCraft.be's cutting-edge software solutions. We deliver custom applications, digital transformation, and technology consulting services." />
        <meta property="og:title" content="InnoCraft.be - Innovative Software Solutions for Modern Businesses" />
        <meta property="og:description" content="Transform your business with InnoCraft.be's cutting-edge software solutions. We deliver custom applications, digital transformation, and technology consulting services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  <Star className="h-4 w-4 mr-2" />
                  #1 Software Solutions Provider in Belgium
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Innovative
                  <span className="gradient-text"> Software Solutions</span>
                  <br />
                  for Modern Business
                </h1>
                
                <p className="text-xl text-gray-600 max-w-2xl">
                  Transform your business with cutting-edge technology. We deliver custom software solutions, 
                  digital transformation services, and innovative applications that drive growth and efficiency.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={handleWatchDemo}
                  variant="outline"
                  size="lg"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Money-back Guarantee</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img  
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  alt="Modern software development team working on innovative solutions"
                 src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">InnoCraft.be</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that transform your business and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom software development to digital transformation, 
              we offer comprehensive solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                description: "Tailored applications built to meet your specific business requirements.",
                image: "Custom software development team coding innovative business applications"
              },
              {
                title: "Digital Transformation",
                description: "Modernize your business processes with cutting-edge digital solutions.",
                image: "Digital transformation process with modern technology and business analytics"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services for optimal performance.",
                image: "Cloud computing infrastructure with servers and data visualization"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <img  
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  alt={service.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have revolutionized their operations 
              with our innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Knowledge <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our comprehensive collection of insights, guides, and industry knowledge 
            to help you make informed technology decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
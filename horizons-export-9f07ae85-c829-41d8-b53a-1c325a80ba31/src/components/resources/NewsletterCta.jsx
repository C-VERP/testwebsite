import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NewsletterCta = ({ onResourceClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stay Updated with Our Latest Resources
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest insights, guides, and industry updates 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              onClick={() => onResourceClick('Newsletter')}
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCta;
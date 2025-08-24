import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const ResourceCategories = ({ onResourceClick }) => {
  const categories = [
    { icon: <BookOpen className="h-8 w-8" />, title: "Blog Posts", count: "50+", color: "purple" },
    { icon: <FileText className="h-8 w-8" />, title: "Whitepapers", count: "15+", color: "blue" },
    { icon: <Video className="h-8 w-8" />, title: "Webinars", count: "25+", color: "green" },
    { icon: <Download className="h-8 w-8" />, title: "Case Studies", count: "30+", color: "orange" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onResourceClick(category.title)}
            >
              <div className={`text-${category.color}-600 mb-4 flex justify-center`}>{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <div className="text-2xl font-bold gradient-text">{category.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCategories;
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhitepapersSection = ({ onResourceClick }) => {
  const whitepapers = [
    {
      title: "Enterprise Software Selection Guide",
      description: "A comprehensive guide to selecting the right enterprise software for your organization.",
      pages: "24 pages",
      category: "Enterprise Solutions"
    },
    {
      title: "ROI of Digital Transformation",
      description: "Measuring and maximizing the return on investment from digital transformation initiatives.",
      pages: "18 pages",
      category: "Business Strategy"
    },
    {
      title: "Cloud Security Framework",
      description: "Best practices and frameworks for maintaining security in cloud environments.",
      pages: "32 pages",
      category: "Cloud Security"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Whitepapers</span> & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth guides and research papers to help you make informed technology decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whitepapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FileText className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
              <p className="text-gray-600 mb-4">{paper.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{paper.pages}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {paper.category}
                </span>
              </div>
              <Button
                onClick={() => onResourceClick('Whitepaper')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhitepapersSection;
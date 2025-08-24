import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection = ({ onResourceClick }) => {
  const caseStudies = [
    {
      title: "Healthcare System Modernization",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Legacy system integration and HIPAA compliance",
      result: "40% improvement in patient processing time",
      image: "Healthcare system modernization with medical technology integration"
    },
    {
      title: "E-commerce Platform Transformation",
      client: "Fashion Retailer",
      industry: "Retail",
      challenge: "Scalability issues and poor user experience",
      result: "300% increase in online sales within 6 months",
      image: "E-commerce platform transformation with modern shopping interface"
    },
    {
      title: "Manufacturing Process Optimization",
      client: "Industrial Equipment Manufacturer",
      industry: "Manufacturing",
      challenge: "Production inefficiencies and quality control",
      result: "25% reduction in production costs",
      image: "Manufacturing process optimization with automated systems"
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
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses transform their operations and achieve success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onResourceClick('Case Study')}
            >
              <img 
                className="w-full h-48 object-cover"
                alt={study.title} src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{study.client}</p>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Challenge:</span>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Result:</span>
                    <p className="text-sm text-green-600 font-medium">{study.result}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Read full case study</span>
                  <ArrowRight className="h-4 w-4 text-orange-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
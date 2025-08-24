import React from 'react';
import { motion } from 'framer-motion';
import { Video, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebinarsSection = ({ onResourceClick }) => {
  const webinars = [
    {
      title: "Building Scalable Web Applications",
      description: "Learn the principles and practices for creating web applications that scale with your business.",
      duration: "45 minutes",
      date: "April 15, 2024",
      status: "upcoming"
    },
    {
      title: "AI and Machine Learning in Business",
      description: "Discover how AI and ML can transform your business operations and decision-making processes.",
      duration: "60 minutes",
      date: "March 20, 2024",
      status: "recorded"
    },
    {
      title: "Microservices Architecture Deep Dive",
      description: "A technical deep dive into microservices architecture and its implementation strategies.",
      duration: "50 minutes",
      date: "March 8, 2024",
      status: "recorded"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Webinars</span> & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert-led webinars and events to learn about the latest technology trends and best practices.
          </p>
        </motion.div>

        <div className="space-y-6">
          {webinars.map((webinar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="text-green-600">
                      <Video className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{webinar.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {webinar.duration}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {webinar.date}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          webinar.status === 'upcoming' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {webinar.status === 'upcoming' ? 'Upcoming' : 'Recorded'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{webinar.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    onClick={() => onResourceClick('Webinar')}
                    className={`${
                      webinar.status === 'upcoming'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600'
                    } text-white`}
                  >
                    {webinar.status === 'upcoming' ? 'Register' : 'Watch'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebinarsSection;
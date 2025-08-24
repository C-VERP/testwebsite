import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPostsSection = ({ onResourceClick }) => {
  const blogPosts = [
    {
      title: "The Future of Software Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the software development landscape and how they impact business transformation.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Technology Trends",
      image: "Software development trends and future technology concepts"
    },
    {
      title: "Digital Transformation: A Complete Guide for Modern Businesses",
      excerpt: "Learn how to successfully navigate digital transformation and leverage technology for competitive advantage.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Digital Transformation",
      image: "Digital transformation process with modern business technology"
    },
    {
      title: "Cloud Migration Best Practices: Lessons from 100+ Projects",
      excerpt: "Discover proven strategies and best practices for successful cloud migration based on real-world experience.",
      author: "Emma Rodriguez",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "Cloud migration process with servers and data visualization"
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Essential cybersecurity measures every business needs to implement in today's remote work environment.",
      author: "David Kim",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "Cybersecurity measures for remote work and data protection"
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
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in software development and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onResourceClick('Blog Post')}
            >
              <img 
                className="w-full h-48 object-cover"
                alt={post.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {post.author} • {post.date}
                  </div>
                  <ArrowRight className="h-4 w-4 text-purple-600" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => onResourceClick('All Blog Posts')}
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection;
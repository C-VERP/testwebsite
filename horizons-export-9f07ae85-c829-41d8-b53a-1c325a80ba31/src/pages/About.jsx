
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Target, Heart, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive business transformation."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Our commitment to quality ensures robust, secure, and dependable software solutions."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "We put our clients first, understanding their unique needs and delivering personalized solutions."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, maintaining the highest standards of quality."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "Professional CEO portrait of Sarah Johnson in modern office setting"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "Professional CTO portrait of Michael Chen with technology background"
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Developer",
      image: "Professional developer portrait of Emma Rodriguez at workstation"
    },
    {
      name: "David Kim",
      role: "Design Director",
      image: "Professional design director portrait of David Kim in creative workspace"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About InnoCraft.be - Leading Software Development Company in Belgium</title>
        <meta name="description" content="Learn about InnoCraft.be's mission, values, and expert team. We're Belgium's premier software development company, delivering innovative solutions since 2014." />
        <meta property="og:title" content="About InnoCraft.be - Leading Software Development Company in Belgium" />
        <meta property="og:description" content="Learn about InnoCraft.be's mission, values, and expert team. We're Belgium's premier software development company, delivering innovative solutions since 2014." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              About <span className="gradient-text">InnoCraft.be</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of innovators, developers, and strategists dedicated to 
              transforming businesses through cutting-edge software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014, InnoCraft.be began as a small team of passionate developers 
                  with a vision to revolutionize how businesses leverage technology. What started 
                  as a local Belgian startup has grown into a leading software development company 
                  serving clients across Europe and beyond.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, unwavering commitment to 
                  quality, and a deep understanding of our clients' evolving needs. We've helped 
                  hundreds of businesses transform their operations, streamline processes, and 
                  achieve unprecedented growth through custom software solutions.
                </p>
                <p>
                  Today, we're proud to be recognized as one of Belgium's premier technology 
                  partners, combining technical expertise with strategic insight to deliver 
                  solutions that make a real difference.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img  
                className="w-full h-auto rounded-2xl shadow-2xl"
                alt="InnoCraft.be team collaborating in modern office environment"
               src="https://images.unsplash.com/photo-1634715022648-13d43a4e9fe8" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 about-gradient rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-purple-600 mb-4">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and competitive advantage. We believe technology should be an 
                enabler, not a barrier, and we're committed to making it accessible and 
                impactful for every organization we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-blue-600 mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading catalyst for digital transformation in Belgium and beyond, 
                recognized for our innovation, expertise, and unwavering commitment to client 
                success. We envision a future where every business can harness the full 
                potential of technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we interact 
              with our clients, partners, and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="text-purple-600 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in 
              software development, design, and business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <img  
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  alt={`${member.name} - ${member.role}`}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10+", label: "Years of Excellence" },
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Expert Team Members" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

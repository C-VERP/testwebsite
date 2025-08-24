
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, Database, Shield, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleGetQuote = () => {
    toast({
      title: "🚧 Get Quote",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Software Development",
      description: "Tailored applications built from the ground up to meet your specific business requirements and objectives.",
      features: [
        "Full-stack web applications",
        "Desktop software solutions",
        "API development & integration",
        "Legacy system modernization"
      ],
      image: "Custom software development team coding innovative business applications"
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize performance and reduce operational costs.",
      features: [
        "Cloud migration & deployment",
        "Infrastructure as Code",
        "Auto-scaling solutions",
        "Cloud security & compliance"
      ],
      image: "Cloud computing infrastructure with servers and data visualization"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "App store optimization"
      ],
      image: "Mobile app development process with smartphones and design mockups"
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Data warehouse design",
        "Real-time analytics",
        "Custom dashboards",
        "Predictive modeling"
      ],
      image: "Business intelligence dashboard with data analytics and charts"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and ensure compliance with industry standards.",
      features: [
        "Security audits & assessments",
        "Penetration testing",
        "Compliance consulting",
        "Incident response planning"
      ],
      image: "Cybersecurity team monitoring network security and threat detection"
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
      features: [
        "Process automation",
        "System integration",
        "Change management",
        "Technology consulting"
      ],
      image: "Digital transformation process with modern technology and business analytics"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business needs, challenges, and objectives through comprehensive analysis."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a detailed project roadmap with clear milestones and deliverables."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We create and build your solution using cutting-edge technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing ensures quality before we deploy your solution to production environments."
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance keep your solution running smoothly and up-to-date."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Software Development Services - InnoCraft.be | Custom Solutions & Digital Transformation</title>
        <meta name="description" content="Explore InnoCraft.be's comprehensive software development services: custom applications, cloud solutions, mobile apps, data analytics, cybersecurity, and digital transformation." />
        <meta property="og:title" content="Software Development Services - InnoCraft.be | Custom Solutions & Digital Transformation" />
        <meta property="og:description" content="Explore InnoCraft.be's comprehensive software development services: custom applications, cloud solutions, mobile apps, data analytics, cybersecurity, and digital transformation." />
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services designed to transform your business 
              and drive sustainable growth through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-purple-600 flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <img  
                          className="w-full h-32 object-cover rounded-lg"
                          alt={service.title}
                         src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleGetQuote}
                      className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and exceptional results for every client.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-purple-600 to-blue-500"></div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business 
              and achieve your technology goals.
            </p>
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;


import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Heart, GraduationCap, Truck, Factory, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Solutions = () => {
  const handleLearnMore = () => {
    toast({
      title: "🚧 Learn More",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const solutions = [
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Enterprise Resource Planning (ERP)",
      description: "Comprehensive ERP solutions that integrate all your business processes into a single, unified system.",
      benefits: [
        "Streamlined operations",
        "Real-time reporting",
        "Improved efficiency",
        "Cost reduction"
      ],
      features: [
        "Financial management",
        "Inventory control",
        "Human resources",
        "Customer relationship management"
      ],
      image: "Enterprise ERP system dashboard with business analytics and workflow management"
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce Platforms",
      description: "Scalable e-commerce solutions that drive online sales and provide exceptional customer experiences.",
      benefits: [
        "Increased online sales",
        "Better customer experience",
        "Mobile optimization",
        "Payment integration"
      ],
      features: [
        "Product catalog management",
        "Shopping cart & checkout",
        "Payment processing",
        "Order management"
      ],
      image: "Modern e-commerce platform with shopping interface and product displays"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Healthcare Management Systems",
      description: "HIPAA-compliant healthcare solutions that improve patient care and streamline medical operations.",
      benefits: [
        "Enhanced patient care",
        "Regulatory compliance",
        "Operational efficiency",
        "Data security"
      ],
      features: [
        "Electronic health records",
        "Appointment scheduling",
        "Billing & insurance",
        "Telemedicine integration"
      ],
      image: "Healthcare management system with patient records and medical data visualization"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Learning Management Systems",
      description: "Educational platforms that facilitate online learning and training for institutions and corporations.",
      benefits: [
        "Flexible learning",
        "Progress tracking",
        "Cost-effective training",
        "Scalable delivery"
      ],
      features: [
        "Course management",
        "Student tracking",
        "Assessment tools",
        "Certification system"
      ],
      image: "Learning management system with online courses and educational content"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions that optimize logistics and improve operational visibility.",
      benefits: [
        "Reduced costs",
        "Improved visibility",
        "Better planning",
        "Risk mitigation"
      ],
      features: [
        "Inventory optimization",
        "Demand forecasting",
        "Supplier management",
        "Logistics tracking"
      ],
      image: "Supply chain management dashboard with logistics tracking and inventory control"
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Manufacturing Execution Systems",
      description: "Smart manufacturing solutions that connect the factory floor to business systems for optimal production.",
      benefits: [
        "Production optimization",
        "Quality control",
        "Real-time monitoring",
        "Compliance tracking"
      ],
      features: [
        "Production scheduling",
        "Quality management",
        "Equipment monitoring",
        "Workflow automation"
      ],
      image: "Manufacturing execution system with production line monitoring and quality control"
    }
  ];

  const industries = [
    { name: "Financial Services", count: "50+" },
    { name: "Healthcare", count: "30+" },
    { name: "Retail & E-commerce", count: "75+" },
    { name: "Manufacturing", count: "40+" },
    { name: "Education", count: "25+" },
    { name: "Logistics", count: "35+" }
  ];

  return (
    <>
      <Helmet>
        <title>Business Solutions - InnoCraft.be | ERP, E-commerce, Healthcare & More</title>
        <meta name="description" content="Discover InnoCraft.be's industry-specific software solutions: ERP systems, e-commerce platforms, healthcare management, learning systems, and manufacturing solutions." />
        <meta property="og:title" content="Business Solutions - InnoCraft.be | ERP, E-commerce, Healthcare & More" />
        <meta property="og:description" content="Discover InnoCraft.be's industry-specific software solutions: ERP systems, e-commerce platforms, healthcare management, learning systems, and manufacturing solutions." />
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
              Business <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific software solutions designed to address unique business challenges 
              and drive operational excellence across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-purple-600">{solution.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600">{solution.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Features:</h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleLearnMore}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img  
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    alt={solution.title}
                   src="https://images.unsplash.com/photo-1588601515934-48cd862f9955" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions have been successfully implemented across various industries, 
              helping businesses of all sizes achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{industry.count}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your solution meets your specific 
              business requirements and delivers measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Business Analysis",
                description: "Deep dive into your business processes, challenges, and objectives to understand your unique requirements."
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Create a tailored solution architecture that addresses your specific needs and integrates with existing systems."
              },
              {
                step: "03",
                title: "Implementation & Support",
                description: "Deploy the solution with minimal disruption and provide ongoing support to ensure optimal performance."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Let's discuss how our industry-specific solutions can help you achieve 
              your business objectives and drive sustainable growth.
            </p>
            <Button
              onClick={handleLearnMore}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Solutions;

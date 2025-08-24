
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Heart, GraduationCap, Truck, Factory, Banknote, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Industries = () => {
  const handleExploreMore = () => {
    toast({
      title: "🚧 Explore More",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const industries = [
    {
      icon: <Banknote className="h-12 w-12" />,
      title: "Financial Services",
      description: "Secure, compliant solutions for banks, insurance companies, and fintech startups.",
      challenges: [
        "Regulatory compliance",
        "Data security",
        "Real-time processing",
        "Customer experience"
      ],
      solutions: [
        "Core banking systems",
        "Payment processing platforms",
        "Risk management tools",
        "Customer portals"
      ],
      image: "Financial services technology with banking systems and secure transactions",
      stats: { projects: "50+", clients: "25+", years: "8+" }
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Healthcare",
      description: "HIPAA-compliant healthcare solutions that improve patient outcomes and operational efficiency.",
      challenges: [
        "Patient data privacy",
        "Interoperability",
        "Workflow optimization",
        "Regulatory compliance"
      ],
      solutions: [
        "Electronic health records",
        "Telemedicine platforms",
        "Medical imaging systems",
        "Practice management"
      ],
      image: "Healthcare technology with medical records and patient management systems",
      stats: { projects: "30+", clients: "15+", years: "6+" }
    },
    {
      icon: <ShoppingBag className="h-12 w-12" />,
      title: "Retail & E-commerce",
      description: "Omnichannel retail solutions that drive sales and enhance customer experiences.",
      challenges: [
        "Inventory management",
        "Customer engagement",
        "Multi-channel integration",
        "Scalability"
      ],
      solutions: [
        "E-commerce platforms",
        "POS systems",
        "Inventory management",
        "Customer analytics"
      ],
      image: "Retail and e-commerce platform with shopping interface and inventory management",
      stats: { projects: "75+", clients: "40+", years: "10+" }
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Manufacturing",
      description: "Smart manufacturing solutions that optimize production and improve quality control.",
      challenges: [
        "Production efficiency",
        "Quality control",
        "Supply chain visibility",
        "Equipment maintenance"
      ],
      solutions: [
        "MES systems",
        "Quality management",
        "Predictive maintenance",
        "Supply chain optimization"
      ],
      image: "Manufacturing technology with production line monitoring and quality control systems",
      stats: { projects: "40+", clients: "20+", years: "7+" }
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education",
      description: "Educational technology solutions that enhance learning experiences and administrative efficiency.",
      challenges: [
        "Student engagement",
        "Administrative burden",
        "Remote learning",
        "Performance tracking"
      ],
      solutions: [
        "Learning management systems",
        "Student information systems",
        "Virtual classrooms",
        "Assessment platforms"
      ],
      image: "Educational technology with online learning platforms and student management systems",
      stats: { projects: "25+", clients: "12+", years: "5+" }
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Logistics & Transportation",
      description: "Supply chain and logistics solutions that optimize operations and reduce costs.",
      challenges: [
        "Route optimization",
        "Inventory tracking",
        "Cost management",
        "Delivery visibility"
      ],
      solutions: [
        "Fleet management systems",
        "Warehouse management",
        "Route optimization",
        "Tracking platforms"
      ],
      image: "Logistics and transportation technology with fleet management and route optimization",
      stats: { projects: "35+", clients: "18+", years: "6+" }
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Real Estate",
      description: "Property management and real estate solutions that streamline operations and improve client services.",
      challenges: [
        "Property management",
        "Client communication",
        "Document management",
        "Market analysis"
      ],
      solutions: [
        "Property management systems",
        "CRM platforms",
        "Virtual tour solutions",
        "Market analytics"
      ],
      image: "Real estate technology with property management and virtual tour systems",
      stats: { projects: "20+", clients: "10+", years: "4+" }
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Travel & Hospitality",
      description: "Hospitality solutions that enhance guest experiences and optimize operations.",
      challenges: [
        "Booking management",
        "Guest experience",
        "Revenue optimization",
        "Multi-channel distribution"
      ],
      solutions: [
        "Booking platforms",
        "Property management systems",
        "Guest experience apps",
        "Revenue management"
      ],
      image: "Travel and hospitality technology with booking systems and guest management platforms",
      stats: { projects: "15+", clients: "8+", years: "3+" }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve - InnoCraft.be | Sector-Specific Software Solutions</title>
        <meta name="description" content="Discover how InnoCraft.be serves various industries with specialized software solutions: healthcare, finance, retail, manufacturing, education, logistics, and more." />
        <meta property="og:title" content="Industries We Serve - InnoCraft.be | Sector-Specific Software Solutions" />
        <meta property="og:description" content="Discover how InnoCraft.be serves various industries with specialized software solutions: healthcare, finance, retail, manufacturing, education, logistics, and more." />
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
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that every industry has unique challenges and requirements. 
              Our specialized solutions are tailored to meet the specific needs of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
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
                    <div className="text-purple-600">{industry.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Challenges:</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Our Solutions:</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8 py-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{industry.stats.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{industry.stats.clients}</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">{industry.stats.years}</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleExploreMore}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img  
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    alt={industry.title}
                   src="https://images.unsplash.com/photo-1606890761316-360fec457e76" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses across different industries achieve 
              their goals and transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare",
                metric: "40%",
                description: "Reduction in patient wait times through optimized scheduling systems"
              },
              {
                industry: "Retail",
                metric: "60%",
                description: "Increase in online sales with our e-commerce platform solutions"
              },
              {
                industry: "Manufacturing",
                metric: "25%",
                description: "Improvement in production efficiency with smart manufacturing systems"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{story.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-3">{story.industry}</div>
                <p className="text-gray-600">{story.description}</p>
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
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              We work with businesses across all sectors. Let's discuss how we can 
              create a custom solution tailored to your industry's unique needs.
            </p>
            <Button
              onClick={handleExploreMore}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Industries;

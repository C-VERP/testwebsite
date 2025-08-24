import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const OfficeLocations = () => {
  const offices = [
    {
      city: "Brussel",
      address: "Louizalaan 123, 1050 Brussel, België",
      phone: "+32 2 123 45 67",
      email: "brussel@innocraft.be",
      image: "Modern office building in Brussels with glass facade and contemporary architecture"
    },
    {
      city: "Antwerpen",
      address: "Meir 456, 2000 Antwerpen, België",
      phone: "+32 3 234 56 78",
      email: "antwerpen@innocraft.be",
      image: "Contemporary office space in Antwerp with modern design and technology setup"
    },
    {
      city: "Gent",
      address: "Korenlei 789, 9000 Gent, België",
      phone: "+32 9 345 67 89",
      email: "gent@innocraft.be",
      image: "Innovative office environment in Ghent with collaborative workspaces"
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
            Onze <span className="gradient-text">Kantoren</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bezoek ons op een van onze handige locaties in België. We ontmoeten u graag persoonlijk om uw project te bespreken.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                className="w-full h-48 object-cover"
                alt={`InnoCraft.be kantoor in ${office.city}`} src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
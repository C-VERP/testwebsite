import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = ({ onScheduleCall }) => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail Ons",
      details: "info@innocraft.be",
      description: "Stuur ons een e-mail en we reageren binnen 24 uur"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Bel Ons",
      details: "+32 2 123 45 67",
      description: "Spreek rechtstreeks met ons team tijdens kantooruren"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Bezoek Ons",
      details: "Brussel, België",
      description: "Plan een afspraak in ons moderne kantoor"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Kantooruren",
      details: "Ma - Vr: 9:00 - 18:00",
      description: "We zijn beschikbaar tijdens de standaard kantooruren"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Contact <span className="gradient-text">Informatie</span>
        </h2>
        <p className="text-gray-600">
          Kies de beste manier om ons te bereiken. We zijn hier om te helpen en al uw vragen te beantwoorden.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
          >
            <div className="text-purple-600 flex-shrink-0">{info.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
              <p className="text-purple-600 font-medium mb-2">{info.details}</p>
              <p className="text-gray-600 text-sm">{info.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-2xl text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Calendar className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Plan een Gratis Consultatie</h3>
        </div>
        <p className="mb-4 text-purple-100">
          Boek een consultatie van 30 minuten om uw projectvereisten te bespreken en te ontdekken hoe we kunnen helpen.
        </p>
        <Button
          onClick={onScheduleCall}
          className="bg-white text-purple-600 hover:bg-gray-100"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Plan Gesprek
        </Button>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
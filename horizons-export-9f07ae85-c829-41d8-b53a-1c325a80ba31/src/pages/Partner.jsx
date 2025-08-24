import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HeartHandshake as Handshake, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Partner = () => {
  const handleBecomePartner = () => {
    toast({
      title: "🚧 Partner Worden",
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const benefits = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Groei uw Bedrijf",
      description: "Krijg toegang tot een groeiende markt en breid uw klantenbestand uit met Odoo-oplossingen."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Expert Training",
      description: "Profiteer van uitgebreide training en certificering om een Odoo-expert te worden."
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: "Toegewijde Ondersteuning",
      description: "Ontvang toegewijde ondersteuning van ons partnerteam om uw projecten tot een succes te maken."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Word een Partner - InnoCraft.be | Odoo Partnerprogramma</title>
        <meta name="description" content="Word een Odoo-partner met InnoCraft.be en laat uw bedrijf groeien. Profiteer van training, ondersteuning en een groeiende markt." />
        <meta property="og:title" content="Word een Partner - InnoCraft.be | Odoo Partnerprogramma" />
        <meta property="og:description" content="Word een Odoo-partner met InnoCraft.be en laat uw bedrijf groeien. Profiteer van training, ondersteuning en een groeiende markt." />
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Word een <span className="gradient-text">InnoCraft Partner</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sluit u aan bij ons partnernetwerk en help bedrijven transformeren met de kracht van Odoo. Samen bouwen we aan succes.
            </p>
            <Button
              onClick={handleBecomePartner}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
            >
              Start Vandaag <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voordelen van het <span className="gradient-text">Partnerschap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek waarom honderden bedrijven ervoor kiezen om met ons samen te werken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4 inline-block">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Pricing = () => {
  const handlePlanClick = (planName) => {
    toast({
      title: `🚧 ${planName} Plan`,
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const plans = [
    {
      name: "Standard",
      price: "€19.90",
      userPrice: "per gebruiker / maand",
      description: "Alle Odoo-apps online.",
      features: [
        "Alle Odoo-apps",
        "Odoo Online hosting",
        "Onbeperkte ondersteuning",
        "Beveiligingsupdates"
      ],
      buttonText: "Koop Nu",
      popular: false,
    },
    {
      name: "Custom",
      price: "€29.90",
      userPrice: "per gebruiker / maand",
      description: "Voor bedrijven met specifieke behoeften.",
      features: [
        "Alle Standard-functies",
        "Odoo.sh cloudplatform",
        "Implementatie op locatie",
        "API-toegang",
        "Studio-aanpassingen"
      ],
      buttonText: "Koop Nu",
      popular: true,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Prijzen - InnoCraft.be | Transparante Odoo Prijzen</title>
        <meta name="description" content="Bekijk de transparante en betaalbare prijzen voor Odoo-oplossingen bij InnoCraft.be. Kies het plan dat het beste bij uw bedrijf past." />
        <meta property="og:title" content="Prijzen - InnoCraft.be | Transparante Odoo Prijzen" />
        <meta property="og:description" content="Bekijk de transparante en betaalbare prijzen voor Odoo-oplossingen bij InnoCraft.be. Kies het plan dat het beste bij uw bedrijf past." />
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Transparante <span className="gradient-text">Prijzen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kies het plan dat het beste bij uw bedrijf past. Eenvoudig, betaalbaar en zonder verborgen kosten.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full max-w-md rounded-2xl shadow-lg p-8 flex flex-col ${plan.popular ? 'border-4 border-purple-500 relative' : 'bg-gray-50'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Meest Populair
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.userPrice}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  size="lg"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white' : 'bg-white text-purple-600 border border-purple-300 hover:bg-purple-50'}`}
                >
                  {plan.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 text-gray-600">
            <p>Eén app is altijd gratis, inclusief onbeperkt aantal gebruikers.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
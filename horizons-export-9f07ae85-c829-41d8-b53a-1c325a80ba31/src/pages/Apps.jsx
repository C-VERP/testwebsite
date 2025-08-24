import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Apps = () => {
  const handleAppClick = (appName) => {
    toast({
      title: `🚧 ${appName}`,
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const categories = ["Sales", "Services", "Marketing", "Finance", "Inventory & MRP", "Human Resources", "Website", "Productivity"];
  
  const apps = [
    { name: "CRM", category: "Sales", description: "Beheer leads, opportunities en sluit meer deals." },
    { name: "eCommerce", category: "Website", description: "Bouw een prachtige online winkel." },
    { name: "Accounting", category: "Finance", description: "Automatiseer uw boekhouding." },
    { name: "Project", category: "Services", description: "Beheer projecten en taken efficiënt." },
    { name: "Inventory", category: "Inventory & MRP", description: "Optimaliseer uw voorraadbeheer." },
    { name: "Marketing Automation", category: "Marketing", description: "Automatiseer uw marketingcampagnes." },
    { name: "Recruitment", category: "Human Resources", description: "Stroomlijn uw wervingsproces." },
    { name: "Website Builder", category: "Website", description: "Creëer een professionele website." },
  ];

  return (
    <>
      <Helmet>
        <title>Apps - InnoCraft.be | Odoo Applicaties voor uw Bedrijf</title>
        <meta name="description" content="Ontdek alle Odoo-apps die InnoCraft.be aanbiedt om uw bedrijfsprocessen te stroomlijnen. Van CRM en eCommerce tot Boekhouding en Projectbeheer." />
        <meta property="og:title" content="Apps - InnoCraft.be | Odoo Applicaties voor uw Bedrijf" />
        <meta property="og:description" content="Ontdek alle Odoo-apps die InnoCraft.be aanbiedt om uw bedrijfsprocessen te stroomlijnen. Van CRM en eCommerce tot Boekhouding en Projectbeheer." />
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Alle <span className="gradient-text">Odoo Apps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een suite van open source bedrijfsapps die aan al uw bedrijfsbehoeften voldoen: CRM, eCommerce, boekhouding, inventaris, kassasysteem, projectbeheer, enz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Zoek een app..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <Button key={category} variant="ghost" className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
                onClick={() => handleAppClick(app.name)}
              >
                <div className="p-6 flex-grow">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full mb-4 inline-block">
                    {app.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{app.description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-2xl mt-auto">
                  <span className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                    Meer info <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Apps;
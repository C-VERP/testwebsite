import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, Calendar, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Community = () => {
  const handleCommunityLink = (linkName) => {
    toast({
      title: `🚧 ${linkName}`,
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const resources = [
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Forum",
      description: "Stel vragen en deel kennis met andere Odoo-gebruikers en experts.",
      linkText: "Bezoek het Forum"
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Blog & Tutorials",
      description: "Lees diepgaande artikelen, handleidingen en tutorials van onze experts.",
      linkText: "Lees onze Blog"
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Evenementen & Webinars",
      description: "Neem deel aan onze online en offline evenementen om meer te leren over Odoo.",
      linkText: "Bekijk Evenementen"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Gebruikersgroepen",
      description: "Sluit u aan bij lokale gebruikersgroepen om te netwerken en ervaringen uit te wisselen.",
      linkText: "Vind een Groep"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community - InnoCraft.be | Sluit u aan bij de Odoo Community</title>
        <meta name="description" content="Word lid van de InnoCraft.be Odoo-community. Krijg toegang tot forums, blogs, evenementen en meer om uw Odoo-kennis te vergroten." />
        <meta property="og:title" content="Community - InnoCraft.be | Sluit u aan bij de Odoo Community" />
        <meta property="og:description" content="Word lid van de InnoCraft.be Odoo-community. Krijg toegang tot forums, blogs, evenementen en meer om uw Odoo-kennis te vergroten." />
      </Helmet>

      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Sluit u aan bij onze <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maak deel uit van een groeiend netwerk van Odoo-gebruikers, ontwikkelaars en partners. Leer, deel en groei samen met ons.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">{resource.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Button
                  onClick={() => handleCommunityLink(resource.title)}
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  {resource.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
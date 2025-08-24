import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} Link`,
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Nieuwsbrief Inschrijving",
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const footerLinks = [
    {
      title: 'Community',
      links: [
        { name: 'Tutorials', path: '/resources' },
        { name: 'Forum', path: '/community' },
        { name: 'Blog', path: '/resources' },
      ],
    },
    {
      title: 'Diensten',
      links: [
        { name: 'Odoo Ondersteuning', path: '/services' },
        { name: 'Maatwerk', path: '/services' },
        { name: 'Word een Partner', path: '/partner' },
      ],
    },
    {
      title: 'Over Ons',
      links: [
        { name: 'Ons Bedrijf', path: '/about' },
        { name: 'Contacteer Ons', path: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold">InnoCraft.be</span>
            </div>
            <p className="text-gray-400 text-sm">
              Uw officiële Odoo-partner in België. Wij helpen bedrijven groeien met krachtige, geïntegreerde softwareoplossingen.
            </p>
            <div className="flex space-x-4">
              <button onClick={() => handleSocialClick('Facebook')} className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></button>
              <button onClick={() => handleSocialClick('Twitter')} className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></button>
              <button onClick={() => handleSocialClick('LinkedIn')} className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></button>
              <button onClick={() => handleSocialClick('Instagram')} className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></button>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <span className="text-lg font-semibold">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="block text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 InnoCraft.be. Alle rechten voorbehouden.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-purple-400" />
              <span>info@innocraft.be</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-purple-400" />
              <span>+32 2 123 45 67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-purple-400" />
              <span>Brussel, België</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
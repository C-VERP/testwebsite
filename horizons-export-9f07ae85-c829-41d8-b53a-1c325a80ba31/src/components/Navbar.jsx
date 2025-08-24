import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const NavItemWithDropdown = ({ item, closeMobileMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <Link
        to={item.path}
        className={`flex items-center text-sm font-medium transition-colors hover:text-purple-600 ${
          location.pathname.startsWith(item.path)
            ? 'text-purple-600'
            : 'text-gray-700'
        }`}
        onClick={handleLinkClick}
      >
        {item.name}
        {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>
      <AnimatePresence>
        {isDropdownOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
          >
            <div className="py-1">
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                  onClick={handleLinkClick}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Apps', 
      path: '/apps',
      dropdown: [
        { name: 'Alle Apps', path: '/apps' },
        { name: 'CRM', path: '/solutions' },
        { name: 'eCommerce', path: '/solutions' },
      ]
    },
    { name: 'Prijzen', path: '/pricing' },
    { 
      name: 'Diensten', 
      path: '/services',
      dropdown: [
        { name: 'Onze Diensten', path: '/services' },
        { name: 'Implementatie', path: '/services' },
        { name: 'Support', path: '/services' },
      ]
    },
    { 
      name: 'Community', 
      path: '/community',
      dropdown: [
        { name: 'Forum', path: '/community' },
        { name: 'Blog', path: '/resources' },
        { name: 'Events', path: '/community' },
      ]
    },
    { 
      name: 'Over Ons', 
      path: '/about',
      dropdown: [
        { name: 'Ons Bedrijf', path: '/about' },
        { name: 'Contacteer Ons', path: '/contact' },
      ]
    },
    { name: 'Word een Partner', path: '/partner' },
  ];

  const handleDemoClick = () => {
    toast({
      title: "🚧 Demo Aanvraag",
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };
  
  const handleLoginClick = () => {
    toast({
      title: "🚧 Inloggen",
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold gradient-text">InnoCraft.be</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItemWithDropdown key={item.name} item={item} />
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleDemoClick}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
            >
              Vraag Demo Aan
            </Button>
            <Button
              onClick={handleLoginClick}
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              Inloggen
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                      className={`flex justify-between items-center w-full px-3 py-2 text-base font-medium transition-colors hover:text-purple-600 ${
                        location.pathname === item.path
                          ? 'text-purple-600'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown className="h-5 w-5" />}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-3 py-2 space-y-2">
                  <Button
                    onClick={handleDemoClick}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  >
                    Vraag Demo Aan
                  </Button>
                  <Button
                    onClick={handleLoginClick}
                    variant="outline"
                    className="w-full border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    Inloggen
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
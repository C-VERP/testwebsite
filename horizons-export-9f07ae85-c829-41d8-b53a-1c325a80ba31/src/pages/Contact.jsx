import React from 'react';
import { Helmet } from 'react-helmet';
import { toast } from '@/components/ui/use-toast';
import HeroSection from '@/components/contact/HeroSection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import OfficeLocations from '@/components/contact/OfficeLocations';
import FaqSection from '@/components/contact/FaqSection';
import CtaSection from '@/components/contact/CtaSection';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contactformulier",
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  const handleScheduleCall = () => {
    toast({
      title: "🚧 Gesprek Inplannen",
      description: "Deze functie is nog niet geïmplementeerd, maar u kunt deze aanvragen in uw volgende prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacteer InnoCraft.be - Neem contact op voor softwareontwikkelingsoplossingen</title>
        <meta name="description" content="Neem contact op met InnoCraft.be voor uw softwareontwikkelingsbehoeften. Bereik ons via e-mail, telefoon of bezoek onze kantoren in Brussel, Antwerpen en Gent. Gratis consultatie beschikbaar." />
        <meta property="og:title" content="Contacteer InnoCraft.be - Neem contact op voor softwareontwikkelingsoplossingen" />
        <meta property="og:description" content="Neem contact op met InnoCraft.be voor uw softwareontwikkelingsbehoeften. Bereik ons via e-mail, telefoon of bezoek onze kantoren in Brussel, Antwerpen en Gent. Gratis consultatie beschikbaar." />
      </Helmet>

      <HeroSection />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm onSubmit={handleFormSubmit} />
            <ContactInfo onScheduleCall={handleScheduleCall} />
          </div>
        </div>
      </section>

      <OfficeLocations />
      <FaqSection />
      <CtaSection onScheduleCall={handleScheduleCall} />
    </>
  );
};

export default Contact;
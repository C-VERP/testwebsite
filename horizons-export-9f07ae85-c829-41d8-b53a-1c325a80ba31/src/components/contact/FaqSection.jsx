import React from 'react';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const faqs = [
    {
      question: "Hoe lang duurt een typisch project?",
      answer: "De doorlooptijd van een project varieert op basis van complexiteit en omvang. Eenvoudige applicaties kunnen 2-3 maanden duren, terwijl enterprise-oplossingen 6-12 maanden in beslag kunnen nemen. We geven gedetailleerde tijdlijnen tijdens ons eerste consult."
    },
    {
      question: "Bieden jullie doorlopende ondersteuning en onderhoud?",
      answer: "Ja, we bieden uitgebreide ondersteunings- en onderhoudspakketten om ervoor te zorgen dat uw software optimaal blijft presteren. Dit omvat bugfixes, updates en functieverbeteringen."
    },
    {
      question: "Met welke technologieën werken jullie?",
      answer: "We werken met een breed scala aan moderne technologieën, waaronder React, Node.js, Python, .NET, cloudplatforms (AWS, Azure, GCP) en mobiele frameworks voor iOS en Android."
    },
    {
      question: "Kunnen jullie helpen met de modernisering van legacy-systemen?",
      answer: "Absoluut! We zijn gespecialiseerd in het moderniseren van legacy-systemen en helpen bedrijven migreren naar moderne architecturen met behoud van kritieke bedrijfslogica en gegevens."
    },
    {
      question: "Werken jullie met startups of alleen met grote ondernemingen?",
      answer: "We werken met bedrijven van elke omvang, van startups tot grote ondernemingen. Onze oplossingen zijn schaalbaar en kunnen worden aangepast aan elk budget en elke vereiste."
    },
    {
      question: "Hoe waarborgen jullie projectbeveiliging en gegevensprivacy?",
      answer: "Beveiliging is onze topprioriteit. We volgen de beste praktijken uit de sector, implementeren robuuste beveiligingsmaatregelen en voldoen aan regelgeving zoals GDPR om uw gegevens en systemen te beschermen."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veelgestelde <span className="gradient-text">Vragen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vind antwoorden op veelgestelde vragen over onze diensten, ons proces en hoe we uw bedrijf kunnen helpen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
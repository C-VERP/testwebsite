import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = ({ onScheduleCall }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Klaar om uw Project te Starten?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Wacht niet om uw bedrijf te transformeren. Neem vandaag nog contact met ons op voor een gratis consultatie en laten we bespreken hoe we u kunnen helpen uw doelen te bereiken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onScheduleCall}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Gesprek
            </Button>
            <Button
              onClick={onScheduleCall}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan Afspraak
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
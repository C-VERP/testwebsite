import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Solutions from '@/pages/Solutions';
import Industries from '@/pages/Industries';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';
import Apps from '@/pages/Apps';
import Pricing from '@/pages/Pricing';
import Community from '@/pages/Community';
import Partner from '@/pages/Partner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
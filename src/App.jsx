import React, { useState, useEffect } from 'react';
import { ShoppingCart, Sun, Moon, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import CustomerSection from './components/CustomerSection';
import TestimonialSection from './components/TestimonialSection';
import SustainabilityStats from './components/StatsSection';
import EmbodiedCarbonGraph from './components/GraphsSection';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import BrandKitsCard from './components/Card';

// Custom CSS for animations
const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animation-delay-200 {
    animation-delay: 0.2s;
    opacity: 0;
  }
  
  .animation-delay-400 {
    animation-delay: 0.4s;
    opacity: 0;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

// Loader Component
const Loader = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-white/30 rounded-full animate-spin border-t-white"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-white/50"></div>
      </div>
      <p className="text-white text-xl font-semibold mt-4 animate-pulse">Loading...</p>
    </div>
  </div>
);

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              EcoShop
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in sustainable living. We curate the finest eco-friendly products 
              to help you make a positive impact on the planet.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Sustainability', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-gray-400">hello@ecoshop.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-green-400" />
                <span className="text-gray-400">123 Green Street, Eco City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EcoShop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    // Update local storage and document class when theme changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="pt-20"> {/* Increased padding-top from 16 to 20 */}
          <section id="brand-kits">
            <BrandKitsCard/>
          </section>
          <section id="sustainability">
            <SustainabilityStats />
          </section>
          <section id="graphs">
            <EmbodiedCarbonGraph/>
          </section>
          <section id="customers">
            <CustomerSection/>
          </section>
          <section id="testimonials">
            <TestimonialSection />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
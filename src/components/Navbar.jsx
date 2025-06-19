import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">EcoShop</div>
          <div className="flex items-center space-x-6">
            <button onClick={() => scrollToSection('brand-kits')} className="hover:text-green-500">
              Brand Kits
            </button>
            <button onClick={() => scrollToSection('sustainability')} className="hover:text-green-500">
              Sustainability
            </button>
            <button onClick={() => scrollToSection('graphs')} className="hover:text-green-500">
              Graphs
            </button>
            <button onClick={() => scrollToSection('customers')} className="hover:text-green-500">
              Customers
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-green-500">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-500">
              Contact
            </button>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

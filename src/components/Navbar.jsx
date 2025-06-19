import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-[100]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">EcoShop</div>
          
          {/* Mobile menu button - Updated for better visibility */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <X className="w-6 h-6" /> : 
              <Menu className="w-6 h-6" />
            }
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
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

        {/* Mobile Navigation - Updated styling */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-6 absolute left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg`}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col space-y-4 px-6">
            <button onClick={() => scrollToSection('brand-kits')} className="py-2 hover:text-green-500">
              Brand Kits
            </button>
            <button onClick={() => scrollToSection('sustainability')} className="py-2 hover:text-green-500">
              Sustainability
            </button>
            <button onClick={() => scrollToSection('graphs')} className="py-2 hover:text-green-500">
              Graphs
            </button>
            <button onClick={() => scrollToSection('customers')} className="py-2 hover:text-green-500">
              Customers
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="py-2 hover:text-green-500">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="py-2 hover:text-green-500">
              Contact
            </button>
            <button onClick={toggleDarkMode} className="py-2 hover:text-green-500 flex items-center">
              {darkMode ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

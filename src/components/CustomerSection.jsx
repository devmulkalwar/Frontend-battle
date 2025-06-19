import React, { useEffect, useState } from 'react';

const CustomerSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const customers = [
    {
      name: 'Perplexity',
      id: 'perplexity',
      logo: (
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <div className="w-7 h-7 bg-white dark:bg-gray-100 rounded-md flex items-center justify-center shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-black">
              <path
                fill="currentColor"
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-gray-800 dark:text-gray-200 font-medium text-lg tracking-wide">
            perplexity
          </span>
        </div>
      )
    },
    {
      name: 'Supercell',
      id: 'supercell',
      logo: (
        <div className="text-gray-800 dark:text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center">
            <span className="bg-gray-800 dark:bg-white text-white dark:text-black px-3 py-1 rounded text-sm font-black tracking-wider">
              SUP
            </span>
            <span className="text-gray-800 dark:text-white font-black tracking-wider text-sm">
              ERCELL
            </span>
          </div>
        </div>
      )
    },
    {
      name: 'Monzo',
      id: 'monzo',
      logo: (
        <div className="text-gray-800 dark:text-white font-light text-2xl tracking-wider group-hover:scale-105 transition-transform duration-300">
          monzo
        </div>
      )
    },
    {
      name: 'Raycast',
      id: 'raycast',
      logo: (
        <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
          <div className="w-7 h-7 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
            Raycast
          </span>
        </div>
      )
    },
    {
      name: 'Retool',
      id: 'retool',
      logo: (
        <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
          <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" className="text-white">
              <path
                fill="currentColor"
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
          </div>
          <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
            Retool
          </span>
        </div>
      )
    },
    {
      name: 'Mercury',
      id: 'mercury',
      logo: (
        <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
          <div className="w-7 h-7 bg-gray-400 dark:bg-gray-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
          </div>
          <span className="text-gray-600 dark:text-gray-300 font-medium text-lg tracking-widest">
            MERCURY
          </span>
        </div>
      )
    }
  ];

  return (
    <section 
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
      aria-label="Trusted by leading companies"
    >
      <div className="max-w-7xl mx-auto">
        {/* Optional Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Trusted by
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className={`
                group flex items-center justify-center min-h-[80px] p-4
                hover:bg-gray-50 dark:hover:bg-gray-800 
                rounded-xl transition-all duration-300 cursor-pointer
                transform hover:scale-105 hover:shadow-lg
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '600ms'
              }}
              role="img"
              aria-label={`${customer.name} logo`}
            >
              <div className="flex items-center justify-center w-full max-w-[200px]">
                {customer.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Optional Stats or CTA */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join thousands of companies that trust our platform
          </p>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CustomerSection;
import React, { useState } from 'react';

const BrandKitsCard = () => {
  const [selectedBrand, setSelectedBrand] = useState('agency');

  const brandKits = [
    {
      id: 'ecorp',
      name: 'ECorp',
      color: '#00C29F'
    },
    {
      id: 'icorp',
      name: 'ICorp',
      color: '#FFB300'
    },
    {
      id: 'agency',
      name: 'The Agency',
      color: '#FF4D4D'
    }
  ];

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
  };

  const handleSettingsClick = (brandName, e) => {
    e.stopPropagation();
    console.log(`Settings clicked for ${brandName}`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-2xl my-16">
      <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl">
        <h2 className="text-white text-lg font-semibold mb-4">Brand Kits</h2>
        
        <div className="space-y-3">
          {brandKits.map((brand) => {
            const isSelected = selectedBrand === brand.id;

            return (
              <div
                key={brand.id}
                onClick={() => handleBrandSelect(brand.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? 'bg-zinc-700 hover:bg-zinc-600' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
              >
                <div className="flex items-center">
                  {/* Checkbox */}
                  <div className={`w-5 h-5 rounded-sm flex items-center justify-center border transition-all duration-200 ${
                    isSelected
                      ? 'bg-purple-600 border-purple-600'
                      : 'border-zinc-700 bg-transparent'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>

                  {/* Overlapping dots */}
                  <div className="flex items-center ml-3">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-zinc-700 relative z-10"></div>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-zinc-700 -ml-2 relative z-0"
                      style={{ backgroundColor: brand.color }}
                    ></div>
                  </div>

                  {/* Brand Name */}
                  <span className="text-white font-medium ml-3">{brand.name}</span>
                </div>

                {/* Settings Button */}
                <button
                  onClick={(e) => handleSettingsClick(brand.name, e)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-md hover:bg-zinc-600"
                >
                  <span className="settings-icon">⚙️</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandKitsCard;


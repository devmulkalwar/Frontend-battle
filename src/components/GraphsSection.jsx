import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Download } from 'lucide-react';

const EmbodiedCarbonGraph = () => {
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('Complete');

  // Data extracted from the image - matching exact values
  const allData = [
    { name: 'A', refurbishment: 549, newBuild: 278 },
    { name: 'B', refurbishment: 875, newBuild: null },
    { name: 'C', refurbishment: 617, newBuild: null },
    { name: 'D', refurbishment: 506, newBuild: 36 },
    { name: 'E', refurbishment: 185, newBuild: null },
    { name: 'F', refurbishment: 191, newBuild: null },
    { name: 'G', refurbishment: 122, newBuild: null },
    { name: 'H', refurbishment: 550, newBuild: null },
    { name: 'I', refurbishment: 881, newBuild: null },
    { name: 'J', refurbishment: 539, newBuild: 269 },
    { name: 'K', refurbishment: null, newBuild: 29 },
    { name: 'L', refurbishment: null, newBuild: 82 },
    { name: 'M', refurbishment: null, newBuild: 44 },
    { name: 'N', refurbishment: null, newBuild: 109 },
    { name: 'O', refurbishment: null, newBuild: 106 },
    { name: 'P', refurbishment: 607, newBuild: 528 }
  ];

  const getFilteredData = () => {
    return allData.map(item => {
      const result = { name: item.name };
      
      if (typeFilter === 'All') {
        if (item.refurbishment) result.refurbishment = item.refurbishment;
        if (item.newBuild) result.newBuild = item.newBuild;
      } else if (typeFilter === 'Refurbishment') {
        if (item.refurbishment) result.refurbishment = item.refurbishment;
      } else if (typeFilter === 'New build') {
        if (item.newBuild) result.newBuild = item.newBuild;
      }
      
      return result;
    }).filter(item => item.refurbishment || item.newBuild);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold text-gray-800 mb-1">Project {label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.dataKey === 'refurbishment' ? 'Refurbishment' : 'New Build'}: {entry.value} kgCO₂e/m²
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ x, y, width, value, height }) => {
    if (!value || value === 0) return null;
    
    return (
      <text
        x={x + width / 2}
        y={y - 8}
        fill="#374151"
        textAnchor="middle"
        fontSize="12"
        fontWeight="500"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="bg-stone-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          {/* Left Side - Filters and Legend */}
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            {/* Filter by Label */}
            <h2 className="text-lg font-medium text-gray-700 mb-4">Filter by</h2>
            
            {/* Type Filters */}
            <div className="mb-6">
              <span className="text-sm text-gray-600 mb-3 block font-medium">Type</span>
              <div className="flex gap-3">
                {['Refurbishment', 'New build', 'All'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      typeFilter === type
                        ? 'bg-[#8B4B4B] text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#8B4B4B] hover:text-[#8B4B4B]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        typeFilter === type ? 'bg-white' : 'bg-[#8B4B4B]'
                      }`}></div>
                      {type}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filters */}
            <div className="mb-8">
              <span className="text-sm text-gray-600 mb-3 block font-medium">Status</span>
              <div className="flex gap-3">
                {['Complete', 'Estimate'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      statusFilter === status
                        ? 'bg-[#8B4B4B] text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#8B4B4B] hover:text-[#8B4B4B]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend/Key */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Key</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0 border-t-2 border-dashed border-gray-500"></div>
                  <span>500 kgCO₂e/m² - Embodied Carbon Target 2030</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0 border-t-2 border-solid border-gray-700"></div>
                  <span>600 kgCO₂e/m² - Embodied Carbon Target 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Title Section */}
          <div className="text-right lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                <div className="text-black">EMBODIED</div>
                <div className="text-[#8B4B4B]">CARBON</div>
                <div className="text-[#8B4B4B]">EMISSIONS</div>
              </h1>
              <p className="text-gray-600 text-lg mt-4">
                Intensity measured by kgCO₂e/m²
              </p>
            </div>
            
            {/* Download Button */}
            <button 
              className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200 group ml-auto"
              aria-label="Download the data"
            >
              <span className="text-sm">Download the data</span>
              <div className="p-2 rounded-full border border-gray-400 group-hover:border-gray-600 transition-colors duration-200">
                <Download className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Chart Section with horizontal scroll on small screens */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <div 
            className="min-w-full"
            style={{ 
              height: '500px', 
              padding: '20px',
              minWidth: '768px' // Ensures chart maintains minimum width for readability
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={getFilteredData()}
                margin={{
                  top: 40,
                  right: 30,
                  left: 60,
                  bottom: 20,
                }}
                barCategoryGap="15%"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  height={40}
                />
                
                <YAxis 
                  domain={[0, 1200]}
                  ticks={[0, 200, 400, 600, 800, 1000, 1200]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  label={{ 
                    value: 'Embodied carbon intensity (kgCO₂e/m²)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { textAnchor: 'middle', fontSize: '12px', fill: '#6b7280' }
                  }}
                />
                
                {/* Reference Lines */}
                <ReferenceLine 
                  y={500} 
                  stroke="#9ca3af" 
                  strokeDasharray="8 4"
                  strokeWidth={1}
                />
                <ReferenceLine 
                  y={600} 
                  stroke="#4b5563" 
                  strokeWidth={1}
                />
                
                <Tooltip content={<CustomTooltip />} />
                
                {(typeFilter === 'All' || typeFilter === 'Refurbishment') && (
                  <Bar 
                    dataKey="refurbishment" 
                    fill="#8B4B4B"
                    radius={[0, 0, 0, 0]}
                    label={<CustomLabel />}
                  />
                )}
                
                {(typeFilter === 'All' || typeFilter === 'New build') && (
                  <Bar 
                    dataKey="newBuild" 
                    fill="#D4A5A5"
                    radius={[0, 0, 0, 0]}
                    label={<CustomLabel />}
                  />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbodiedCarbonGraph;
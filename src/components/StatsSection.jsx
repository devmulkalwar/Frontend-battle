import React from 'react';
import { ArrowUp, ArrowDown, ChevronRight, Download } from 'lucide-react';

const SustainabilityStats = () => {
  // Mock data based on the image
  const metricsData = [
    {
      title: "Managed portfolio carbon footprint",
      value: "45,048",
      unit: "tCO₂e",
      trend: {
        direction: "up",
        percentage: "16%",
        isPositive: false
      },
      yearlyData: [
        { year: "2022", value: "45,048", percentage: 100 },
        { year: "2021", value: "14,111", percentage: 31 },
        { year: "2020", value: "32,813", percentage: 73 },
        { year: "2019", value: "38,673", percentage: 86 }
      ],
      ctaText: "See full breakdown of carbon footprint",
      ctaIcon: "arrow"
    },
    {
      title: "Managed portfolio energy intensity",
      value: "123",
      unit: "kWh/m²",
      trend: {
        direction: "down",
        percentage: "22%",
        isPositive: true
      },
      yearlyData: [
        { year: "2022", value: "123", percentage: 78 },
        { year: "2021", value: "128", percentage: 82 },
        { year: "2020", value: "135", percentage: 86 },
        { year: "2019", value: "157", percentage: 100 }
      ],
      ctaText: "Download the data",
      ctaIcon: "download"
    },
    {
      title: "Managed portfolio energy consumption",
      value: "47,790,662",
      unit: "kWh",
      trend: {
        direction: "down",
        percentage: "27%",
        isPositive: true
      },
      yearlyData: [
        { year: "2022", value: "47,790,662", percentage: 73 },
        { year: "2021", value: "49,324,077", percentage: 76 },
        { year: "2020", value: "48,784,205", percentage: 75 },
        { year: "2019", value: "65,198,706", percentage: 100 }
      ],
      ctaText: "Download the data",
      ctaIcon: "download"
    }
  ];

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {metricsData.map((metric, index) => (
            <div key={index} className="space-y-8">
              {/* Header Section */}
              <div className="space-y-4">
                {/* Title */}
                <h2 className="text-[#6b2f2f] text-lg font-normal leading-tight">
                  {metric.title}
                </h2>
                
                {/* Main Value and Unit */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-[#6b2f2f] text-5xl font-light">
                    {metric.value}
                  </span>
                  <span className="text-[#6b2f2f] text-lg font-normal">
                    {metric.unit}
                  </span>
                </div>
                
                {/* Trend Indicator */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {metric.trend.direction === "up" ? (
                      <ArrowUp className={`w-4 h-4 ${metric.trend.isPositive ? 'text-green-600' : 'text-red-500'}`} />
                    ) : (
                      <ArrowDown className={`w-4 h-4 ${metric.trend.isPositive ? 'text-green-600' : 'text-red-500'}`} />
                    )}
                    <span className={`text-sm font-medium ${metric.trend.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                      {metric.trend.percentage}
                    </span>
                  </div>
                  <span className="text-[#6b2f2f] text-sm">
                    from 2019
                  </span>
                </div>
              </div>

              {/* Yearly Data Section */}
              <div className="space-y-4">
                {metric.yearlyData.map((yearData, yearIndex) => (
                  <div key={yearIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#6b2f2f] text-sm font-medium">
                        {yearData.year}
                      </span>
                      <span className="text-[#6b2f2f] text-sm">
                        {formatNumber(yearData.value)}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#8b4a4a] h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${yearData.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="pt-4">
                <button 
                  className="flex items-center space-x-3 text-[#6b2f2f] hover:text-[#8b4a4a] transition-colors duration-200 group"
                  aria-label={metric.ctaText}
                >
                  <span className="text-sm font-medium">
                    {metric.ctaText}
                  </span>
                  <div className="w-8 h-8 border border-[#6b2f2f] rounded-full flex items-center justify-center group-hover:border-[#8b4a4a] transition-colors duration-200">
                    {metric.ctaIcon === "arrow" ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityStats;
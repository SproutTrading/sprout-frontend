import React from 'react';

const AllocationPieChart: React.FC = () => {
  // Calculate stroke-dasharray values based on percentages (circumference = 2πr = 2 * π * 40 ≈ 251.33)
  const circumference = 251.33;
  const segments = [
    { percent: 3, color: 'rgb(251 191 36)', label: '1st: 3.00%' },
    { percent: 2, color: 'rgb(156 163 175)', label: '2nd: 2.00%' },
    { percent: 1.5, color: 'rgb(249 115 22)', label: '3rd: 1.50%' },
    { percent: 5.25, color: 'rgb(147 51 234)', label: '4-10: 5.25%' },
    { percent: 5.25, color: 'rgb(59 130 246)', label: '11-25: 5.25%' },
    { percent: 3, color: 'rgb(16 185 129)', label: '26-50: 3.00%' }
  ];

  let currentOffset = 0;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="relative w-80 h-80">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          {segments.map((segment, index) => {
            const offset = currentOffset;
            const dashArray = (segment.percent / 20) * circumference;
            currentOffset += dashArray;

            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={segment.color}
                strokeWidth="20"
                strokeDasharray={`${dashArray} ${circumference}`}
                strokeDashoffset={-offset}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: segment.color }}
            />
            <span className="text-sm text-gray-700">{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllocationPieChart;
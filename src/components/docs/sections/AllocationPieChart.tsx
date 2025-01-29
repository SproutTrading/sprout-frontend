import React from 'react';

const AllocationPieChart: React.FC = () => {
  // Calculate stroke-dasharray values based on percentages (circumference = 2πr = 2 * π * 40 ≈ 251.33)
  const circumference = 251.33;
  const segments = [
    { percent: 10, color: 'rgb(16 185 129)', label: '1st: 10.00%' },
    { percent: 7.5, color: 'rgb(52 211 153)', label: '2nd: 7.50%' },
    { percent: 5, color: 'rgb(110 231 183)', label: '3rd: 5.00%' },
    { percent: 2.5, color: 'rgb(167 243 208)', label: '4th: 2.50%' },
    { percent: 75, color: 'rgb(209 250 229)', label: '5-50: 75%' },
  ];

  let currentOffset = 0;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="relative w-80 h-80">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          {segments.map((segment, index) => {
            const offset = currentOffset;
            const dashArray = (segment.percent / 100) * circumference;
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
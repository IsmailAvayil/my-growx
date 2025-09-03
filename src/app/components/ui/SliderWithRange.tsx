"use client";

import { useState } from "react";

interface SliderWithRangeProps {
  leftLabel: string;
  rightLabel: string;
}

export default function SliderWithRange({
  leftLabel,
  rightLabel,
}: SliderWithRangeProps) {
  const [value, setValue] = useState(60);

  return (
    <div className="w-full mx-auto">
      {/* Labels */}
      <div className="flex justify-between mb-4 text-sm font-semibold text-black">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>

      {/* Slider & Tooltip */}
      <div className="relative w-full">
        {/* Tooltip */}
        <div
          className="absolute left-0 -top-8 transform -translate-x-1/2"
          style={{ left: `${value}%` }}
        >
          <div className="relative flex flex-col items-center">
            <div className="text-xs font-semibold text-black border border-orange-500 rounded-full px-2 py-1 bg-white">
              {value}%
            </div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-500"></div>
          </div>
        </div>

        {/* Range Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full appearance-none h-2 rounded-full focus:outline-none"
          style={{
            background: `linear-gradient(to right, #FF5722 ${value}%, #f3f3f3 ${value}%)`,
          }}
          disabled
        />

        {/* Custom Thumb Styling */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 9999px;
            background: #ff5722;
            cursor: pointer;
            border: none;
            margin-top: -2px;
          }

          input[type="range"]::-moz-range-thumb {
            height: 16px;
            width: 16px;
            border-radius: 9999px;
            background: #ff5722;
            cursor: pointer;
            border: none;
          }
        `}</style>
      </div>
    </div>
  );
}

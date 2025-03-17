"use client";
import React, { useEffect, useState } from "react";

const CircleStat = ({
  title,
  data,
}: {
  title: string;
  data: { label: string; value: number; color: string }[];
}) => {
  const [renderedData, setRenderedData] = useState<typeof data | null>(null);

  useEffect(() => {
    setRenderedData(data);
  }, [data]);

  if (!renderedData) return null;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const getPieSlice = (value: number, color: string) => {
    const percentage = value / total;
    const startAngle = cumulativePercentage * 360;
    const endAngle = (cumulativePercentage + percentage) * 360;
    cumulativePercentage += percentage;

    const x1 = 50 + 40 * Math.cos((Math.PI * startAngle) / 180);
    const y1 = 50 + 40 * Math.sin((Math.PI * startAngle) / 180);
    const x2 = 50 + 40 * Math.cos((Math.PI * endAngle) / 180);
    const y2 = 50 + 40 * Math.sin((Math.PI * endAngle) / 180);

    const largeArcFlag = percentage > 0.5 ? 1 : 0;

    return (
      <path
        key={color}
        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
        fill={color}
        stroke="white"
        strokeWidth="2"
      />
    );
  };

  return (
    <div className="bg-white border border-[#DCDCDC] rounded-[12px] px-2 py-1  ">
      {/* <h3 className="text-lg font-semibold text-center mb-3">{title}</h3> */}

      <div className="flex items-center gap-4">
        {/* Legend */}
        <div className="flex-1 space-y-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2  font-poppins text-[11px]"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="">{item.label}:</span>
              <span className="ml-auto font-">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Pie Chart with a Hole (Doughnut Style) */}
        <div className="relative w-[110px] h-[110px]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {data.map((item) => getPieSlice(item.value, item.color))}
            {/* Center Cut-out Circle */}
            <circle cx="50" cy="50" r="30" fill="white" />
          </svg>

          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-[20px] font-poppins font-bold">{total}</span>
            <p className="text-[10px] text-[#9A9A9A]">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleStat;

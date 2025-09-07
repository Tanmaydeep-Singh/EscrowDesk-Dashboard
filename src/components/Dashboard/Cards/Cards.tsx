import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  subtitle: string;
  trend?: string;
}

const Card = ({ title, value, subtitle, trend }: CardProps) => {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl shadow w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm text-gray-400">{title}</h3>
        {trend && <span className="text-xs text-green-400">{trend}</span>}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default Card;

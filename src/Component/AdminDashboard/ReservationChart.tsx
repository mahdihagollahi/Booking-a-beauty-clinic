'use client'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "فیشال صورت", value: 550 },
  { name: "لیزر دست", value: 350 },
  { name: "پاکسازی پوست", value: 200 },
  { name: "تزریق ژل لب", value: 700 },
  { name: "ساکشن غبغب", value: 500 },
  { name: "لیزر فول بادی", value: 150 },
  { name: "فیلر چانه", value: 450 },
];

const ReservationChart = () => {
  return (
    <div className="w-full h-96 App bg-gray-100 p-5 min-h-screen">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <h1 className="text-2xl font-bold mb-5 text-center">
            مجموع رزروهای یک هفته
          </h1>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="url(#colorUv)" barSize={50} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6699" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#cc66ff" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReservationChart;

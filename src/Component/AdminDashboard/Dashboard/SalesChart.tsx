"use client";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "شنبه", فروش: 400 },
  { name: "یک‌شنبه", فروش: 300 },
  { name: "دو‌شنبه", فروش: 500 },
  { name: "سه‌شنبه", فروش: 700 },
  { name: "چهار‌شنبه", فروش: 600 },
  { name: "پنج‌شنبه", فروش: 450 },
  { name: "جمعه", فروش: 800 },
];

function SalesChart() {
  return (
    <div className="bg-white w-[500px] h-64 rounded-[15px] shadow-md p-2 absolute mr-[37%] md:-mt-[56%]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <h3 style={{ textAlign: "center" }}>آمار فروش هفتگی</h3>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff69b4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff69b4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="فروش"
            stroke="#ff69b4"
            fillOpacity={1}
            fill="url(#colorSales)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;

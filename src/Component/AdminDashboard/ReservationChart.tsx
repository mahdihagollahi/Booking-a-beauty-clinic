// 'use client'
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "فیشال صورت", value: 550 },
//   { name: "لیزر دست", value: 350 },
//   { name: "پاکسازی پوست", value: 200 },
//   { name: "تزریق ژل لب", value: 700 },
//   { name: "ساکشن غبغب", value: 500 },
//   { name: "لیزر فول بادی", value: 150 },
//   { name: "فیلر چانه", value: 450 },
// ];

// const ReservationChart = () => {
//   return (
//     <div className=" App mx-5 rounded-lg bg-white ">
//         <p className="text-sm font-medium mt-5 text-right p-3">
//             مجموع رزروهای یک هفته
//           </p>
//       <ResponsiveContainer width={733} height={353}>
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//         >
        
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" className="w-full"/>
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value"  fill="url(#colorUv)" barSize={10} />
//           <defs>
//             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#ff6699" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#cc66ff" stopOpacity={0.8} />
//             </linearGradient>
//           </defs>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ReservationChart;

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
    <div className="App mx-5 rounded-lg bg-white">
      <p className="text-sm font-medium mt-5 text-right p-3">
        مجموع رزروهای یک هفته
      </p>
      <ResponsiveContainer width={733} height={353}>
        <BarChart
          data={data}
          margin={{ top: 2, right: 2, left: 2, bottom: 2 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} className="  font-medium text-[10px]" tick={{ fill: "#DC1E7A" }} /> {/* رنگ لیبل */}
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="url(#colorUv)" barSize={10}
            radius={[10, 10, 10, 10]}
          />
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


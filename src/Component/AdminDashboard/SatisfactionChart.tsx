import React from "react";
const SatisfactionChart = () => (
    <div className="mt-8">
      <div className="flex justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-pink-400"></div>
          <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-8 border-blue-400"></div>
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full border-8 border-green-400"></div>
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full border-8 border-purple-400"></div>
        </div>
      </div>
      <ul className="mt-4 text-xs">
        <li className="flex justify-between">
          <span>ساینس قلب</span> <span className="text-pink-400">۹۰٪</span>
        </li>
        <li className="flex justify-between">
          <span>امیر رضایان</span> <span className="text-blue-400">۸۰٪</span>
        </li>
        <li className="flex justify-between">
          <span>فیزیوتراپ</span> <span className="text-green-400">۷۰٪</span>
        </li>
        <li className="flex justify-between">
          <span>فدراپ</span> <span className="text-purple-400">۶۰٪</span>
        </li>
      </ul>
    </div>
  );
  export default SatisfactionChart;
"use client";
import React, { useState, Fragment } from "react";

const RoutButton = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  return (
    <Fragment>
      <div className="flex  items-center">
        <button
          onClick={() => handleClick(1)}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 
            ${
              activeButton === 1
                ? "bg-[#DC1E7A] text-white"
                : "bg-[#FFF2F8] text-[#393939]"
            }
            rounded-r-lg hover:bg-[#DC1E7A] hover:text-white`}
        >
          تزریقات زیبایی
        </button>

        <button
          onClick={() => handleClick(2)}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 
            ${
              activeButton === 2
                ? "bg-[#DC1E7A] text-white"
                : "bg-[#FFF2F8] text-[#393939]"
            }
            hover:bg-[#DC1E7A] hover:text-white`}
        >
          لیزر موهای زائد
        </button>

        <button
          onClick={() => handleClick(3)}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 
            ${
              activeButton === 3
                ? "bg-[#DC1E7A] text-white"
                : "bg-[#FFF2F8] text-[#393939]"
            }
            rounded-l-lg hover:bg-[#DC1E7A] hover:text-white`}
        >
          انواع کاشت
        </button>
      </div>
    </Fragment>
  );
};

export default RoutButton;

import React, { useState, Fragment } from "react";

const ServiceButtons = ({  setSelectedService }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (buttonIndex: number, service: string) => {
    setActiveButton(buttonIndex);
    setSelectedService(service);
  };

  return (
    <Fragment>
      <div className="flex  items-center">
        <button
          onClick={() => handleClick(1, "تزریقات زیبایی")}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 ${
            activeButton === 1
              ? "bg-[#DC1E7A] text-white"
              : "bg-gray-200 text-gray-800"
          }  rounded-r-lg hover:bg-[#DC1E7A] hover:text-white`}
        >
          تزریقات زیبایی
        </button>

        <button
          onClick={() => handleClick(2, "لیزر موهای زائد")}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 ${
            activeButton === 2
              ? "bg-[#DC1E7A] text-white"
              : "bg-gray-200 text-gray-800"
          }   hover:bg-[#DC1E7A] hover:text-white`}
        >
          لیزر موهای زائد
        </button>

        <button
          onClick={() => handleClick(3, "فشیال صورت")}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 ${
            activeButton === 3
              ? "bg-[#DC1E7A] text-white"
              : "bg-gray-200 text-gray-800"
          }   hover:bg-[#DC1E7A] hover:text-white`}
        >
          فشیال صورت
        </button>

        <button
          onClick={() => handleClick(4, "انواع کاشت")}
          className={`p-2 whitespace-nowrap font-medium text-base w-28 h-12 ${
            activeButton === 4
              ? "bg-[#DC1E7A] text-white"
              : "bg-gray-200 text-gray-800"
          }  rounded-l-lg hover:bg-[#DC1E7A] hover:text-white`}
        >
          انواع کاشت
        </button>
      </div>
    </Fragment>
  );
};

export default ServiceButtons;

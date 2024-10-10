"use client";
import React, { Fragment, useState } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
const EditUser = () => {
  const [selectedOption, setSelectedOption] = useState("ادمین");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["ادمین", "نویسنده", "پزشکان", "گزارشات مالی"];
  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[100%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[57%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">اطلاعات کاربر</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="mt-3 mr-2 text-[#2B2B2B] font-medium text-base">
         نام:
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            />
          </div>
          <div>
            <p className="mt-3 mr-2 text-[#2B2B2B] font-medium text-base">
             نام خانوادگی :

            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="mt-3 mr-2 text-[#2B2B2B] font-medium text-base">
              شماره تماس :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            />
          </div>
          <div>
            <div className="relative w-[457px] ">
              <p className="font-medium mb-2 text-base text-[#393939]  mr-1">
                نقش ها :
              </p>
              <div
                className="w-full p-4 border border-gray-300 text-[#393939] rounded-lg bg-white cursor-pointer flex justify-between items-center"
                onClick={toggleDropdown}
              >
                <span>{selectedOption}</span>
                <svg
                  className={`w-10 h-5 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {isOpen && (
                <ul className="absolute w-full rounded-lg bg-white mt-2 z-10">
                  {options.map((option) => (
                    <li
                      key={option}
                      className="p-4 hover:bg-gray-300 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <button className="bg-[#DC1E7A] mt-40 mr-[86%] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
        اعمال تغیراتت
        </button>
      </div>
    </Fragment>
  );
};

export default EditUser;

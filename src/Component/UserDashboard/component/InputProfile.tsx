"use client";
import React, { Fragment, useState } from "react";
import ProfileData from "./ProfileData";
import AroowDown from "@/assent/Img/UserDashboard/AroowDown.svg";
const InputProfile = () => {
  const [selectedOption, setSelectedOption] = useState("خانم");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["خانم", "آقا"];

  const DataUser = ProfileData().Profile;
  return (
    <Fragment>
      {DataUser.map((items, index) => (
        <div className="grid grid-cols-2 gap-3 mt-20 " key={index}>
          <div className="">
            <p className="font-medium text-base mb-2 text-[#393939] mr-1">
              نام:
            </p>
            <input
              type="text"
              value={items.name}
              className="w-[528px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg"
            />
          </div>

          <div>
            <p className="font-medium mb-2 text-base   mr-1">نام خانوادگی:</p>
            <input
              type="text"
              value={items.lastname}
              className="w-[528px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg"
            />
          </div>

          <div>
            <p className="font-medium mb-2 text-base   mr-1">تاریخ تولد:</p>
            <input
              type="text"
              value={items.birthyear}
              className="w-[528px] p-4  border border-[#00AEFF] text-[#00AEFF] rounded-lg"
            />
          </div>

          <div>
            <p className="font-medium mb-2 text-base   mr-1">کد ملی:</p>
            <input
              type="text"
              value={items.nationalCode}
              className="w-[528px] p-4  border border-[#00AEFF] text-[#00AEFF] rounded-lg"
            />
          </div>

          <div>
            <p className="font-medium mb-2 text-base text-[#393939]  mr-1">
              شماره تماس:
            </p>
            <input
              type="text"
              value={items.phoNumber}
              className="w-[528px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg"
            />
          </div>

          <div>
            <p className="font-medium mb-2 text-base text-[#393939]  mr-1">
              ایمیل:
            </p>
            <input
              type="text"
              value={items.Email}
              className="w-[528px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg"
            />
          </div>

          {/* <div>
          <p className="font-medium mb-2 text-base text-[#393939]  mr-1">جنسیت</p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg"
          />
        </div> */}

          <div className="relative w-[528px] mb-4">
            <div
              className="w-full p-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg bg-white cursor-pointer flex justify-between items-center"
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
              <ul className="absolute w-80  rounded-lg bg-white mt-2 z-10">
                {options.map((option) => (
                  <li
                    key={option}
                    className="p-4 hover:text-[#00AEFF] cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default InputProfile;

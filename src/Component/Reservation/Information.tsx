"use client";
import React, { useState } from "react";
import Navbar from "../Landing/Navbar";
import Image from "next/image";
import InformationReservation from "@/assent/Img/Reservation/InformationReservation.svg";
import AppointmentReservation from "./AppointmentReservation";
import Link from "next/link";
const Information = () => {
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
  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="py-20 px-8 md:px-20">
        <AppointmentReservation />

        <div className="mt-16 text-center px-24">
          <Image
            src={InformationReservation}
            width={11000}
            height={83}
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-2 gap-20 items-center mt-10 mr-20">
        <div className="">
          <p className="font-medium text-base mb-2 text-[#393939] mr-1">نام:</p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">
            نام خانوادگی:
          </p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">
            کد ملی:
          </p>
          <input
            type="text"
            className="w-[528px] p-4  border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">
            تاریخ تولد:
          </p>
          <input
            type="text"
            className="w-[528px] p-4  border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">
            شماره تماس:
          </p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">
            ایمیل:
          </p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="relative w-[528px] -mt-40">
          <p className="font-medium mb-2 text-base text-[#393939]  mr-1">
            جنسیت:
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

        <div className="flex gap-8 mr-[159.7%] mb-40">
         
        </div>
      </div>
      <div className="flex gap-8 mr-[68.5%] mb-40 mt-12">
        <Link href='/Resevaion/SetTime'>
          <button className=" whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#727272] bg-[#DDDDDD] font-medium text-sm">
            مرحله قبل
          </button>
          </Link>

          <Link href='/Resevaion/Peyment'>
          <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
            تایید و ادامه
          </button>
          </Link>
        </div>
    </div>
  );
};

export default Information;

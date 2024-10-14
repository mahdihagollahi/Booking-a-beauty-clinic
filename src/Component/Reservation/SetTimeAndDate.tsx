"use client";

import React, { useState } from "react";
import moment from "moment-jalaali";
import Navbar from "../Landing/Navbar";
import Image from "next/image";
import SelectTime from "@/assent/Img/Reservation/SelectTime.svg";
import AppointmentReservation from "./AppointmentReservation";
import Link from "next/link";

moment.loadPersian({ dialect: "persian-modern" });

const SetTimeAndDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(moment().jMonth());
  const [year, setYear] = useState(moment().jYear());
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const preSelectedTimes = ["13:00", "17:00", "20:00"];

  const handleSelectTime = (time) => {
    if (!preSelectedTimes.includes(time)) {
      setSelectedTime(time);
    }
  };

  const daysInMonth = moment.jDaysInMonth(year, month);
  const firstDay = moment(`${year}/${month + 1}/01`, "jYYYY/jM/jD").weekday(); 

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const goToNextMonth = () => {
    setMonth((prev) => (prev + 1) % 12);
    if (month === 11) setYear(year + 1);
  };

  const goToPrevMonth = () => {
    setMonth((prev) => (prev - 1 + 12) % 12);
    if (month === 0) setYear(year - 1);
  };

  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="py-20 px-8 md:px-20">
      <AppointmentReservation/>


        <div className="mt-16 text-center px-24">
          <Image src={SelectTime} width={11000} height={83} alt="" />
        </div>
        <p className="font-medium text-lg mt-10 text-[#393939]">
          انتخاب تاریخ و زمان
        </p>
        <div className="flex gap-[30%]">
          <div className="bg-white py-10 px-6 w-[40%] rounded-2xl shadow-md  mx-auto mt-20">
            <div className="flex justify-between items-center">
              <button
                className="text-[#A5A5A5] px-14 whitespace-nowrap"
                onClick={goToPrevMonth}
              >
                &lt;{" "}
                {moment()
                  .jYear(year)
                  .jMonth(month - 1)
                  .format("jMMMM")}
              </button>
              <h2 className="text-xl font-bold whitespace-nowrap">
                {moment().jYear(year).jMonth(month).format("jMMMM jYYYY")}
              </h2>
              <button
                className="text-[#A5A5A5] px-14 whitespace-nowrap"
                onClick={goToNextMonth}
              >
                {moment()
                  .jYear(year)
                  .jMonth(month + 1)
                  .format("jMMMM")}{" "}
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mt-4 text-center">
              {["ش", "ی", "د", "س", "چ", "پ", "ج"].map((day, index) => (
                <div key={index} className="font-bold text-[#B01862]">
                  {day}
                </div>
              ))}

              {Array.from({ length: firstDay }, (_, i) => (
                <div key={i} className="text-transparent">
                  0
                </div>
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const isSelected = day === selectedDate;

                return (
                  <div
                    key={i}
                    onClick={() => handleDayClick(day)}
                    className={`cursor-pointer p-2 rounded-full ${
                      isSelected ? "bg-[#B01862] text-white" : "bg-transparent"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className=" mt-5">
              <div className="flex items-center ">
                <div className="w-3 h-3 rounded-full bg-[#8F8F8F] mr-2"></div>
                <span className="text-sm mr-2 text-[#8F8F8F]">
                  نوبت های پر شده
                </span>
              </div>
              <div className="flex items-center ml-4 mt-3">
                <div className="w-3 h-3 rounded-full bg-[#B01862] mr-2"></div>
                <span className="text-sm text-[#B01862] mr-2">
                  نوبت انتخابی شما
                </span>
              </div>
              <div className="flex items-center ml-4 mt-3">
                <div className="w-3 h-3 rounded-full bg-black mr-2"></div>
                <span className="text-sm text-gray-700 mr-2">
                  نوبت های خالی
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white py-8 px-6 w-[40%] rounded-2xl shadow-md  mx-auto mt-20">
            <div className="mt-2 text-center">
              <h2 className="text-sm text-[#727272] font-medium">
                {selectedDate
                  ? moment(
                      `${year}/${month + 1}/${selectedDate}`,
                      "jYYYY/jM/jD"
                    ).format("jYYYY/jMM/jDD")
                  : moment().format("jYYYY/jMM/jDD")}
              </h2>
              <div className="border border-[#DDDDDD] mt-3"></div>
              <div
                className="grid grid-cols-4 gap-2 mt-8"
                style={{ direction: "ltr" }}
              >
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    disabled={preSelectedTimes.includes(time)}
                    className={`px-[10px] py-[10px] w-14 border border-[#BCBCBC] text-[#393939] text-sm font-regular hover:bg-[#e91e63] hover:text-white rounded-md ${
                      preSelectedTimes.includes(time)
                        ? "opacity-25 cursor-not-allowed"
                        : selectedTime === time
                        ? "bg-[#e91e63] text-white"
                        : "bg-white text-black border-gray-300 "
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className=" mt-40">
              <div className="flex items-center ">
                <div className="w-3 h-3 rounded-full bg-[#8F8F8F] mr-2"></div>
                <span className="text-sm mr-2 text-[#8F8F8F]">
                  نوبت های پر شده
                </span>
              </div>
              <div className="flex items-center ml-4 mt-3">
                <div className="w-3 h-3 rounded-full bg-[#B01862] mr-2"></div>
                <span className="text-sm text-[#B01862] mr-2">
                  نوبت انتخابی شما
                </span>
              </div>
              <div className="flex items-center ml-4 mt-3">
                <div className="w-3 h-3 rounded-full bg-black mr-2"></div>
                <span className="text-sm text-gray-700 mr-2">
                  نوبت های خالی
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mr-[75.5%] mt-12">
        <Link href='/Resevaion/SelectService'>
          <button className=" whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#727272] bg-[#DDDDDD] font-medium text-sm">
            مرحله قبل
          </button>
          </Link>

          <Link href='/Resevaion/Information'>
          <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
            تایید و ادامه
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SetTimeAndDate;

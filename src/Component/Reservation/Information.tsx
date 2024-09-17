import React from "react";
import Navbar from "../Landing/Navbar";
import Image from "next/image";
import InformationReservation from "@/assent/Img/Reservation/InformationReservation.svg";
import AppointmentReservation from "./AppointmentReservation";
const Information = () => {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="py-20 px-8 md:px-20">
      <AppointmentReservation/>

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

        <div >
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">نام خانوادگی:</p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">کد ملی:</p>
          <input
            type="text"
            className="w-[528px] p-4  border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">تاریخ تولد:</p>
          <input
            type="text"
            className="w-[528px] p-4  border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">شماره تماس:</p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <p className="font-medium mb-2 text-base text-[#393939] mr-1">ایمیل:</p>
          <input
            type="text"
            className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex gap-8 mr-[159.7%] mb-40">
          <button className=" whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#727272] bg-[#DDDDDD] font-medium text-sm">
            مرحله قبل
          </button>

          <button className="bg-[#DC1E7A] whitespace-nowrap w-36 py-2 px-4 rounded-md text-white font-medium text-sm">
            تایید و ادامه
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;

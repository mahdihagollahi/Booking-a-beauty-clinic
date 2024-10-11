"use client";

import React, { Fragment } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import Image from "next/image";
import AddPhoto from "./AddPhoto";
import RuleImage from "@/assent/Img/AdminDashboard/RuleAddPhoto.svg";
const AddService: React.FC = () => {
  return (
    <Fragment>
      <WelcomePanel />
      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[100%] shadow rounded-2xl py-6 px-4 mr-80 -mt-[57%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">خدمات</p>
        <div className="flex gap-[40%]">
          <div>
            <p className="font-medium text-lg text-[#393939] mt-6">
              بارگذاری تصویر :
            </p>
            <AddPhoto />
          </div>
          <div className="mt-4">
            <Image src={RuleImage} width={159} height={122} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              نوع خدمات :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              دسته بندی :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
            />
          </div>
        </div>

        <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
        مقدمه خدمات   :
        </p>
        <input
         
          className="w-[1032px] h-[172px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
        />


        <div className="flex items-center justify-between mt-1">
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              تعداد جلسات :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg "
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              قیمت :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg "
            />
          </div>
        </div>
        <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
          رده سنی :
        </p>
        <input
          type="text"
          className="w-[457px] p-4 mb-4 border border-gray-300 rounded-lg mt-1"
        />
      </div>
    </Fragment>
  );
};

export default AddService;

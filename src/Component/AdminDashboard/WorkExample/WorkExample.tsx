import React, { Fragment } from "react";
import WelcomePanel from "@/Component/AdminDashboard/Dashboard/HeaderDashboard";
import NavbarDashboard from "@/Component/AdminDashboard/Navbar/NavbarDashboard";
import Image from "next/image";
import RuleImage from "@/assent/Img/AdminDashboard/RuleAddPhoto.svg";
import RoutButton from "./RoutButton";
import AddPhoto from "./AddPhoto";

const WorkExample = () => {
  return (
    <Fragment>
      <WelcomePanel />

      <div>
        <NavbarDashboard />
      </div>

      <div className="w-[73.5%] h-[118.5%] shadow  rounded-2xl py-6 px-4  mr-80 -mt-[67.5%] bg-white ml-72">
        <p className="font-medium text-xl text-[#393939]">نمونه کار</p>
        <div className="flex  justify-between">
          <RoutButton />
          <div>
            <Image src={RuleImage} width={159} height={122} alt="" />
          </div>
        </div>

        <div className="flex justify-between mt-16 items-center">
          <div>
            <p className=" mr-2  text-[#2B2B2B] font-medium text-base">
              نوع خدمات :
            </p>
            <input
              type="text"
              className="w-[457px]  p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-2"
            />
          </div>
          <div>
            <p className=" mr-2 text-[#2B2B2B] font-medium text-base">
              دسته بندی :
            </p>
            <input
              type="text"
              className="w-[457px] p-4 mb-4 border border-[#00AEFF] text-[#00AEFF] rounded-lg mt-2"
            />
          </div>
        </div>

        <div className="flex justify-between mt-20 items-center">
          <div>
            <p className="font-medium text-lg text-[#393939] mt-6">
              بارگذاری تصویر اول :
            </p>
            <AddPhoto />
          </div>

          <div>
            <p className="font-medium text-lg text-[#393939] mt-6">
              بارگذاری تصویر دوم :
            </p>
            <AddPhoto />
          </div>

          <div>
            <p className="font-medium text-lg text-[#393939] mt-6">
              بارگذاری تصویر سوم :
            </p>
            <AddPhoto />
          </div>

          <div>
            <p className="font-medium text-lg text-[#393939] mt-6">
              بارگذاری تصویر چهارم :
            </p>
            <AddPhoto />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkExample;

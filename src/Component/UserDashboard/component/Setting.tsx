import React from "react";
import Image from "next/image";
import logo from "@/assent/Img/UserDashboard/vuesax/Vector.png";
const Setting = () => {
  return (
    <>
      <div className="flex flex-col gap-10"> 
        <div>
          <span className="font-[20px]">تنظیمات</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-[18px]">لوگو</span>
          <div className="relative flex  items-center">
            <input className="bg-[#FFF2F8] w-72 h-20 rounded-lg" />
            <div className="absolute right-24  flex flex-row ">
            <Image
              src={logo}
              alt=""
            />
            <span className="text-[#DC1E7A] font-bold">نورانید</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Setting;

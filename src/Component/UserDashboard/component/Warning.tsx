import React from "react";
import Image from "next/image";
import warning from "@/assent/Img/UserDashboard/vuesax/info-circle.png";
const Warning = () => {
  return (
    <>
      <div className=" flex flex-row gap-2">
        <Image className="w-6 h-6" src={warning} alt="" />
        <div className="bg-[#FFF2F8] p-1 justify-center  rounded-[10px] w-32 h-28 flex flex-col gap-1">
          <span dir="rtl" className="text-[#565656] ">
            فرمت:JPG
          </span>
          <span dir="rtl" className="text-[#565656] ">
            سایز:119*289 px
          </span>
          <span dir="rtl" className="text-[#565656] ">
            حجم:720kb
          </span>
        </div>
      </div>
    </>
  );
};
export default Warning;

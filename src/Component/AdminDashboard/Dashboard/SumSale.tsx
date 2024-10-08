import React, { Fragment } from "react";
import Background from "@/assent/Img/AdminDashboard/BackgroundDashboard.svg";
import EyeUser from "@/assent/Img/AdminDashboard/eyeNumer.svg";
import Image from "next/image";
const SumSale = () => {
  return (
    <Fragment>
      <div
        className="  w-48 h-40 -mt-60 px-2 rounded-xl "
        style={{ backgroundImage: `url(${Background.src})`,  backgroundRepeat:'no-repeat' ,    backgroundSize: "cover", }}
      >
        <div className="flex pt-14  gap-2 items-center">
          <Image src={EyeUser} width={24} height={24} alt="" />
          <p className="font-medium text-sm text-[#393939]">مجموع فروش</p>
        </div>
        <p className="font-medium text-sm text-[#393939] mr-32 mt-4">
        1.889
        </p>
        <p className="font-regular mr-36 py-3  text-xs text-[#393939]">
        تومان
        </p>
      </div>
    </Fragment>
  );
};

export default SumSale;

import React from "react";
import Image from "next/image";
import IconImage from "@/assent/Img/Landing/Vector.svg";
import instagramImage from "@/assent/Img/Landing/instagram.svg";
import PhoneImage from "@/assent/Img/Landing/Phone.svg";
import LocationImage from "@/assent/Img/Landing/Location.svg";
const Footer = () => {
  return (
    <div className=" relative z-10">
    <div className="flex px-20 py-6 items-center bg-white  ">
      <div className="flex items-center gap-3">
        <Image src={IconImage} width={30} height={30} alt="logo" />
        <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
      </div>
      <div className="flex gap-20 mr-40 items-center ">
        <div className="  cursor-pointer">
          <p className="w-20  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[77px]  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
            صفحه اصلی
          </p>
        </div>

        <div className="  cursor-pointer">
          <p className="w-[76px]  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[87px]  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300">
            خدمات نورانید
          </p>
        </div>
        <div className="  cursor-pointer">
          <p className="w-[81px] font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[88px] hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
            پزشکان نورانید
          </p>
        </div>
        <div className="  cursor-pointer">
          <p className="w-9 font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-10  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
            مقالات
          </p>
        </div>
        <div className="  cursor-pointer">
          <p className="w-14  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[70px]  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
            تماس با ما
          </p>
        </div>
      </div>
      <div className="mr-44 flex gap-2 ">

        <button className="">
          <Image
            src={instagramImage}
            width={50}
            height={50}
            alt=""
            className=""
          />
        </button>

        <button className="">
          <Image
            src={PhoneImage}
            width={50}
            height={50}
            alt=""
            className=""
          />
        </button>

        <button className="">
          <Image
            src={LocationImage}
            width={50}
            height={50}
            alt=""
            className=""
          />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Footer
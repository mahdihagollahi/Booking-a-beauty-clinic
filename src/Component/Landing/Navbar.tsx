import React from "react";
import Image from "next/image";
import IconImage from "@/assent/Img/Landing/Vector.svg"
import loginButton from '@/assent/Img/Landing/user.svg'
function Navbar() {
  return (
    <div className="bg-white">
      <div className="flex px-20 py-6 items-center  ">
        <div className="flex items-center gap-3">
          <Image src={IconImage} width={30} height={30} alt="logo" />
           <h2 className="font-bold text-xl text-[#DC1E7A]">
           نورانید
           </h2>
        </div>
        <div className="flex gap-20 mr-60 items-center ">
          <div className="  cursor-pointer"> 
          <p className="w-20  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[67px]  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
          صفحه اصلی
         </p>
          </div>

          <div className="  cursor-pointer"> 
          <p className="w-[76px]  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[76px]  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px] duration-300">
          خدمات نورانید
         </p>
          </div>
          <div className="  cursor-pointer"> 
          <p className="w-[81px] font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-[81px] hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
          پزشکان نورانید
         </p>
          </div>
          <div className="  cursor-pointer"> 
          <p className="w-9 font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-9  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
          مقالات
         </p>
          </div>
          <div className="  cursor-pointer"> 
          <p className="w-14  font-extrabold text-base whitespace-nowrap text-[#8F8F8F] hover:w-14  hover:text-[#4BB09C] hover:border-b-4 hover:border-[#4BB09C] hover:pb-[2px] hover:mt-[1px]  duration-300">
        تماس با ما
         </p>
          </div>
        </div>
        <div className="mr-44">
             <button className="flex gap-2 bg-[#DC1E7A] rounded-md py-2 px-4  whitespace-nowrap">
                  <Image
                  src={loginButton}
                  width={20}
                  height={20}
                  alt=""
                  className=""
                  />
                  <p className="font-medium text-[#FFFFFF] text-sm pl-4">
                  ورود / ثبت نام
                  </p>
             </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



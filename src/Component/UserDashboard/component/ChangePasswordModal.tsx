'use client'
import React, { Fragment } from "react";
import BackArrow from '@/assent/Img/UserDashboard/BackArrow.svg'
import Image from "next/image";
const ChangePasswordModal = ({handleCloseModal}) => {
    const handleFocus = () => {
        document.documentElement.lang = "en";
      };
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-white pb-10 py-8 px-6 w-[45%] h-auto rounded-2xl shadow-md">
           <Image
           src={BackArrow}
           width={24}
           height={24}
           alt=""
           className="cursor-pointer"
           onClick={handleCloseModal}
           />
           <p className="mt-5 font-medium text-sm text-[#393939]">
           لطفا گذرواژه خود انتخاب کنید و آن را وارد کنید.
           </p>

           <input
              type="text"
              onFocus={handleFocus}
              placeholder="رمز عبور خود را وارد کنید"
              className="w-[440px] p-4 mt-4  border  rounded-lg placeholder:text-[#D2D2D2] placeholder:font-regular placeholder:text-xs"
            />
            <p className="text-[#8F8F8F] font-regular text-[14px] mt-4">
            گذرواژه باید ترکیبی از حروف انگلیسی،نشانه ها و اعداد به درازای 6 نویسه یا بیشتر باشد.
            </p>


            <p className=" font-medium text-sm mt-10 text-[#393939]">
            گذرواژه خود را یک بار دیگر وارد کنید.
           </p>

           <input
              type="text"
              onFocus={handleFocus}
              placeholder='تکرار رمز عبور'
              className="w-[440px] p-4 mt-4  border  rounded-lg placeholder:text-[#D2D2D2] placeholder:font-regular placeholder:text-xs"
            />
           

            <button className="bg-[#DC1E7A] py-4 rounded-lg px-4 w-[100%] mt-10 text-white font-medium text-sm">
                ثبت گذرواژه
            </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ChangePasswordModal;

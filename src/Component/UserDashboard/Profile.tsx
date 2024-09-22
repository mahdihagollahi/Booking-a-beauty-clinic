import React from "react";
import Navbar from "./component/Navbar";
import InputProfile from "./component/InputProfile";
import Image from "next/image";
import UserProfile from "@/assent/Img/UserDashboard/UserProfile.svg";
import Lock from '@/assent/Img/UserDashboard/lock.svg'
import Arrow from '@/assent/Img/UserDashboard/Arrow.svg'

function Profile() {
 
  return (
    <div className="bg-[#FFF7FE] h-full">
      <div className="flex gap-8">
        <div>
          <Navbar />
        </div>
     
          <div className=" bg-white w-[79%] h-auto mt-10 p-6  rounded-3xl">
            <p className="font-medium text-2xl text-[#393939] mt-5">
              پروفایل
            </p>
            <Image
            src={UserProfile}
            width={84}
            height={84}
            alt="user profile"
            className="mt-10"
            />
          <InputProfile/>
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mt-10 cursor-pointer">
              <Image
              src={Lock}
              width={24}
              height={24}
              alt=""
              />
              <p className="font-regular text-base text-[#393939]">
                تغییر گذرواژه
              </p>
              <Image
              src={Arrow}
              width={24}
              height={24}
              alt=""
              />
            </div>
           
              <button className="bg-[#DC1E7A] text-white rounded-md py-2 mt-10 px-4">
                ثبت تغییرات
              </button>
           
          </div>
       
          </div>
          
      </div>
    </div>
  );
}

export default Profile;

import React, { Fragment } from "react";
import Image from "next/image";
import LoginImage from "@/assent/Img/Login/LoginPagePhoto.svg";
import IconImage from "@/assent/Img/Landing/Vector.svg";
function SingIn() {
  return (
    <Fragment>
      <div className="flex h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center pl-16 -pl-10 mb-28 mr-36">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image src={IconImage} width={30} height={30} alt="logo" />
            <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
          </div>

          <p
            className="font-medium text-center mb-6 mt-10 ml-[60%] whitespace-nowrap"
            style={{ display: "inline-block" }}
          >
            آیا حساب کاربری دارید ؟
            <span className="text-[#4BB09C] mr-2 cursor-pointer">
              وارد شوید
            </span>
          </p>

          <input
            type="text"
            placeholder="شماره تماس"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
          />

          <button className="w-full bg-[#DC1E7A] text-white py-4 rounded-lg mt-4">
            دریافت کد
          </button>
        </div>
        <div className="w-1/2 relative">
          <Image
            src={LoginImage}
            layout="fill"
            objectFit="cover"
            alt="Login Background"
            className="rounded-r-[5%] mr-20"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default SingIn;


"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import LoginImage from "@/assent/Img/Login/LognModal.svg";
import IconImage from "@/assent/Img/Landing/Vector.svg";
function SingIn3() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFocus = () => {
    document.documentElement.lang = "en";
  };
  return (
    <Fragment>
      <div className=" flex justify-center  items-center mt-[15%]">
        <div
          className="px-10 py-10 w-[43%] pb-12 rounded-r-[4.5%] rounded-l-[4.5%] "
          style={{
            backgroundImage: `url(${LoginImage.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center justify-center gap-3 mt-10">
            <Image src={IconImage} width={30} height={30} alt="logo" />
            <h2 className="font-bold text-xl text-[#DC1E7A]">نورانید</h2>
          </div>

          <p
            className="font-medium text-center mb-6 mt-10 ml-[60%] text-white whitespace-nowrap"
            style={{ display: "inline-block" }}
          >
            آیا حساب کاربری دارید ؟
            <span className="text-[#4BB09C] mr-2 cursor-pointer">
              وارد شوید
            </span>
          </p>

          <input
            type="text"
            placeholder="نام"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
          />
          <div>
            <input
              type="text"
              placeholder="نام خانوادگی"
              className=" w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            />
          </div>

          <input
            type="text"
            placeholder="کد ملی"
            className=" w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            onFocus={handleFocus}
          />

          <input
            type="text"
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            className="  w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            onFocus={handleFocus}
          />

          <div
            className="absolute  right-[66%] transform -translate-y-14 cursor-pointer "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0112 5.25c3.037 0 5.789 1.23 7.776 3.223m2.165 2.653a.75.75 0 01.011 1.042C19.888 17.88 16.164 19.5 12 19.5c-3.037 0-5.789-1.23-7.776-3.223a10.448 10.448 0 01-1.799-2.522.75.75 0 01.011-1.042M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>

          <input
            type="text"
            type={showPassword ? "text" : "password"}
            placeholder="تکرار رمز عبور"
            className="  w-full p-4 mb-4 border border-gray-300 rounded-lg mt-4"
            onFocus={handleFocus}
          />

          <div
            className="absolute  right-[66%] transform -translate-y-14 cursor-pointer "
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0112 5.25c3.037 0 5.789 1.23 7.776 3.223m2.165 2.653a.75.75 0 01.011 1.042C19.888 17.88 16.164 19.5 12 19.5c-3.037 0-5.789-1.23-7.776-3.223a10.448 10.448 0 01-1.799-2.522.75.75 0 01.011-1.042M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>

          <button className="w-full bg-[#DC1E7A]  text-white py-4 rounded-lg mt-10 ">
            ورود
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default SingIn3;

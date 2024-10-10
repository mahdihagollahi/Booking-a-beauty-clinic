"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import LoginImage from "@/assent/Img/AdminDashboard/LoginPage.svg";
import Logo from "@/assent/Img/AdminDashboard/Logo.svg";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleFocus = () => {
    document.documentElement.lang = "en";
  };
  return (
    <Fragment>
      <div className="flex  ">
        <div className="w-[50%]">
          <div className="flex mr-80 mt-20">
            <div className="flex items-center gap-2">
              <Image src={Logo} width={30} height={30} alt="" />
              <p className="font-bold text-xl text-[#DC1E7A]">نورانید</p>
            </div>
          </div>
          <p className="font-medium mt-20 mr-20 text-lg text-[#393939]">
            به پنل ادمین خوش آمدید!
          </p>
          <div className="mr-28 mt-20">
            <p className="mt-3 mr-2 text-[#2B2B2B] font-medium text-base">
              شماره تماس :
            </p>
            <input
              type="text"
              className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg mt-4"
              onFocus={handleFocus}
            />
            <p className="mt-3 mr-2 text-[#2B2B2B] font-medium text-base">
              رمز عبور :
            </p>
            <input
               type={showPassword ? "text" : "password"}
              className="w-[528px] p-4 mb-4 border border-gray-300 rounded-lg mt-4"
              onFocus={handleFocus}
            />

            <div
              className="absolute  right-[41%] transform -translate-y-14 cursor-pointer "
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
          </div>
          <Link href='/AdminDashboard/Dashboard'>
          <button className="w-[528px] rounded-xl h-14  px-4 bg-[#DC1E7A] text-white mr-28 mt-10">
            ورود
          </button>
          </Link>
        </div>
        <div className=" ">
          <Image src={LoginImage} width={723} height={100} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

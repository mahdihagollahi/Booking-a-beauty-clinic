"use client";
import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import out from "@/assent/Img/AdminDashboard/logout.svg";
import CommentOutline from "@/assent/Img/AdminDashboard/CommentOutline.svg";
import Clock from "@/assent/Img/AdminDashboard/clock.svg";
import Calnder from "@/assent/Img/AdminDashboard/Calnder.svg";

const WelcomePanel = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Fragment>
      <div className="w-[90%] bg-white mr-20  my-3 h-16 p-3 rounded-lg flex flex-row items-center justify-between shadow-md ">
        <div className="flex flex-col mt-1 gap-2">
          <span>
            به پنل<span className="text-[#DC1E7A]"> نورانید</span> خوش آمدید
          </span>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image src={Clock} width={20} height={20} alt="" />
              <p className="text-[#8F8F8F]">
                {currentDateTime.toLocaleTimeString()}
              </p>
            </div>

            <div className="flex items-center mr-2 gap-2">
              <Image src={Calnder} width={20} height={20} alt="" />
              <p className="text-[#8F8F8F]">
                {currentDateTime.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <button>
            <Image width={24} height={24} src={CommentOutline} alt="" />
          </button>
          <button>
            <Image width={24} height={24} src={out} alt="" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default WelcomePanel;

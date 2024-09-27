"use client";
import React, { Fragment } from "react";
import Background from "@/assent/Img/Landing/FooterBG.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
import Image from "next/image";

const NoranidNews = () => {
  const handleFocus = () => {
    document.documentElement.lang = "en";
  };

  return (
    <Fragment>
           <div className=" absolute mr-[66.9%] mt-20 ">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
      <div className="bg-white mt-20">
        <div
          className=" ml-24  mt-10 py-20 "
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-40 px-32 ">
            <h2 className="font-demiBold text-white text-[28px]">
              خدمات زیبایی کلینیک نورانید
            </h2>
            <p className="w-[63%] font-regular text-white text-base mt-3">
              کلینیک زیبایی کایاک در پاسداران تهران، با تیمی حرفه‌ای و محیطی
              دوستانه، آماده ارائه خدمات زیبایی و درمانی پوست و مو است. از لیزر
              و مزوتراپی تا میکرونیدلینگ و تزریق بوتاکس، ما با جدیدترین
              تکنولوژی‌ها و مواد با کیفیت در محیطی صمیمی به شما خدمت می‌کنیم.
              رضایت شما هدف ماست. 
            </p>
          </div>
        </div>
        <div
          className="bg-white w-[447px] h-[519px] py-16 px-4 rounded-xl shadow-lg absolute -mt-[38%] mr-[58%]"
          style={{ zIndex: 40 }}
        >
          <p className="font-medium text-base text-[#393939]">
            از خبر های نورانید با خبر شوید!
          </p>
          <div className=" ">
            <input
              type="text"
              placeholder="نام"
              className="w-full mt-10 p-4 mb-4 border border-gray-300 rounded-lg"
            />

            <input
              type="text"
              placeholder="نام خانوادگی"
              className="w-full  p-4 mb-4 border border-gray-300 rounded-lg"
            />

            <input
              type="text"
              placeholder="شماره تماس"
              className="w-full  p-4 mb-4 border border-gray-300 rounded-lg"
              onFocus={handleFocus}
            />
            <button className="bg-[#4BB09C] rounded-md text-white px-6 mt-4 mr-[81%] py-2">تایید</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoranidNews;

"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import ArrowRight from "@/assent/Img/404Arow.svg";
import Link from "next/link";
import ShareIcon from "@/assent/Img/Article/share.svg";
import ArticleData from "@/Component/Article/Component/ArticleData";
import { usePathname } from "next/navigation";
const ArticleShow = () => {
  const Data = ArticleData().Article;
  const [filledHeart, setFilledHeart] = useState<Record<number, boolean>>({});

  const handleHeartClick = (index: number) => {
    setFilledHeart((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const pathName = usePathname()
  return (
    <Fragment>
     <div className="flex gap-10 mb-10 items-center">
     <Link href="/UserDashboard/Favorite">
            <button className="cursor-pointer">
              <span
                style={pathName === "/UserDashboard/Favorite" ? { color: "#DC1E7A" } : {}}
                className={`w-[76px] font-extrabold ${
                  pathName === "/UserDashboard/Favorite"
                    ? "border-b-4 border-[#DC1E7A] pb-[4px] mt-[1px] w-[87px] duration-300"
                    : "text-[#8F8F8F]"
                } text-base whitespace-nowrap text-[#8F8F8F] hover:w-[87px] hover:text-[#DC1E7A] hover:border-b-4 hover:border-[#DC1E7A] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                مقالات
              </span>
            </button>
          </Link>

          <Link href="/UserDashboard/Favorite/Service">
            <button className="cursor-pointer">
              <span
                style={pathName === "/UserDashboard/Favorite/Service" ? { color: "#DC1E7A" } : {}}
                className={`w-[76px] font-extrabold ${
                  pathName === "/UserDashboard/Favorite/Service"
                    ? "border-b-4 border-[#DC1E7A] pb-[4px] mt-[1px] w-[87px] duration-300"
                    : "text-[#8F8F8F]"
                } text-base whitespace-nowrap text-[#8F8F8F] hover:w-[87px] hover:text-[#DC1E7A] hover:border-b-4 hover:border-[#DC1E7A] hover:pb-[2px] hover:mt-[1px] duration-300`}
              >
                خدمات
              </span>
            </button>
          </Link>
     </div>
      <div
        className="grid grid-cols-3 overflow-scroll absolute  py-4   gap-9 w-[105%]"
        style={{ zIndex: 10 }}
      >
        {Data.map((treatment, index) => (
          <div
            key={index}
            className="relative w-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group"
          >
            <Link href="/Article/ShowArticle">
              <Image
                src={treatment.defaultImage}
                alt={treatment.title}
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#222222] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 mt-48 ml-40 transition-opacity duration-500 group-hover:opacity-0">
                <p className="font-medium text-white text-base text-center p-2 rounded-lg">
                  {treatment.title}
                </p>
              </div>

              <div className="absolute bottom-0 w-full rounded-md bg-inherit opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex justify-between px-4 py-2">
                  <h3 className="text-base text-[#FFFFFF] font-medium">
                    {treatment.titleHover}
                  </h3>
                </div>
                <div className="px-4">
                  <p className="mt-2 text-xs font-regular text-[#FFFFFF]">
                    {treatment.description}
                  </p>
                </div>

                <div className="flex px-4 mt-4 mb-2 gap-16 items-center ">
                  <div className="text-xs font-regular whitespace-nowrap text-[#FFFFFF]">
                    {treatment.date}
                  </div>

                  <div className="flex items-center whitespace-nowrap cursor-pointer h-8 px-4 w-full bg-inherit">
                    <p className="text-[#DC1E7A] text-sm font-medium">
                      ادامه مطالب
                    </p>
                    <Image src={ArrowRight} width={24} height={24} alt="" />
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={filledHeart[index] ? "#D20404 " : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute top-3 left-3 cursor-pointer text-gray-100 size-6 hover:fill-[#D20404]"
                onClick={() => handleHeartClick(index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <Image
                src={ShareIcon}
                width={20}
                height={20}
                alt=""
                className="absolute top-[14px] left-12 cursor-pointer text-gray-100  hover:fill-[#D20404]"
              />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ArticleShow;

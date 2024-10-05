"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import FilterArticleImage from "@/assent/Img/Article/FilterArticle.svg";
const FilterArticle = () => {
  const [activeFilter, setActiveFilter] = useState("همه مقالات");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <Fragment>
      <div className="bg-white w-[976px] shadow rounded-lg mr-[28%] px-3 py-4  h-[73px]">
        <div className=" flex gap-3 items-center">
          <Image src={FilterArticleImage} width={45} height={45} alt="" />
          <p className="text-[#727272] font-medium text-lg">
            مرتب سازی بر اساس :
          </p>
          <div className="flex  mr-12 cursor-pointer items-center">
            <p
              className={`font-medium text-base duration-300 ${
                activeFilter === "همه مقالات"
                  ? "text-[#DC1E7A]"
                  : "text-[#727272] hover:text-[#DC1E7A]"
              }`}
              onClick={() => handleFilterClick("همه مقالات")}
            >
              همه مقالات
            </p>

            <p
              className={`font-medium mr-16 text-base duration-300 ${
                activeFilter === "جدید ترین مقالات"
                  ? "text-[#DC1E7A]"
                  : "text-[#727272] hover:text-[#DC1E7A]"
              }`}
              onClick={() => handleFilterClick("جدید ترین مقالات")}
            >
              جدید ترین مقالات
            </p>

            <p className={`font-medium mr-16 text-base duration-300 ${
                activeFilter === "قدیمی ترین مقالات"
                  ? "text-[#DC1E7A]"
                  : "text-[#727272] hover:text-[#DC1E7A]"
              }`}
              onClick={() => handleFilterClick("قدیمی ترین مقالات")}>
              قدیمی ترین مقالات
            </p>

            <p className={`font-medium mr-16 text-base duration-300 ${
                activeFilter === "پر بازدید ترین مقالات"
                  ? "text-[#DC1E7A]"
                  : "text-[#727272] hover:text-[#DC1E7A]"
              }`}
              onClick={() => handleFilterClick("پر بازدید ترین مقالات")}>
              پر بازدید ترین مقالات
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterArticle;

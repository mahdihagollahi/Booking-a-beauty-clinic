"use client";
import React, { Fragment, useState } from "react";
import ServiceData from "@/Component/Service/Component/ServiceData";
import Image from "next/image";
import StarYellow from "@/assent/Img/Service/star.svg";
import SetionMyTurn from "@/assent/Img/UserDashboard/SetionMyturn.svg";
import ArrowRight from "@/assent/Img/Service/arrowWhite.svg";
import Navbar from "../Landing/Navbar";
import Link from "next/link";
import FilterData from "./Component/FilterData";
import NoranidNews from "../Doctors/NoranidNews";
import Footer from "../Landing/Footer";
import Paginate from "./Component/Paginet";

const Service = () => {
  const [filledHeart, setFilledHeart] = useState<Record<number, boolean>>({});
  const Data = ServiceData().Services;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };


  const handleHeartClick = (index: number) => {
    setFilledHeart((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <Fragment>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="flex  mt-10">
        <div>
          <FilterData />
        </div>
        <div className="grid grid-cols-3 mr-10 mt-10 gap-9 w-[80%]">
          {Data.map((treatment, index) => (
            <div
              key={index}
              className="relative w-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group"
            >
              <Link href="/Service/ShowService">
                <Image
                  src={treatment.defaultImage}
                  alt={treatment.title}
                  className="w-full h-64 object-cover"
                />
                <div className="flex p-3 justify-between rounded-lg">
                  <p className="font-medium text-base text-[#393939]">
                    {treatment.title}
                  </p>
                  <div className=" flex gap-2 ">
                    <p className="font-medium text-base text-[#393939]">
                      {treatment.rating}
                    </p>
                    <Image src={StarYellow} width={20} height={20} alt="" />
                  </div>
                </div>
                <div className="absolute bottom-0 w-full h-1/2 rounded-md  bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex justify-between px-4 py-2">
                    <h3 className="text-base text-[#DC1E7A] font-medium">
                      {treatment.title}
                    </h3>
                    <div className=" flex gap-2 ">
                      <p className="font-medium text-base text-[#393939]">
                        {treatment.rating}
                      </p>
                      <Image src={StarYellow} width={20} height={20} alt="" />
                    </div>
                  </div>
                  <div className="px-4">
                    <p className="mt-2 text-xs  font-regular text-[#727272]">
                      {treatment.description}
                    </p>
                  </div>

                  <div className="flex px-4 justify-between items-center">
                    <div className=" text-xs font-regular whitespace-nowrap text-[#565656]">
                      قیمت هر جلسه: {treatment.price}
                    </div>

                    <div className=" flex items-center gap-1 text-xs font-regular text-[#393939]">
                      جلسه {treatment.sessions}
                      <Image src={SetionMyTurn} width={20} height={20} alt="" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-[5px] cursor-pointer  h-8 px-4  w-full bg-[#F1A5CA]">
                    <p className="text-white text-sm font-medium">رزرو نوبت</p>
                    <Image src={ArrowRight} width={24} height={24} alt="" />
                  </div>
                </div>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={filledHeart[index] ? "#D20404" : "none"}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="absolute top-3 left-3 cursor-pointer text-[#DC1E7A] size-6 hover:fill-[#D20404]"
                onClick={() => handleHeartClick(index)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">

    
      <Paginate
        currentPageData={currentPageData}
        pageCount={pageCount}
        pageClick={pageClick}
      />
        </div>
      <div className="w-full">
        <NoranidNews />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Service;

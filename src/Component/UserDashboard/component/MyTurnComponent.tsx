import React, { Fragment } from "react";
import MyTurnData from "./MyTurnData";
import Image from "next/image";
import SetionMyturn from "@/assent/Img/UserDashboard/SetionMyturn.svg";
import ArrowLeft from "@/assent/Img/UserDashboard/ArrowLeft.svg";
import Clock from "@/assent/Img/UserDashboard/Clock.svg";
import Tick from "@/assent/Img/UserDashboard/Tick.svg";
const MyTurnComponent = () => {
  const data = MyTurnData().Data;
  return (
    <Fragment>
      {data.map((items) => (
        <div
          className="bg-white w-[100%] p-4 h-auto border border-[#E9E9E9] rounded-md"
          key={items.id}
        >
          <div className="flex justify-end">
            {items.status === "visited" ? (
              <div className="flex items-center gap-2">
                <Image src={Tick} width={24} height={24} alt="" />
                <span className="text-[#04C953] font-medium text-sm">
                  مراجعه شده
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Image src={Clock} width={24} height={24} alt="" />
                <span className="text-[#00AEFF] font-medium text-sm">
                  {items.daysRemaining} روز باقی مانده
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Image src={items.img} width={100} height={100} alt="" />
            </div>

            <div>
              <h4 className="font-medium text-[#393939] text-xl">
                {items.name}
              </h4>
              <p className="mt-1 font-regular text-sm text-[#727272]">
                {items.discription}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mr-2 font-regular text-base mt-2">
            <p className="text-[#727272]">تاریخ رزرو:</p>
            <p className="text-[#393939] flex items-center gap-1">
              ساعت {items.time}
            </p>
            <p className="text-[#393939]">{items.Date}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mr-2 mt-3">
              <Image src={SetionMyturn} width={20} height={20} alt="" />
              <p className="font-regular text-sm text-[#393939]">
                جلسه {items.setion}
              </p>
            </div>

            <button className="flex items-center gap-1">
              <p className="font-regular text-[#DC1E7A] text-base">
                دریافت نوبت بعدی
              </p>
              <Image src={ArrowLeft} width={20} height={20} alt="" />
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default MyTurnComponent;

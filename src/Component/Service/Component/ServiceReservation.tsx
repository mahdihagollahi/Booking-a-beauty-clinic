import React, { Fragment } from "react";
import Image from "next/image";
import timer from "@/assent/Img/Service/timer.svg";
import coin from "@/assent/Img/Service/coin.svg";
import user from "@/assent/Img/Service/user.svg";
const ServiceReservation = ({ serviceData }) => {
  return (
    <Fragment>
      <p className="font-medium text-xl text-[#393939]">
        دکتر:{" "}
        <span className="text-[#DC1E7A] mr-2">{serviceData.doctorName}</span>
      </p>

      <div className="flex mt-10">
        <div className="flex gap-4 items-center whitespace-nowrap">
          <Image src={timer} width={24} height={24} alt="Timer" />
          <p>
            تعداد جلسات: <span>{serviceData.sessions} جلسه</span>
          </p>
        </div>
        <div className="mr-32 flex gap-4 items-center whitespace-nowrap">
          <Image src={coin} width={24} height={24} alt="Coin" />
          <p>
            قیمت: <span>{serviceData.price}</span>
          </p>
        </div>
        <div className="mr-32 flex gap-4 items-center whitespace-nowrap">
          <Image src={user} width={24} height={24} alt="User" />
          <p>
            رده سنی: <span>{serviceData.ageLimit}</span>
          </p>
        </div>
      </div>

      <button className="mt-10 duration-300 bg-[#EA78AF] hover:bg-[#DC1E7A] text-white w-[48%] h-[12%] rounded-lg">
        رزرو نوبت
      </button>
    </Fragment>
  );
};

export default ServiceReservation;

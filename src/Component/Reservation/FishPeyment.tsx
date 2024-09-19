import React, { Fragment } from "react";
import Navbar from "../Landing/Navbar";
import Image from "next/image";
import AppointmentReservation from "./AppointmentReservation";
import FishPeymentRecipt from "@/assent/Img/Reservation/FishPeyment.svg";
import FishGreenPeyment from "@/assent/Img/Reservation/FishGreenPayment.svg";
import starPeyment from "@/assent/Img/Reservation/starPeyment.svg";
import profilePeyment from "@/assent/Img/Reservation/profilePeyment.svg";
import receiptPeyment from "@/assent/Img/Reservation/receiptPeyment.svg";

interface recipet {
  trackingCode: string;
  ServiceType: string;
  Date: string;
  Time: string;
}

interface user {
  name: string;
  nationalCode: string;
  birthDate: string;
  phoneNumber: string;
}

interface turn {
  numberTurn: string;
  ServiceType: string;
  dateReference: string;
  timeRefernce: string;
}
const FishPeyment = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="py-20 px-8 md:px-20">
        <AppointmentReservation />

        <div className="mt-16 text-center px-24">
          <Image src={FishPeymentRecipt} width={11000} height={83} alt="" />
        </div>

        <div className="mt-16 mr-9 text-center px-24">
          <Image src={FishGreenPeyment} width={1017} height={58} alt="" />
        </div>
        <Image
           src={starPeyment}
           width={24}
           height={24}
           alt=""
           className="absolute mr-[130px] mt-16"
           />
        <div className="  mr-9 mt-16 px-24 bg-inherit items-center   rounded-lg">
           
          <div className="grid grid-cols-5 gap-10 border-b  pb-8 mb-4">
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">کد پیگیری</p>
              <p className="font-regular flex mt-1 mr-1 text-[#565656] text-sm">3380</p>
            </div>
            <div>
              <p className="text-[#393939] font-medium text-sm ">تاریخ خرید</p>
              <p className="font-regular flex mt-1 mr-1 text-[#565656] text-sm">1403/1/12</p>
            </div>
            <div>
              <p className="text-[#393939] font-medium text-sm ">نوع خدمات</p>
              <p className="font-regular flex mt-1  text-[#565656] text-sm">فشیال صورت</p>
            </div>
            <div>
              <p className="text-[#393939] font-medium text-sm ">ساعت خرید</p>
              <p className="font-regular flex mt-1 mr-4 text-[#565656] text-sm">12:55</p>
            </div>
            <div>
              <p className="text-[#393939] font-medium text-sm ">وضعیت</p>
              <p className="text-green-600 font-regular flex mt-1  text-sm">تأیید شده</p>
            </div>
          </div>
          <Image
           src={profilePeyment}
           width={24}
           height={24}
           alt=""
           className="absolute  mt-7"
           />
          <div className="grid grid-cols-5 mt-10 gap-4 border-b pb-10 mb-10">
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">نام و نام خانوادگی</p>
              <p className="font-regular flex mt-1  text-[#565656] text-sm">محدثه حاجی زاده</p>
            </div>
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">کد ملی</p>
              <p className="font-regular flex mt-1  text-[#565656] text-sm">0058581022</p>
            </div>
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">تاریخ تولد</p>
              <p className="font-regular flex mt-1  text-[#565656] text-sm">1383/4/24</p>
            </div>
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">شماره تماس</p>
              <p className="font-regular flex mt-1  text-[#565656] text-sm">09332093349</p>
            </div>
          </div>
          <Image
           src={receiptPeyment}
           width={24}
           height={24}
           alt=""
           className="absolute  "
           />
          <div className="grid grid-cols-5 mt-10 gap-4">
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">شماره نوبت</p>
              <p className="font-regular flex mt-1 mr-6 text-[#565656] text-sm">22</p>
            </div>
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">نوع خدمات</p>
              <p className="font-regular flex mt-1  text-[#565656] text-sm">فشیال صورت</p>
            </div>
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">تاریخ مراجعه</p>
              <p className="font-regular flex mt-1 mr-1 text-[#565656] text-sm">1403/1/21</p>
            </div>
            <div className="mr-10">
              <p className="text-[#393939] font-medium text-sm ">ساعت مراجعه</p>
              <p className="font-regular flex mt-1 mr-6 text-[#565656] text-sm">18:00</p>
            </div>
          </div>
          <div className="mt-20 flex justify-between">
            <p className="font-regular text-sm text-[#00966D]">
            *نوبت رزرو شده فقط در همان تاریخ رزرو شده اعتبار دارد. 
            </p>
            <button className="text-[#FFFFFF] text-sm font-medium py-2 px-4 w-[12%] bg-[#5DD9C1] rounded-sm">
            چاپ نوبت
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FishPeyment;

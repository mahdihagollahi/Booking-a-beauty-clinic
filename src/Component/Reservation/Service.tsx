import React from "react";
import Navbar from "../Landing/Navbar";
import Image from "next/image";
import ServiceImage from "@/assent/Img/Reservation/ServiceReservation.svg";
import ServicePhoto1 from "@/assent/Img/Landing/ServicePhoto1.svg";
import servicePhoto2 from "@/assent/Img/Landing/servicePhoto2.svg";
import ServicePhoto3 from "@/assent/Img/Landing/ServicePhoto3.svg";
import HaireAndSkinReservation from "@/assent/Img/Reservation/HaireAndSkinReservation.svg";
import AppointmentReservation from "./AppointmentReservation";
const Service = () => {
  return (
    <div className="h-full">
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="py-20 px-8 md:px-20">
      <AppointmentReservation/>

        <div className="mt-16 px-20">
          <Image src={ServiceImage} width={11000} height={83} alt="" />
        </div>
        <div className="flex items-center gap-32 mt-24 py-10">
          <div className="cursor-pointer">
            <Image
            src={servicePhoto2}
            width={226}
            height={226}
            alt="خدمات لیزر موهای زائد"
            />
            <p className="font-medium text-base text-[#393939] mr-10">
            خدمات لیزر موهای زائد
            </p>
          </div>

          <div className="cursor-pointer">
            <Image
            src={ServicePhoto1}
            width={226}
            height={226}
            alt='خدمات انواع تزریقات زیبایی'
            />
            <p className="font-medium text-base text-[#393939] mr-4 whitespace-nowrap">
            خدمات انواع تزریقات زیبایی            
            </p>
          </div>

          <div className="cursor-pointer">
            <Image
            src={ServicePhoto3}
            width={226}
            height={226}
            alt="خدمات انواع کاشت"
            />
            <p className="font-medium text-base text-[#393939] mr-12 whitespace-nowrap">
            خدمات انواع کاشت
            </p>
          </div>

          <div className="cursor-pointer">
            <Image
            src={HaireAndSkinReservation}
            width={226}
            height={226}
            alt="خدمات انواع آبرسانی پوست و مو"
            />
            <p className="font-medium text-base text-[#393939]  whitespace-nowrap">
            خدمات انواع آبرسانی پوست و مو
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

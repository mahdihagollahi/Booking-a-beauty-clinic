import React from "react";
import Navbar from "../Landing/Navbar";
import Image, { StaticImageData } from "next/image";
import ServiceImage from "@/assent/Img/Reservation/ServiceReservation.svg";
import RefreshSkin from "@/assent/Img/Reservation/RefreshSkin.svg";
import Star from "@/assent/Img/Reservation/Star.svg";
import ArrowLeft from "@/assent/Img/Reservation/arrowLeft.svg";
import AppointmentReservation from "./AppointmentReservation";
import Link from "next/link";

interface ServiceItems {
  id: number;
  image: StaticImageData;
  name: string;
  rate: number;
  doctor: String;
  section: number;
}

const SelectService: React.FC = () => {
  const Service: ServiceItems[] = [
    {
      id: 1,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },
    {
      id: 2,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },

    {
      id: 3,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },

    {
      id: 4,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },

    {
      id: 5,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },

    {
      id: 6,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },

    {
      id: 7,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },

    {
      id: 8,
      image: RefreshSkin,
      name: "جوانسازی پوست",
      rate: 4.5,
      doctor: "دلارا رحمانی",
      section: 6,
    },
  ];

  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="py-20 px-8 md:px-20">
        <AppointmentReservation />

        <div className="mt-16 text-center px-24">
          <Image src={ServiceImage} width={11000} height={83} alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {Service.map((items) => (
            <div
              key={items.id}
              className="bg-white border border-[#E5E5E5] rounded-lg p-4 shadow-md"
            >
              <div className="flex gap-4 items-center">
                <Image src={items.image} width={100} height={100} alt="" />
                <div className="flex-1">
                  <p className="font-semibold text-lg text-[#DC1E7A]">
                    {items.name}
                  </p>
                  <p className="font-medium text-base mt-2 text-[#565656]">
                    دکتر: {items.doctor}
                  </p>
                  <p className="font-regular text-xs mt-2 text-[#727272]">
                    تعداد جلسات: <span>{items.section} جلسه</span>
                  </p>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div className="flex items-center justify-center gap-2 mr-20">
                    <Image src={Star} width={22} height={22} alt="" />
                    <p className="font-medium text-lg text-[#393939]">
                      {items.rate}
                    </p>
                  </div>
                  <Link href='/Resevaion/SetTime'>
                    <button className="flex items-center mt-4 text-[#5DD9C1]">
                      <p className="font-medium text-lg">ادامه و رزرو نوبت</p>
                      <Image src={ArrowLeft} width={24} height={24} alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-8 mr-[89%] mt-32">
        <Link href='/Resevaion'>
          <button className=" whitespace-nowrap w-36 py-2 px-4 rounded-md text-[#727272] bg-[#DDDDDD] font-medium text-sm">
            مرحله قبل
          </button>
          </Link>
      
        </div>
      </div>
    </div>
  );
};

export default SelectService;

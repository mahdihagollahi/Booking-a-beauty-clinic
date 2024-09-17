import React from "react";
import Navbar from "../Landing/Navbar";
import Image, { StaticImageData } from "next/image";
import PaymentWoman from "@/assent/Img/Reservation/PaymentWoman.svg";
import ImageDoctor from "@/assent/Img/Reservation/ImageDoctor.svg";
import Star from "@/assent/Img/Reservation/Star.svg";
import PaymentReservation from "@/assent/Img/Reservation/PaymentReservation.svg";
import AppointmentReservation from "./AppointmentReservation";

interface ServiceItems {
  id: number;
  image: StaticImageData;
  name: string;
  rate: number;
  discription: String;
}

interface DoctorItems {
  id: number;
  image: StaticImageData;
  name: string;
  experienceYear: number;
  experience: string;
}



const Payment: React.FC = () => {

   


  const Service: ServiceItems[] = [
    {
      id: 1,
      image: PaymentWoman,
      name: "جوانسازی پوست",
      rate: 4.5,
      discription:
        "فیشال شامل مراقبت‌های پوستی تخصصی است که برای پاکسازی، تغذیه و جوان‌سازی پوست صورت انجام می‌شود. این خدمات به بهبود ظاهر پوست، کاهش چین و چروک‌ها و افزایش شادابی ......",
    },
  ];

  const Doctor: DoctorItems[] = [
    {
      id: 1,
      image: ImageDoctor,
      name: "دلارا رحمانی",
      experienceYear: 15,
      experience: "عضو انجمن متخصصین پوست ایران",
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
          <Image src={PaymentReservation} width={11000} height={83} alt="" />
        </div>

        <div className="flex gap-10">
          <div>
            <div className="w-[600px] mt-20">
              {Service.map((items) => (
                <div
                  key={items.id}
                  className="bg-white border border-[#E5E5E5] rounded-xl p-4 shadow-md"
                >
                  <p className="font-medium text-base text-[#393939] mb-2">
                    نوع نوبت
                  </p>
                  <div className="flex gap-4 items-center">
                    <Image src={items.image} width={100} height={100} alt="" />
                    <div className="flex-1">
                      <p className="font-semibold  text-lg text-[#DC1E7A]">
                        {items.name}
                      </p>
                      <p className="font-regular text-sm mt-2 text-[#8F8F8F]">
                        {items.discription}
                      </p>
                    </div>

                    <div className="flex items-center mb-[15%] justify-center gap-2 mr-20">
                      <Image src={Star} width={22} height={22} alt="" />
                      <p className="font-medium text-lg text-[#393939]">
                        {items.rate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[600px] mt-[17.5%]">
              {Doctor.map((items) => (
                <div
                  key={items.id}
                  className="bg-white border border-[#E5E5E5] rounded-xl p-4 shadow-md"
                >
                  <p className="font-medium text-base text-[#393939] mb-2">
                    نام پزشک
                  </p>
                  <div className="flex gap-4 items-center">
                    <Image src={items.image} width={100} height={100} alt="" />
                    <div className="flex-1">
                      <p className="font-regular  text-base text-[#393939]">
                        دکتر: {items.name}
                      </p>
                      <p className="font-regular text-sm mt-2 text-[#8F8F8F]">
                        {items.experienceYear} سال سابقه
                      </p>

                      <div>
                        <div>
                          <p className="font-regular text-xs text-[#8F8F8F]">
                            <span className="text-3xl">.</span>
                            {items.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white w-[568px]  mt-20 px-5 py-8 rounded-lg shadow-md">
            <p className="font-medium text-xl text-[#393939]">جزئیات رزرو</p>

            <div className="flex justify-between mt-10">
              <p className="font-regular text-base text-[#727272]">
                تعداد جلسات:
              </p>
              <p className="font-medium text-base text-[#B01862]">12جلسه</p>
            </div>

            <div className="flex justify-between mt-10">
              <p className="font-regular text-base text-[#727272]">
                تاریخ ساعت مراجعه:
              </p>
              <p className="font-medium text-base text-[#B01862]">
                1403/01/21 18:00
              </p>
            </div>

            <div className="flex justify-between mt-10">
              <p className="font-regular text-base text-[#727272]">
                قیمت خدمات :
              </p>
              <p className="font-medium text-base text-[#B01862]">
                1.2000.000 تومان
              </p>
            </div>

            <div className="flex  mt-10 rounded-lg"

            >
              <input
              
                type="text"
                className="bg-[#FFF7FE]  w-[90%] h-[40px] rounded-xl placeholder:text-[#393939] px-3 font-regular text-base"
                placeholder="کد تخفیف دارید"
               
              />
              <button className="bg-[#F5BCD7] w-[104px] h-[40px] text-white rounded-l-xl">
                اعمال
              </button>
            </div>
            <div className="mt-10">
                <button className=" bg-[#F1A5CA]  text-white rounded-lg w-[100%] h-[50px] py-2 px-4">
                    تایید و پرداخت
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

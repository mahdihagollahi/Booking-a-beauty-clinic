import React, { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import DoctorSaman from "@/assent/Img/Doctors/DoctorSaman.svg";
import DoctorSomaye from "@/assent/Img/Doctors/DoctorSomaye.svg";
import DoctorSepehr from "@/assent/Img/Doctors/DoctorSepehr.svg";
import DoctorSara from "@/assent/Img/Doctors/DoctorSara.svg";
import DoctorDelara from "@/assent/Img/Doctors/DoctorDelara.svg";
import RoutDoctor from "@/assent/Img/Doctors/RoutDactor.svg";
import LeftFlower from "@/assent/Img/Doctors/LeftFlower.svg";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import NoranidNews from "../Doctors/NoranidNews";

interface Doctor {
  id: number;
  image: StaticImageData;
  name: string;
  Expertise: string;
  skils: string;
  day1: string;
  day2: string;
  time1: string;
  time2: string;
}

const Doctors = () => {
  const ShowDoctors: Doctor[] = [
    {
      id: 1,
      image: DoctorSaman,
      name: "سامان کریمی",
      Expertise: "پوست و مو ",
      skils: "جانشین دبیر بورد پوست ایران",
      day1: "شنبه",
      day2: "پنجشنبه",
      time1: "14",
      time2: "21",
    },
    {
      id: 2,
      image: DoctorSomaye,
      name: "سمیه ولیپور",
      Expertise: "تزریقات زیبایی",
      skils: "جانشین دبیر بورد پوست ایران",
      day1: "شنبه",
      day2: "پنجشنبه",
      time1: "14",
      time2: "21",
    },
    {
      id: 3,
      image: DoctorSepehr,
      name: "سپهر رسولی",
      Expertise: "حراجی پلاستیک",
      skils: "جانشین دبیر بورد پوست ایران",
      day1: "شنبه",
      day2: "پنجشنبه",
      time1: "14",
      time2: "21",
    },
    {
      id: 4,
      image: DoctorSara,
      name: "سارا زمانی",
      Expertise: "تزریقات زیبایی",
      skils: "جانشین دبیر بورد پوست ایران",
      day1: "شنبه",
      day2: "پنجشنبه",
      time1: "14",
      time2: "21",
    },
    {
      id: 5,
      image: DoctorDelara,
      name: "دلارا رحمانی",
      Expertise: "پوست و مو",
      skils: "جانشین دبیر بورد پوست ایران",
      day1: "شنبه",
      day2: "پنجشنبه",
      time1: "14",
      time2: "21",
    },

    {
        id: 6,
        image: DoctorSaman,
        name: "امیر رضا حنیف نیا",
        Expertise: "پوست ٍمو و لیزر",
        skils: "جانشین دبیر بورد پوست ایران",
        day1: "شنبه",
        day2: "پنجشنبه",
        time1: "14",
        time2: "21",
      },

      {
        id: 7,
        image: DoctorSomaye,
        name: "یاسمن احمدی",
        Expertise: "پوست ٍمو و لیزر",
        skils: "جانشین دبیر بورد پوست ایران",
        day1: "شنبه",
        day2: "پنجشنبه",
        time1: "14",
        time2: "21",
      },
  ];

  return (
    <div className="h-full">
      <div className="bg-white">
        <Navbar />
      </div>

      <div>
        <div className="mt-20 px-24">
          <Image src={RoutDoctor} width={190} height={30} alt="" />
        </div>

        {ShowDoctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className={`flex h-full mt-60 px-20 bg-[#f8f8f8] ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}

          >
            <div className="relative w-[70%] h-[347px] bg-white shadow-sm rounded-2xl flex justify-between "
            style={{zIndex:'9'}}
            >
              <div className="py-5 px-6">
                <p className="font-demiBold text-xl text-[#DC1E7A]">
                  دکتر {doctor.name}
                </p>
                <p className="mt-4 font-medium text-lg text-[#565656]">
                  متخصص {doctor.Expertise}
                </p>
                <p className="mt-6 font-medium text-base text-[#8F8F8F]">
                  <span className="text-3xl ml-2">.</span>
                  {doctor.skils}
                </p>
                <p className="font-medium text-lg text-[#565656] mt-5">
                  روز های {doctor.day1} تا {doctor.day2}:{" "}
                  <span className="font-medium text-lg text-[#DC1E7A]">
                    از ساعت {doctor.time1} تا {doctor.time2}
                  </span>
                </p>
              </div>
              <div className="mt-24 mr-8">
                <Image src={LeftFlower} width={170} height={269} alt="" />
              </div>
            </div>

            <div
              className={`absolute ${
                index % 2 === 0 ? "mr-[60%]" : "ml-[60%]"
              } -mt-20`}
              style={{ background: "inherit" }}
            >
              <Image src={doctor.image} width={437} height={488} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
      <NoranidNews/>
      </div>
     
      <Footer/>
    </div>
  );
};

export default Doctors;

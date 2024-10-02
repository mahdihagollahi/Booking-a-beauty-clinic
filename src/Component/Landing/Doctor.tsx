"use client";
import React, { Fragment, useState } from "react";
import background from "@/assent/Img/Landing/doctorsBackground.svg";
import DoctorData from "./Doctor/DoctorData";
import Image from "next/image";
import FrameDoctorOrginal from "@/assent/Img/Landing/FrameDoctorOrginal.svg";
import ArrowLeft from "@/assent/Img/Landing/ArrowLeft.svg";
import ArrowRight from "@/assent/Img/Landing/ArrowRight.svg";
import Flower from "@/assent/Img/Landing/flower.svg";
const Doctor = () => {
  const Data = DoctorData().doctors;
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  const handleNextDoctor = () => {
    setCurrentDoctorIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevDoctor = () => {
    setCurrentDoctorIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };

  const handleDoctorClick = (index: number) => {
    setCurrentDoctorIndex(index);
  };

  const selectedDoctor = Data[currentDoctorIndex];

  return (
    <Fragment>
      <div
        className="bg-no-repeat pt-24 h-[42%] mt-20 "
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div
          className="mr-44 cursor-pointer  "
          onClick={() =>
            handleDoctorClick((currentDoctorIndex + 1) % Data.length)
          }
        >
          <Image
            src={FrameDoctorOrginal}
            width={114}
            height={114}
            alt=""
            className="absolute -mt-20"
          />
          <Image
            src={Data[(currentDoctorIndex + 1) % Data.length].image}
            width={114}
            height={114}
            alt=""
            className="absolute -mt-[73px]"
          />
        </div>

        <div
          className="mr-24 cursor-pointer  "
          onClick={() =>
            handleDoctorClick((currentDoctorIndex + 2) % Data.length)
          }
        >
          <Image
            src={FrameDoctorOrginal}
            width={114}
            height={114}
            alt=""
            className="absolute mt-1"
          />
          <Image
            src={Data[(currentDoctorIndex + 2) % Data.length].image}
            width={114}
            height={114}
            alt=""
            className="absolute mt-3"
          />
        </div>

        <div
          className="mr-44 cursor-pointer  "
          onClick={() =>
            handleDoctorClick((currentDoctorIndex + 3) % Data.length)
          }
        >
          <Image
            src={FrameDoctorOrginal}
            width={114}
            height={114}
            alt=""
            className="absolute mt-20"
          />
          <Image
            src={Data[(currentDoctorIndex + 3) % Data.length].image}
            width={114}
            height={114}
            alt=""
            className="absolute mt-[6.1%]"
          />
        </div>

        <div
          className="flex gap-1 items-center absolute z-10 mr-[23%] mt-[14%]"
          style={{ zIndex: "50" }}
        >
          <button className="" onClick={handleNextDoctor}>
            <Image src={ArrowRight} width={24} height={24} alt="Previous" />
          </button>
          <button className="" onClick={handlePrevDoctor}>
            <Image src={ArrowLeft} width={24} height={24} alt="Next" />
          </button>
        </div>

        <div className="flex gap-5 -mt-10  mr-64   items-center">
          <Image src={FrameDoctorOrginal} width={205} height={205} alt="" />
          <Image
            src={selectedDoctor.image}
            width={205}
            height={205}
            alt=""
            className="absolute mt-5 "
          />
          <div>
            <h1 className="text-xl text-[#DC1E7A] font-medium">
              {selectedDoctor.name}
            </h1>
            <h2 className="text-base text-[#2B2B2B] font-regular mt-2">
              {selectedDoctor.specialty}
            </h2>
            <p className="mt-4 text-[#565656] font-regular text-sm">
              {selectedDoctor.availability}
            </p>
            <ul className="mt-4 list-disc list-inside text-[#8F8F8F] text-sm font-regular">
              {selectedDoctor.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" absolute mr-[42.9%] -mt-1 bg-no-repeat ">
        <Image src={Flower} width={52} height={58} alt="" />
      </div>
    </Fragment>
  );
};

export default Doctor;
